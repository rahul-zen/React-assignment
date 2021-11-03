import React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  Paper,
  TableContainer,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { UserForm } from "../UserForm";
import { ConfirmationModal } from "./ConfirmationModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

export const DataTable = () => {
  const classes = useStyles();

  const userList = useSelector((state) => state.users.userList);
  console.log("userList", userList);

  const [initialValues, setInitialValues] = React.useState({});
  const [openModal, setOpanModal] = React.useState(false);
  const [id, setId] = React.useState();
  const [openConfirmationModal, setOpenConfirmationModal] =
    React.useState(false);

  const modalAction = () => {
    setOpanModal(!openModal);
  };

  const confirmationModalAction = () => {
    setOpenConfirmationModal(!openConfirmationModal);
  };

  const onClickEdit = (value) => {
    setInitialValues(value);
    modalAction();
  };

  const onClickDelete = (value) => {
    setId(value.id);
    confirmationModalAction();
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.headerText}>Name</TableCell>
              <TableCell className={classes.headerText}>Number</TableCell>
              <TableCell className={classes.headerText}>Email</TableCell>
              <TableCell className={classes.headerText}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList &&
              userList.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.userName}</TableCell>
                  <TableCell>{data.number}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => onClickEdit(data)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onClickDelete(data)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UserForm
        openModal={openModal}
        modalAction={modalAction}
        action="edit"
        initialValues={initialValues}
      />
      <ConfirmationModal
        openModal={openConfirmationModal}
        modalAction={confirmationModalAction}
        id={id}
      />
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  tableHead: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  headerText: {
    fontSize: "20px !important",
    color: "#ffffff !important",
    fontWeight: "500 !important",
  },
});
