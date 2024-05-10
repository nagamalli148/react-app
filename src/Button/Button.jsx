import styles from "./Button.module.css";
function Button() {
  //js object
  const styles = {
    backgroundColor: "#008cba",
    padding: "10px 20px",
    border: "none",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleClick = () => console.log("OUCH!");

  return <button onClick={handleClick}> Click Me</button>;
  //<button style={styles}>Click Me</button>;
}

export default Button;
