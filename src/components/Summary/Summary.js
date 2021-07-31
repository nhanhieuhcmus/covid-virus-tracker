import { Grid } from "@material-ui/core";
import React from "react";
import LineChart from "../Charts/LineChart/LineChart";
import PieChart from "../Charts/PieChart/PieChart";

function Summary({ historicalCountry, report }) {
    console.log("report in Summary: ",report);
    return (
        <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                <LineChart data={historicalCountry} />
            </Grid>
            <Grid item sm={4} xs={12}>
                <PieChart data={report}/>
            </Grid>
        </Grid>
    );
}

export default Summary;
