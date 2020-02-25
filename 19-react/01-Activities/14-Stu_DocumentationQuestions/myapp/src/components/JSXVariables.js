import React from "react";

const myName = "Cody"
const iThink = "Is going swimmingly"
const vowArr = ["a","e","i","o","u"]
const vowelRemove = () => {
  const nameStr = myName.split("");
  const returnStr = [];
  nameStr.forEach(element => {
    if (!vowArr.includes(element)) {
      returnStr.push(element);
    }
  });
  return returnStr.join("");
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {myName}</h1>
          <h2>My name has {myName.length} letters</h2>
          <h2>I think React {iThink}</h2>
          <h2>My name without vowels is: {vowelRemove(myName)}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
