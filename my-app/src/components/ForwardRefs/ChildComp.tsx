import React, { forwardRef } from 'react'

type Props = {}

const ChildComp = forwardRef((props: Props,ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <div><input type="text" ref={ref}/></div>
  )
}
)

export default ChildComp
