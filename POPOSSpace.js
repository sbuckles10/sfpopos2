
import React from 'react'
import logo from './logo.svg'
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address } = props
  return (
    <div className="POPOSSpace">
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Hello"
      />
      <h1>{props.name}</h1>
      <div>{props.address}</div>
    </div>
  )
}

export default POPOSSpace
