import * as React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./actionsCreator";
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

class BriefList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    getBriefs().then((res) => this.props.loadBriefs(res));
    console.log("Load briefs", this.props.briefs);
  }
  componentDidUpdate() {
    console.log("Update briefs", this.props.briefs);
    // if (this.props.briefs !== this.state.briefs) {
    //   this.setState({ briefs: this.props.briefs });
    // }
  }
  render() {
    const { briefs, products } = this.props;
    return (
      <React.Fragment>
        BriefList
        {briefs.length ? (
          briefs.map((brief, idx) => (
            <ItemList key={idx}>
              <BriefCard
                title={brief.title}
                comment={brief.comment}
                product={products.find((x) => x.id === brief.id)}
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
