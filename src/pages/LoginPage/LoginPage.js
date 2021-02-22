import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import usersOperations from "../../redux/users/users-ops";
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
import routes from "../../routes";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginPage({ onSubmit }) {
  const classes = useStyles();

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      email: e.target[0].value,
      password: e.target[2].value,
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
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={submit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <NavLink exact to={routes.register}>
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(usersOperations.logInUsers(text)),
});

export default connect(null, mapDispatchToProps)(LoginPage);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import usersOperations from "../../redux/users/users-ops";

// class LoginPage extends Component {
//   state = {
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
//     this.setState({ email: "", password: "" });
//   };

//   render() {
//     return (
//       <form onSubmit={this.formSubmit}>
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
//         <button type="submit">Log In</button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (text) => dispatch(usersOperations.logInUsers(text)),
// });

// export default connect(null, mapDispatchToProps)(LoginPage);
