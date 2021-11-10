import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from '@mui/material/TextareaAutosize';

class BriefForm extends React.Component {
  render() {
    return <React.Fragment>BriefForm
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
    </Box>
    </React.Fragment>;
  }
}
export default BriefForm;
