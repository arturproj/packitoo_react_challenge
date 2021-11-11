import * as React from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
  reselect,
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

const exampleState = {
  filterID: 1,
  briefs: [
    { name: "apple", value: 1.2 },
    { name: "orange", value: 0.95 },
  ],
};

class BriefList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    getBriefs().then((res) => this.props.loadBriefs(res));
  }
  componentDidUpdate() {
    console.log("Update briefs", this.props.briefs);
  }

  render() {
    const { briefs, products, filter } = this.props;
    let filtredBriefs = [];

    if (filter.active && filter.product !== null) {
      console.log(
        filter,
        briefs.filter((brief) => brief.productId === filter.product.id)
      );
      filtredBriefs = briefs.filter(
        (brief) => brief.productId === filter.product.id
      );
    } else {
      filtredBriefs = [...briefs];
    }

    return (
      <React.Fragment>
        BriefList
        {filtredBriefs.length ? (
          filtredBriefs.map((brief, idx) => (
            <ItemList key={idx}>
              <BriefCard
                title={brief.title}
                comment={brief.comment}
                product={products.find((x) => x.id === brief.productId)}
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
export default connect(mapStateToProps, mapDispatchToProps)(BriefList);
