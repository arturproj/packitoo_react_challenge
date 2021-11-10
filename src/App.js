
import BriefForm from "./features/Brief/BriefForm";
import BriefList, { ItemList } from "./features/Brief/BriefList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

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

function App(props) {
  console.log(props);
  return (
    <Container maxWidth="md" className="main">
      <Box sx={{ my: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <ItemList>
                <BriefForm />
              </ItemList>
            </Grid>
            <Grid item xs={12} md={8}>
              <BriefList />
            </Grid>
          </Grid>
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}
export default App;
