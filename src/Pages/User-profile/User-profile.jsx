import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import './User-profile.css'

function UserProfile() {

  const profile = useSelector((state) => state.profile);

  return (
    <div className="profile-container">
      <Card border="primary" style={{ width: '18rem', margin:'auto' }}>
        <Card.Header>FullName: {profile.fullName}</Card.Header>
        <Card.Body>
          <Card.Title>Email: {profile.email}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserProfile;
