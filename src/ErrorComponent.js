import React from 'react'

export const ErrorComponent = () => {
  throw new Error('Some error')

  // eslint-disable-next-line no-unreachable
  return (
    <div>
      CodeRoad ErrorComponent
    </div>
  )
}

export default ErrorComponent
