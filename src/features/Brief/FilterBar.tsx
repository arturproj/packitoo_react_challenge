import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
  selectProducts,
} from "./actionsCreator";
import { loadingDispatchToProps } from "../Londing/actionsCreator";

function concatProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function TabPanel(props: any) {
  console.log("TabPanel", props);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedTab, setTab] = React.useState(0);

  /**
   *
   * @returns array jsx components
   */
  const handleChange = (e: any, value: number) => {
    props.runLoading();
    if (value > 0) {
      props.loadFilter({
        active: true,
        product:
          selectProducts(props).find((ele: Product) => ele.id === value) ||
          null,
      });
    } else {
      props.loadFilter();
    }
    setTab(value);
    props.stopLoading();
  };
  /**
   *
   * @returns array jsx components
   */

  return (
    <>
      <Typography variant="h6" component="p">
        FILTER BAR {isMobile.toString()}
      </Typography>

      <Tabs
        scrollButtons="auto"
        allowScrollButtonsMobile={isMobile}
        orientation={isMobile ? "horizontal" : "vertical"}
        variant="scrollable"
        value={selectedTab}
        onChange={handleChange}
        aria-label="vertical filters tab"
      >
        <Tab key={0} label={"ALL BRIEFS"} {...concatProps(0)} />
        {props.products.length ? (
          props.products.map((tab: Product, idx: number) => (
            <Tab
              key={tab.id}
              label={tab.name.toUpperCase()}
              {...concatProps(tab.id)}
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
};

TabPanel.defaultProps = {
  products: [],
};
export const connectedTabPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabPanel);

export default connect(null, loadingDispatchToProps)(connectedTabPanel);
