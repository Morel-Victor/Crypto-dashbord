import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NodeCard from "./NodeCard";
import './NodeList.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={0}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#1A2B3C',
        display: "flex",
        height: 600,
        padding: 0,
        margin: 0
    },
    tabs: {
        borderRight: `1px solid white`,
        color: 'white',
        padding: 0,
        margin: 0
    }
}));

export default function NodeList() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Node 1" {...a11yProps(0)} />
                <Tab label="Node 2" {...a11yProps(1)} />
                <Tab label="Node 3" {...a11yProps(2)} />
                <Tab label="Node 4" {...a11yProps(3)} />
                <Tab label="Node 5" {...a11yProps(4)} />
                <Tab label="Node 6" {...a11yProps(5)} />
                <Tab label="Node 7" {...a11yProps(6)} />
                <Tab label="Node 8" {...a11yProps(7)} />
                <Tab label="Node 9" {...a11yProps(8)} />
                <Tab label="Node 10" {...a11yProps(9)} />
                <Tab label="Node 11" {...a11yProps(10)} />
                <Tab label="Node 12" {...a11yProps(11)} />
                <Tab label="Node 13" {...a11yProps(12)} />
                <Tab label="Node 14" {...a11yProps(13)} />
                <Tab label="Node 15" {...a11yProps(14)} />
                <Tab label="Node 16" {...a11yProps(15)} />

            </Tabs>
            <TabPanel value={value} index={0}>
                <NodeCard />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <NodeCard />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <NodeCard />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <NodeCard />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <NodeCard />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <NodeCard />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <NodeCard />
            </TabPanel>
        </div>
    );
}
