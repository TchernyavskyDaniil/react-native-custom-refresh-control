import React, { useState, useCallback } from 'react';
import { RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

import { useUnmount } from './useUnmount';

export const CustomRefreshControl = ({ callbackError, callback, callbackParams }) => {
  const [refreshing, setRefreshing] = useState(false);

  const cancelRefreshing = useCallback(() => setRefreshing(false), []);

  const setClearedInterval = useCallback(async () => {
    if (callback) {
      try {
        await callback(callbackParams);
      } catch (e) {
        callbackError(e);
      }
    }

    cancelRefreshing();
  }, [callback, callbackError, callbackParams, cancelRefreshing]);

  const handleOnRefresh = useCallback(async () => {
    setRefreshing(true);
    await setClearedInterval();
  }, [setClearedInterval]);

  useUnmount(cancelRefreshing);

  return (
    <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
  )
};

CustomRefreshControl.defaultProps = {
  callback: null,
  callbackError: () => {},
  callbackParams: undefined,
};

CustomRefreshControl.propTypes = {
  callback: PropTypes.func,
  callbackError: PropTypes.func,
  callbackParams: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.oneOf([undefined]),
  ]),
};
