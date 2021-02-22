// import React from "react";
// import { connect } from "react-redux";
// import contactsOperations from "../../redux/contacts/contacts-operations";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

// function Form({ state, onSubmit }) {
//   const classes = useStyles();

//   const submit = (e) => {
//     const name = e.target[0].value;
//     const number = e.target[2].value;
//     e.preventDefault();

//     if (name || number) {
//       const duplicate = state.contacts.items.find(
//         (contact) => contact.name === name
//       );

//       duplicate
//         ? alert(`${name} is already in contacts.`)
//         : onSubmit({
//             name: name,
//             number: number,
//           });
//       reset(e);
//     } else {
//       alert("No field is filled");
//       return;
//     }
//   };

//   const reset = (e) => {
//     console.log(e);
//     e.target[0].value = "";
//     e.target[2].value = "";
//   };

//   return (
//     <form
//       className={classes.root}
//       noValidate
//       autoComplete="off"
//       onSubmit={submit}
//     >
//       <TextField
//         id="outlined-basic"
//         label="Name"
//         variant="outlined"
//         name="name"
//       />
//       <TextField
//         id="outlined-basic"
//         label="Number"
//         variant="outlined"
//         name="number"
//       />
//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         color="primary"
//         className={classes.submit}
//       >
//         Add contact
//       </Button>
//     </form>
//   );
// }

// const mapStateToProps = (state) => {
//   return state;
// };

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (text) => dispatch(contactsOperations.addContact(text)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Form);

import React, { Component } from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  inputFormChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    if (name || number) {
      const duplicate = this.props.contacts.items.find(
        (contact) => contact.name === name
      );

      duplicate
        ? alert(`${this.state.name} is already in contacts.`)
        : this.props.onSubmit(this.state);

      this.setState({ name: "", number: "" });
    } else {
      alert("No field is filled");
      return;
    }
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputFormChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.inputFormChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(contactsOperations.addContact(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
