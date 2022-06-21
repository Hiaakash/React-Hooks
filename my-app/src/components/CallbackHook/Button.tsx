import React, { memo, ReactElement } from 'react'

const Button = ({onClick, children} : {onClick: ()=> void, children: string}) => {
  console.log(`BUTTON WITH ${children}`)
  return (
    <div><button onClick={onClick}>{children}</button></div>
  )
}

export default memo(Button)
