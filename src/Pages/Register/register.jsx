import { useState } from "react";
import "./register.css";
import { useDispatch } from "react-redux";
import { changeEmail, changeName } from "../../store/slices/profile";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const [userInfoErrs, setUserInfoErrors] = useState({
    firstNameErr: "",
    emailErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
    profileImageErr: "",
  });

  const validateForm = () => {
    setUserInfoErrors({
      firstNameErr: !userInfo.firstName
        ? "Name is required"
        : "",
      emailErr: !userInfo.email
        ? "Email is required"
        : !/\S+@\S+\.\S+/.test(userInfo.email)
        ? "Email should be in email format"
        : "",
      passwordErr: !userInfo.password
        ? "Password is required"
        : userInfo.password.length < 8
        ? "Password should be at least 8 characters"
        : userInfo.password.length > 12
        ? "Password max length is 12 characters"
        : "",
      confirmPasswordErr: userInfo.password !== userInfo.confirmPassword
        ? "Confirm password should match the password"
        : "",
      profileImageErr: !userInfo.profileImage
        ? "Upload image is required"
        : "",
    });
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setUserInfo({
      ...userInfo,
      profileImage: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (
      Object.values(userInfoErrs).every((err) => err === "")
    ) {
      dispatch(changeName(userInfo.firstName));
      dispatch(changeEmail(userInfo.email));
      navigate('/profile')
    }
  };

  return (
    <div className="register-container">
      <div className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Create your account!</div>

        <div className="input-container ic1">
          <input
            placeholder=""
            type="text"
            className="input"
            id="firstname"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="iLabel" htmlFor="firstname">
            First name
          </label>
          {userInfoErrs.firstNameErr && (
            <p className="error">{userInfoErrs.firstNameErr}</p>
          )}
        </div>

        <div className="input-container ic2">
          <input
            placeholder=""
            type="text"
            className="input"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="iLabel" htmlFor="email">
            Email
          </label>
          {userInfoErrs.emailErr && (
            <p className="error">{userInfoErrs.emailErr}</p>
          )}
        </div>

        <div className="input-container ic2">
          <input
            placeholder=""
            type="password"
            className="input"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="iLabel" htmlFor="password">
            Password
          </label>
          {userInfoErrs.passwordErr && (
            <p className="error">{userInfoErrs.passwordErr}</p>
          )}
        </div>

        <div className="input-container ic2">
          <input
            placeholder=""
            type="password"
            className="input"
            id="confirmPassword"
            name="confirmPassword"
            value={userInfo.confirmPassword}
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="iLabel" htmlFor="confirmPassword">
            Confirm Password
          </label>
          {userInfoErrs.confirmPasswordErr && (
            <p className="error">{userInfoErrs.confirmPasswordErr}</p>
          )}
        </div>

        <div className="input-container ic2">
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleImageChange}
          />
          {userInfoErrs.profileImageErr && (
            <p className="error">{userInfoErrs.profileImageErr}</p>
          )}
        </div>

        <button className="submit" onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;
