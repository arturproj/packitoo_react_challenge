import * as React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./actionsCreator";
import { getProducts, postBrief } from "../../share/api/brief";
import SelectForm from "./components/SelectForm";
import { Grid, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

class BriefForm extends React.Component<any, any> {
  constructor(state: any) {
    super(state);
    this.state = {
      title: "",
      productId: 0,
      products: [],
      comment: "",
    };

    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /**
   *
   */
  handleTextFieldChange(e: any): void {
    const { id, value } = e.target;
    if (value !== this.state[id]) {
      this.setState({ [id]: value });
    }
  }
  /**
   *
   */
  handleSubmit(e: any): void {
    e.preventDefault();
    const { title, productId, comment } = this.state;

    postBrief({ title, productId, comment })
      .then((res) => {
        this.props.loadBriefs([...this.props.briefs, res]);
      })
      .finally(() => this.setState({ title: "", productId: 0, comment: "" }));
  }
  /**
   *
   */
  componentDidMount() {
    getProducts().then((res) => this.props.loadProducts(res));
  }

  /**
   *
   */
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={12}>
            <TextField
              required
              fullWidth
              sx={{ m: "auto" }}
              id="title"
              label="Title"
              value={this.state.title}
              onChange={this.handleTextFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <SelectForm
              label="Product ID"
              id="productId"
              products={this.props.products}
              productId={this.state.productId}
              handleTextFieldChange={this.handleTextFieldChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              required
              multiline
              minRows={3}
              maxRows={5}
              fullWidth
              sx={{ m: "auto" }}
              id="comment"
              label="Comment"
              value={this.state.comment}
              onChange={this.handleTextFieldChange}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={this.handleSubmit}
            >
              save brief
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BriefForm);
