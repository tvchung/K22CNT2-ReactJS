import React from 'react'

export default function TVC_FuncComp(props) {
  return (
    <div>
            <h2>Function Component Demo</h2>
            <hr/>
            <div>
                Props: 
                <p>Name: {props.name}</p>
            </div>
    </div>
  )
}
