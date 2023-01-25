import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import ResetPass from "../ResetPass";
const Login = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("hey");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const showModal = () => {
    setIsOpen(true);
    setTitle("Login");
    document.body.style.backgroundColor = "white";
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Login successfully");
        hideModal();
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/invalid-email).")
          toast.error("Invalid Email");
        else if (error.message == "Firebase: Error (auth/user-not-found).")
          toast.error("Seems you are not registered");
        else toast.error(error.message);
      });
  };
  return (
    <>
      <button onClick={showModal} className="btn btn-outline-dark ms-2">
        <i className="fa fa-sign-in me-1"></i>Login
      </button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={loginUser}>
            <div class="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@email.com"
                aria-describedby="emailHelp"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out if you are not a robot
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2">
              Login
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <ResetPass></ResetPass>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
