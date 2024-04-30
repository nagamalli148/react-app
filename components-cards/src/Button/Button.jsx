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

  return <button style={styles}>Click Me</button>;
}

export default Button;
