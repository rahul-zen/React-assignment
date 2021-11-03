import React from "react";
import { Modal, Button, Grid, TextField, Paper } from "@mui/material";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { createUser, updateUser } from "../store/action/UserActions";
import { makeStyles } from "@mui/styles";

export const UserForm = ({ openModal, modalAction, action, initialValues }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const onClickSubmit = (values) => {
    if (action === "create") {
      dispatch(createUser(values));
    } else {
      dispatch(updateUser(values.id, values));
    }
  };

  return (
    <Modal open={openModal}>
      <Paper className={classes.root}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            onClickSubmit(values);
            modalAction();
          }}
        >
          {({ values, handleChange, resetForm }) => (
            <Form>
              <Grid
                container
                className={classes.formContainer}
                direction="column"
                alignItems="center"
              >
                <Grid item className={classes.inputContainer}>
                  <TextField
                    variant="outlined"
                    label="User Name"
                    name="userName"
                    value={values.userName}
                    fullWidth
                    onChange={handleChange}
                    inputProps={{ maxLength: 50 }}
                    required
                  />
                </Grid>
                <Grid item className={classes.inputContainer}>
                  <TextField
                    variant="outlined"
                    label="Phone Number"
                    name="number"
                    value={values.number}
                    fullWidth
                    onChange={handleChange}
                    inputProps={{ maxLength: 10 }}
                    required
                  />
                </Grid>
                <Grid item className={classes.inputContainer}>
                  <TextField
                    variant="outlined"
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    fullWidth
                    onChange={handleChange}
                    inputProps={{ maxLength: 50 }}
                    required
                  />
                </Grid>
                <Grid item className={classes.buttonContainer}>
                  <Grid container spacing={5}>
                    <Grid item>
                      <Button
                        onClick={() => {
                          resetForm();
                          modalAction();
                        }}
                        className={classes.button}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button type="submit" className={classes.button}>
                        {action === "create" ? "Create User" : "Update User"}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Modal>
  );
};

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #000",
    PaperShadow: 24,
    width: "600px",
  },
  formContainer: {
    paddingTop: "20px",
    paddingBottom: "40px",
  },
  inputContainer: {
    paddingTop: "30px",
    width: "400px",
  },
  buttonContainer: {
    paddingTop: "20px",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#ffffff !important",
    height: 48,
    padding: "0 30px",
  },
});
