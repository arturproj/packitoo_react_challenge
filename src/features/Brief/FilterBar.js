import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "./actionsCreator";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function TabPanel(props) {
  const [selectedTab, setTab] = React.useState(
    props.filter.product !== null ? props.filter.product.id : 0
  );
  const handleChange = (e, value) => {
    if (value > 0) {
      props.loadFilter({
        active: true,
        product: props.products.find((ele) => ele.id === value) || null,
      });
    } else {
      props.loadFilter();
    }
    setTab(value);
  };

  return (
    <>
      <Typography variant="h6" component="p">
        FILTER BAR
      </Typography>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleChange}
        aria-label="vertical filters tab"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab key={0} label={"ALL BRIEFS"} {...a11yProps(0)} />
        {props.products.length ? (
          props.products.map((tab, idx) => (
            <Tab
              key={tab.id}
              label={tab.name.toUpperCase()}
              {...a11yProps(tab.id)}
            />
          ))
        ) : (
          <Tab label={"no list found"} />
        )}
      </Tabs>
    </>
  );
}

TabPanel.propTypes = {
  products: PropTypes.array.isRequired,
  // handleChange: PropTypes.func.isRequired,
};

TabPanel.defaultProps = {
  products: [],
  // handleChange: (e, value) => {
  //   console.log(value);
  // },
};
export default connect(mapStateToProps, mapDispatchToProps)(TabPanel);
