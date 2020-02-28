import React from 'react'

const Math = (props) => {
  const {num1, operator, num2} = props;
  console.log(props)

  let result;

  switch(operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = num1 + num2;
      break;
  }
  return (
    <span>
      {result}
    </span>
  )
}

export default Math
