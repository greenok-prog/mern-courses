import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeMessage } from "../../redux/reducers/products";
import Slide from "@mui/material/Slide";
function MySnackBar() {
  const dispatch = useDispatch();
  const { isMessage, messageInfo } = useSelector((state) => state.products);

  return (
    <>
      {messageInfo.errors ? (
        messageInfo.errors.map((er) => (
          <Snackbar
            open={isMessage}
            variant="filled"
            onClose={() => dispatch(closeMessage())}
            autoHideDuration={6000}
          >
            <Alert variant="filled" severity={messageInfo.status || "error"}>
              {er.msg}
            </Alert>
          </Snackbar>
        ))
      ) : (
        <Snackbar
          open={isMessage}
          variant="filled"
          onClose={() => dispatch(closeMessage())}
          autoHideDuration={6000}
        >
          <Alert variant="filled" severity={messageInfo.status || "error"}>
            {messageInfo.msg}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}

export default MySnackBar;
