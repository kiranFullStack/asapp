import React from 'react'

export default function Content({ props }) {
  return (
    <div className='border-class'>
      <h1>Content</h1>
      {props.children}
    </div>
  )
}
