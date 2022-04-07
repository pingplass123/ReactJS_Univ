import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import "../css/Register.css";

function Register ({ setOpenModal }) {

  async function Register(credentials) {
    return fetch("https://univelear.herokuapp.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
    .then(console.log(credentials));
  }

  const classes = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await Register({
      email,
      password,
      name
    });
    if (response.success) {
      swal("Success", response.message, "User register successfully.", {
        buttons: false,
        timer: 2000
      }).then(value => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.token);
        window.location.reload();
      });
    } else {
      swal("Failed", response.message, "error").then(console.log(response));
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="title">
            <h2 class="fw-bold mb-2 text-uppercase">SIGN UP</h2>
            <p class="text-white-50 mb-5">PLEASE ENTER YOUR INFORMATION</p>
        </div>

        <form noValidate onSubmit={handleSubmit}>
          <div className="input-container">
            <i class="fa fa-user icon"></i>
            <input class="input-field" type="text" className="form-control" placeholder="Enter name" required onChange={e => setName(e.target.value)} />
          </div>


          <div className="input-container">
            <i class="fa fa-envelope icon"></i>
            <input class="input-field" type="email" className="form-control" placeholder="Enter email" required onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="input-container">
            <i class="fa fa-key icon"></i>
            <input class="input-field" type="password" className="form-control" placeholder="Enter password" required onChange={e => setPassword(e.target.value)} />
          </div>

          <div className="modal-footer">
          <Button class="btn" type="submit" className={classes.submit} >
              SIGN UP
          </Button>

          </div>
        </form>
      </div>   
    </div>
  );
}

export default Register;