import React from 'react'

function Memocomponent({name}) {
    console.log('Rendering memo component')
  return (
    <div>Memocomponent {name}</div>
  )
}
//to add the momo
export default React.memo(Memocomponent)