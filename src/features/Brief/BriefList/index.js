import * as React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../actionsCreator";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const ItemList = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class BriefList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        BriefList
        {this.props.briefs.map((product, idx) => (
          <ItemList key={idx}>{JSON.stringify(product)}</ItemList>
        ))}
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, {})(BriefList);
