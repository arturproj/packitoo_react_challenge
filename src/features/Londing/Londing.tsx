import React from "react";
import { connect } from "react-redux";
import {
  loadingStateToProps,
  selectStatus,
} from "./actionsCreator";
import CircularProgress from "@mui/material/CircularProgress";

export function Loader(props: any) {
  console.log("Loading", props);

  return selectStatus(props) ? (
    <div
      style={{
        backgroundColor: "#9e9e9e69",
        position: "fixed",
        height: "-webkit-fill-available",
        width: " 51%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  ) : null;
}

export default connect(loadingStateToProps, {})(Loader);
