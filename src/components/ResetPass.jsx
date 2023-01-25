import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
const ResetPass = () => {
  const [email, setEmail] = useState("");
  const ResetPassUser = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your mail to access the rest link");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="container-sm">
      <Modal.Title>Reset Password?</Modal.Title>
      <form onSubmit={ResetPassUser}>
        <div class="mb-3">
          <br />
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
            Enter the registered email if you forgot your password
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out want a reset link to your registered mail
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Reset Password
        </button>
        <div className="container-sm"> </div>
      </form>
    </div>
  );
};

export default ResetPass;
