import BriefForm from "./features/Brief/BriefForm";
import BriefList, { ItemList } from "./features/Brief/BriefList";
import FilterList from "./features/Brief/FilterBar";
import Londing from "./features/Londing/Londing";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Container maxWidth="md" className="main">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Londing />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <ItemList>
              <BriefForm />
            </ItemList>
            <ItemList>
              <FilterList />
            </ItemList>
          </Grid>
          <Grid item xs={12} md={8}>
            <BriefList />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default App;
