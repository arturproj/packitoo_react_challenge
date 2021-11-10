import * as React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../actionsCreator";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

class BriefForm extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      title: "",
      productId: "",
      comments: "",
    };

    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /**
   *
   */
  handleTextFieldChange({ target }) {
    if (target.value !== this.state[target.id]) {
      this.setState({ [target.id]: target.value });
    }
  }
  /**
   *
   */
  handleSubmit(e) {
    e.preventDefault();
    console.log("Submit", this.state);
    this.props.setNewProduct(this.state);
    this.setState({ title: "", productId: "", comments: "" });
  }
  /**
   *
   */
  componentDidMount() {
    console.log("Mount", this.props);
  }
  componentDidUpdate() {
    console.log("Update", this.props);
  }
  /**
   *
   */
  render() {
    return (
      <React.Fragment>
        BriefForm
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
            <TextField
              required
              fullWidth
              sx={{ m: "auto" }}
              id="productId"
              label="ProductId"
              value={this.state.productId}
              onChange={this.handleTextFieldChange}
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
              id="comments"
              label="Comments"
              value={this.state.comments}
              onChange={this.handleTextFieldChange}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={this.handleSubmit}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BriefForm);
