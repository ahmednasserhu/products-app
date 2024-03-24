import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./profile.css"
function profile() {
  return (
    <>
      <button className="profile-style">
        <FontAwesomeIcon icon={faUser} />
      </button>
    </>
  );
}

export default profile;
