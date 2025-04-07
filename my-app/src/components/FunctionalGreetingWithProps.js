import React from "react";

// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }


const FunctionalGreetingWithProps = ({name, greeting, experience}) =>  {
    return <h1>Welcome {name} {greeting} {experience}</h1>
};



export default FunctionalGreetingWithProps;



