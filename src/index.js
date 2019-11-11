import React, { useState, useCallback } from 'react';
import { RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

import { useUnmount } from './useUnmount';

export const CustomRefreshControl = ({
 callbackError,
 callback,
 callbackParams,
 delay,
 delayCallback,
 controlParams,
 style,
  children
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const setClearedInterval = useCallback(async () => {
    if (delay) {
      setTimeout(delayCallback, delay)
    }

    if (callback) {
      try {
        await callback(callbackParams)
      } catch (e) {
        callbackError(e)
      }
    }

    cancelRefreshing()
  }, [callback, callbackError, callbackParams, cancelRefreshing, delay, delayCallback]);

  const handleOnRefresh = useCallback(async () => {
    setRefreshing(true);
    await setClearedInterval()
  }, [setClearedInterval]);

  const cancelRefreshing = useCallback(() => setRefreshing(false), []);

  useUnmount(cancelRefreshing);

  return <RefreshControl children={children} style={style} refreshing={refreshing} onRefresh={handleOnRefresh} {...controlParams} />
};

CustomRefreshControl.defaultProps = {
  callback: null,
  callbackError: () => {},
  callbackParams: undefined,
  controlParams: {},
  delay: null,
  delayCallback: () => {},
};

CustomRefreshControl.propTypes = {
  callback: PropTypes.func,
  callbackError: PropTypes.func,
  callbackParams: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.oneOf([undefined]),
  ]),
  controlParams: PropTypes.object,
  delay: PropTypes.number,
  delayCallback: PropTypes.func,
};
