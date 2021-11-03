import React from "react";
import { v4 as uuidv4 } from "uuid";
import { UserForm } from "../UserForm";
import { Grid, Button } from "@mui/material";
import { DataTable } from "./DataTable";
import { makeStyles } from "@mui/styles";

export const Home = () => {
  const classes = useStyles();
  const [openModal, setOpanModal] = React.useState(false);

  const initialValues = {
    id: uuidv4(),
    userName: "",
    number: "",
    email: "",
  };

  const modalAction = () => {
    setOpanModal(!openModal);
  };

  return (
    <React.Fragment>
      <Grid container className={classes.contianer}>
        <Grid item xs={12} className={classes.buttonWrapper}>
          <Button className={classes.button} onClick={() => modalAction()}>
            ADD ROW
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.tableWrapper}>
          <DataTable
            rows={[
              {
                id: 1,
                userName: "John Cena",
                number: "9898556332",
                email: "john@gmail.com",
              },
            ]}
          />
        </Grid>
      </Grid>
      <UserForm
        openModal={openModal}
        modalAction={modalAction}
        action="create"
        initialValues={initialValues}
      />
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  contianer: {
    padding: "10px",
  },
  buttonWrapper: {
    textAlign: "end",
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
  tableWrapper: {
    paddingTop: "20px",
  },
});
