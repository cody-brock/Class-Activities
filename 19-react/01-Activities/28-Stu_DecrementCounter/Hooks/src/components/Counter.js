import React, {useState} from "react";
import CardBody from './CardBody';

// By extending the React.Component class, Counter inherits functionality from it
const Counter = () => {
  const [count, setCount] = useState(0)

  // handleIncrement increments this.state.count by 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <CardBody
          count={count} 
          handleDecrement={handleDecrement} 
          handleIncrement={handleIncrement} 
        />
      </div>
    );
}

export default Counter;
