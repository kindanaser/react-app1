import React from 'react'

export default function Product(props) {
  return (
    <div className='product col-md-4'>
    <h2>{props.title}</h2>
    <p className='mb-0'>{props.desc}</p>
    <span className='text-danger'>{props.price}</span>
    </div>
  )
}
