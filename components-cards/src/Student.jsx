function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <Student name="bob" />
    </div>
  );
}

export default Student;
