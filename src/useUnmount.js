import React from 'react'

export const useUnmount = f => {
  const fWrapper = React.useRef(f)
  if (fWrapper.current !== f) {
    fWrapper.current = f
  }
  React.useEffect(() => () => fWrapper.current(), [])
}
