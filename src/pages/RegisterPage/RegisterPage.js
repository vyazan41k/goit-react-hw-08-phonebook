import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import usersOperations from "../../redux/users/users-ops";
// import Avatar from "@material-ui/core/Avatar";
import routes from "../../routes";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegisterPage({ onSubmit }) {
  const classes = useStyles();

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      name: e.target[0].value,
      email: e.target[2].value,
      password: e.target[4].value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={submit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink exact to={routes.login}>
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(usersOperations.addUsers(text)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import usersOperations from "../../redux/users/users-ops";

// class RegisterPage extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   inputFormChange = (event) => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   formSubmit = (e) => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     return (
//       <form onSubmit={this.formSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.inputFormChange}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="text"
//             name="email"
//             value={this.state.email}
//             onChange={this.inputFormChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="text"
//             name="password"
//             value={this.state.password}
//             onChange={this.inputFormChange}
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (text) => dispatch(usersOperations.addUsers(text)),
// });

// export default connect(null, mapDispatchToProps)(RegisterPage);
