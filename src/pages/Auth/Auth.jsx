import React, { useState } from "react";
import styled from "styled-components";
import logoImg from "../../assets/i-logo.png";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const initialState = {
  username: "",
  email: "",
  password: "",
};
const Auth = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const [visible, setVisible] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const { username, email, password } = state;

  const Provider = new GoogleAuthProvider();
  const providerGit = new GithubAuthProvider();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signUp) {
      if (username && email && password) {
        const { user } = createUserWithEmailAndPassword(auth, email, password)
          .then((response) => {
            setDoc(doc(db, "users", user.uid), {
              ...state,
              timestamp: serverTimestamp(),
            });
            updateProfile(user, { displayName: `${username}` });
            console.log(response.user);
          })
          .catch((err) => {
            const errCode = err.code;
            const errMsg = err.message;
            console.log({ errCode }, { errMsg });
          }); 
          navigate('/success');
      } else {
        if (email && password) {
          const { user } = signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
              console.log("Welcome:"`${response.user.displayName}`, user);
            })
            .catch((err) => {
              const errCode = err.code;
              const errMsg = err.message;
              console.log({ errCode }, { errMsg });
            });
            navigate('/iexprex-blog');

        }
      }
    }
  };

  const handleGooglePop = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, Provider).then((response) => {
      setDoc(doc(db, "users", response.user.uid),{
        email: response.user.email,
        username: response.user.displayName,
        userProfile: response.user.photoURL,
        userId: response.user.uid,
        timestamp: serverTimestamp()
      })
      navigate(`/just-a-moment/${response.user.uid}`);
    }).catch((err) => {
      alert(err.message);
    })
  }

  //github
  const handleGithubLogin = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, providerGit).then((response) => {
      setDoc(doc(db, "users", response.user.uid),{
        email: response.user.email,
        username: response.user.displayName,
        userProfile: response.user.photoURL,
        userId: response.user.uid,
        timestamp: serverTimestamp()
      })
      navigate(`/just-a-moment/${response.user.uid}`);
    }).catch((err) => {
      alert(err.message);
    })
  }

  //Forget Password handler


  return (
    <AuthPageContainerWrapper>
      <div className="head">
        <h2>
          {!signUp ? "Sign In" : "Sign Up"} <span>iExprex</span>
        </h2>
        <div className="sqr">
          <img src={logoImg} alt="logo" />
        </div>
      </div>
      <FormContainerWrapper>
        <form onSubmit={handleSubmit}>
          {signUp && (
            <div className="input-area">
              <label htmlFor="userName">Username</label>
              <div className="input-form">
                <input
                  type="text"
                  name="username"
                  id="userName"
                  placeholder="John Wick"
                  value={username}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          <div className="input-area">
            <label htmlFor="userEmail">Enter Email</label>
            <div className="input-form">
              <input
                type="email"
                name="email"
                id="userEmail"
                placeholder="iExprex@gmail.com"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-area">
            <label htmlFor="userName">Create Password</label>
            <div className="input-form">
              <input
                type={visible ? "text" : "password"}
                name="password"
                id="userPassword"
                placeholder="i@r86tdwq"
                width={"90%"}
                value={password}
                onChange={handleChange}
              />
              <p
                onClick={() => {
                  setVisible(!visible);
                }}
                style={{ padding: "0px 15px" }}
              >
                {" "}
                {visible ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>
            <div className="float">
              <span>Forgot password?</span>
            </div>
            <div className="input-form">
              <button type="submit">{signUp ? "Sign Up" : "Sign In"}</button>
            </div>
            <small
              onClick={() => {
                setSignUp(!signUp);
              }}
            >
              {signUp
                ? `Already as user? Sign In`
                : `Don't have account? Sign Up`}
            </small>
          </div>
          <div className="sign-with">
            <div className="with-box" onClick={handleGithubLogin }>
              <FaGithub />
            </div>
            <div className="with-box" onClick={handleGooglePop}>
              <FaGoogle color="orangered" />
            </div>
          </div>
        </form>
      </FormContainerWrapper>
    </AuthPageContainerWrapper>
  );
};

const AuthPageContainerWrapper = styled.section`
  width: 28%;
  background: rgba(177, 23, 228, 0.311);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-image: linear-gradient(
    125deg,
    rgba(181, 5, 55, 0.767),
    rgba(190, 57, 5, 0.815)
  );
  padding: 10px;
  border-radius: 1rem;
  box-shadow: -184px 58px 249px 45px rgba(201, 36, 2, 0.28);
  -webkit-box-shadow: -184px 58px 249px 45px rgba(10, 10, 10, 0.169);
  -moz-box-shadow: -184px 58px 249px 45px rgba(6, 6, 6, 0.075);
  backdrop-filter: blur(0.6);
  position: fixed;
  z-index: 1000;
  height: max-content;
  right: 2.9rem;
  bottom: 0;
  margin: 1rem auto;
  transform: scale(1.05);
  transition-delay: 1s;

  .head {
    background: #fefefe;
    border-radius: 0.5rem;
    border: 1px solid #d50558;
    box-shadow: 0 1rem 20px rgba(0, 0, 0, 0.082);
    width: 100%;
    height: 60px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 2rem;
      font-weight: 900;
      color: rgb(2, 0, 0);
      line-height: 1.2;
      span {
        color: transparent;
        background-clip: text;
        -moz-background-clip: text;
        -webkit-background-clip: text;
        background-image: linear-gradient(135deg, orangered, #d50558);
      }
    }
    .sqr {
      width: 40px;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 0, 0, 0.288);
      border-radius: 0.2rem;
      img {
        width: 100%;
      }
    }
  }
`;

const FormContainerWrapper = styled.article`
  width: 100%;
  height: 90%;
  margin: 1rem 0;
  display: flex;
  form {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .input-area {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition-delay: 700ms;
      label {
        align-self: flex-start;
        padding-left: 1rem;
        font-size: 1.25rem;
        font-weight: 700;
        color: #ffffff;
        margin: 0;
        line-height: 1.4;
      }
      small {
        float: right;
        font-size: 15px;
        transform: translateX(5rem);
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }

      .float {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span {
          padding-right: 1rem;
          color: #f7eeff;
          cursor: pointer;
          font-size: 15px;
        }
      }
      .input-form {
        width: 90%;
        height: 45px;
        margin-bottom: 10px;
        border-radius: 0.5rem;
        box-shadow: 0 1rem 20px rgba(0, 0, 0, 0.105);
        position: relative;
        letter-spacing: 2px;
        p {
          position: absolute;
          top: 1rem;
          right: 0.5rem;
          cursor: pointer;
        }
        input,
        button {
          width: 100%;
          height: 100%;
          padding: 0 12px;
          border-radius: inherit;
          font-size: 16px;
          font-weight: 700;
        }
        button {
          background: linear-gradient(
            165deg,
            rgb(198, 8, 219),
            rgb(223, 128, 4)
          );
          color: #f7eeff;
          cursor: pointer;
          font-size: 18px;
          font-weight: 900;
        }
      }
    }
    .sign-with {
      width: 90%;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin: 5px 0;
      .with-box {
        width: 95%;
        height: 98%;
        background: rgba(135, 7, 150, 0.89);
        background: #ffffffcf;
        box-shadow: 0 1rem 20px rgba(0, 0, 0, 0.105);
        border-radius: 0.3rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
      }
    }
  }
`;

export default Auth;
