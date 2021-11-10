import { styled } from "@mui/material/styles";

import BriefForm from "./features/BriefForm";
import BriefList from "./features/BriefList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App(props) {
  console.log(props);
  return (
    <Container maxWidth="md" className="main">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5 example
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <BriefForm />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <BriefList />
              <Item>array...</Item>
            </Grid>
          </Grid>
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}
export default App;
