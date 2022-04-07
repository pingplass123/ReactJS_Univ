import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import "../css/ModalSignin.css";

function ModalSignin ({ setOpenModalLogin }) {
  async function loginUser(credentials) {
    return fetch("https://univelear.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(credentials)
    }).then(data => data.json());
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const classes = useState();





  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    console.log(response);
    if (response.success) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.name);
      window.location.reload();
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
              setOpenModalLogin(false);
            }}
          >
            X
          </button>
        </div>

        <div className="title">
            <h2 class="fw-bold mb-2 text-uppercase">SIGN IN</h2>
            <p class="text-white-50 mb-5">PLEASE ENTER EMAIL AND PASSWORD</p>
        </div>

        <form noValidate onSubmit={handleSubmit}>
          <div className="input-container">
            <i class="fa fa-envelope icon"></i>
            <input class="input-field" type="email" className="form-control" placeholder="Enter email" required onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="input-container">
            <i class="fa fa-key icon"></i>
            <input class="input-field" type="password" className="form-control" placeholder="Enter password" required onChange={e => setPassword(e.target.value)} />
          </div>

          <div className="input-container">
            <div class="checkbox">
              <input id="remember" type="checkbox" />
              <label for="remember">Remember me</label>
            </div>
          </div>

          <div className="modal-footer">
            <Button class="signinbtn" type="submit" className={classes.submit}>
              SIGN IN
            </Button>

          </div>
        </form>
        
      </div>   


    </div>
  );
}

export default ModalSignin;