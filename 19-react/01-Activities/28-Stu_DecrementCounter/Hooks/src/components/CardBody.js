import React from 'react'

const CardBody = (props) => {
    return (
        <div className="card-body">
          <p className="card-text">Click Count: {props.count}</p>
          <button className="btn btn-success" onClick={props.handleIncrement}>
            Increment
          </button>
          <button className = "btn btn-danger ml-2" onClick={props.handleDecrement} >
            Decrement 
            </button>
        </div>
    )
}

export default CardBody
