import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  //setName = "Bob";

  const updateName = () => {
    setName("Guest");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {};

  return (
    <div>
      <p>Name: {name} </p>
      <button onClick={updateName}>Set Name</button>
      <h1>Age: {age} </h1>
      <button onClick={updateAge}>Increment Age</button>
    </div>
  );
}

export default MyComponent;
