import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));





export default function Post(props) {
  const classes = useStyles();

  const { sub_name } = useParams();
  // const { id } = (props.location && props.location.state) || {};
  // const token = localStorage.getItem('token');

  // ติดยังไม่สามารถ logOut เเละ ลบ token ออกจาก database ได้
  
  // async const signOut = () => {
  //   var url = "http://127.0.0.1:8000/api/logout";

  //   const config = {
  //       headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //           'Authorization': bearer_token,
  //       }
  //     };
  //   await axios.post(url, config)
  //       .then(response => {
  //           window.location.href = '/'
  //       })
  //       .catch(error => (console.log(error)))
  // }


  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await logout({
      
  //   }).then(console.log(token));
  //   console.log(response);
  //   if (response.success) {
  //     window.location.href = "/";
  //   } else {
  //     swal("Failed", response.message, "error").then(console.log(response));
  //   }
  // };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  

  return (
    <div>
    <div className={classes.root}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5">
          Welcome To Post Page Timeline - {sub_name} - 
          <Button color="primary" variant="contained" onClick={handleLogout}>
              Sign Out
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}