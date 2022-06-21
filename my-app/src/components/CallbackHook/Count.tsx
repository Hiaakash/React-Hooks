import React, { memo } from 'react'

const Count = ({text, value} : {text: string, value: number }) => {
  console.log(`COUNT WITH ${text}`)
  return (
    <div>{`COUNT - ${text} - ${value}`}</div>
  )
}

export default memo(Count)
