import React from "react";
import { connect } from "react-redux";
import { loadingStateToProps, selectStatus } from "./actionsCreator";
import CircularProgress from "@mui/material/CircularProgress";

export function Loader() {
  return (
    <div
      style={{
        backgroundColor: "#9e9e9e69",
        position: "relative",
        height: "98vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1005,
      }}
    >
      <CircularProgress />
    </div>
  );
}
export default Loader;
