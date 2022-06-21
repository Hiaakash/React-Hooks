import React, { memo } from 'react'

const Title = () => {
  console.log(`TITLE`)
  return (
    <div><h1>Callback Hook</h1></div>
  )
}
export default memo(Title)
