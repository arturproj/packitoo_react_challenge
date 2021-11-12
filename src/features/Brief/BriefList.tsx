import * as React from "react";
import { connect } from "react-redux";
import {
  briefStateToProps,
  briefDispatchToProps,
  selectProducts,
  filtredBriefs,
} from "./actionsCreator";
import {
  loadingStateToProps,
  loadingDispatchToProps,
  selectStatus,
} from "../Londing/actionsCreator";
import Londing from "../Londing/Londing";
import { getBriefs } from "../../share/api/brief";
import BriefCard from "./components/BriefCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const ItemList = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class BriefList extends React.Component<any, any> {
  componentDidMount() {
    getBriefs().then((res) => this.props.loadBriefs(res));
  }

  render() {
    return (
      <React.Fragment>
        {selectStatus(this.props) ? (
          <Londing />
        ) : filtredBriefs(this.props).length ? (
          filtredBriefs(this.props).map((brief: Brief, idx: number) => (
            <ItemList key={idx}>
              <BriefCard
                title={brief.title}
                comment={brief.comment}
                product={selectProducts(this.props).find(
                  (x: Product) => x.id === brief.productId
                )}
              />
            </ItemList>
          ))
        ) : (
          <ItemList>Brefs not found</ItemList>
        )}
      </React.Fragment>
    );
  }
}

// BriefList.propTypes = {};

export const connectedBriefList = connect(
  briefStateToProps,
  briefDispatchToProps
)(BriefList);

export default connect(
  loadingStateToProps,
  loadingDispatchToProps
)(connectedBriefList);
