import profile from "./assets/profile.svg";

function Card(props) {
  return (
    //https://via.placeholder.com/150
    <div className="card">
      <img className="card-image" src={profile} alt="profile-image"></img>
      <h2 className="card-title">{props.user} </h2>
      <p> {props.company} </p>
    </div>
  );
}

export default Card;
