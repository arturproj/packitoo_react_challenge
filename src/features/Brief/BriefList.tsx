import * as React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
  selectProducts,
  filtredBriefs,
} from "./actionsCreator";
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
        {filtredBriefs(this.props).length ? (
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

export default connect(mapStateToProps, mapDispatchToProps)(BriefList);
