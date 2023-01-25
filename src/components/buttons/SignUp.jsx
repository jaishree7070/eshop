import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../../firebase/config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("hey");

  const signUpUser = (e) => {
    e.preventDefault();
    if (cPassword === password) {
      console.log(email, password, cPassword);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          const initialValue = [];
          const u = name.charAt(0).toLocaleUpperCase() + name.slice(1);
          setName(u);
          addDoc(collection(db, "users"), {
            userName: name,
            email: email,
            password: password,
            address: address,
            cart: initialValue,
            uid: user.uid,
          })
            .then(() => {
              toast.success("Registration successfully");
            })
            .catch((error) => {
              if (error.message == "Firebase:Error(auth/invalid-email).")
                toast.error("Invalid Email");
              else if (
                error.message == "Firebase: Error (auth/email-already-in-use)."
              )
                toast.error("Email Already Registered");
            });
        })
        .catch((error) => {
          if (error.message == "Firebase:Error(auth/invalid-email).")
            toast.error("Invalid Email");
          else if (
            error.message == "Firebase: Error (auth/email-already-in-use)."
          )
            toast.error("Email Already Registered");
        });
      hideModal();
    } else toast.error("Passwords does not match");
  };
  const showModal = () => {
    setIsOpen(true);
    setTitle("Register");
    document.body.style.backgroundColor = "white";
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={showModal} className="btn btn-outline-dark ms-2">
        <i className="fa fa-user-plus me-1"></i> Register
      </button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={signUpUser}>
            <div class="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Bill Gates"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
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
            <div className="mb-3">
              <label htmlFor="cPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                id="cPassword"
                required
                value={cPassword}
                onChange={(e) => setcPassword(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label htmlFor="email" className="form-label">
                Address
              </label>
              <textarea
                type="text"
                className="form-control"
                id="address"
                placeholder="3rd block, 2nd street ,Street-name, City, State, Pin-Code, Country"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
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
            <button type="submit" className="btn btn-primary w-100">
              SignUp
            </button>
          </form>
          {/* <button type="button" class="btn btn-link" onClick={showModalFooter}>
            Reset Password
          </button> */}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default SignUp;
