import React from "react";
import { Modal, Button, Grid, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/action/UserActions";
import { makeStyles } from "@mui/styles";

export const ConfirmationModal = ({ openModal, modalAction, id }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const onClickConfirm = () => {
    dispatch(deleteUser(id));
    modalAction();
  };

  return (
    <Modal open={openModal}>
      <Paper className={classes.root}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h4>Are you sure you want to delete this item?</h4>
          </Grid>
          <Grid item className={classes.buttonContainer}>
            <Grid container spacing={4}>
              <Grid item>
                <Button
                  onClick={() => onClickConfirm()}
                  className={classes.button}
                >
                  Yes
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={modalAction} className={classes.button}>
                  No
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
    width: "400px",
  },
  buttonContainer: {
    paddingTop: "20px",
    paddingBottom: "20px",
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
