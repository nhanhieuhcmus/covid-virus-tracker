import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

function Highlight({ report }) {
    // console.log("Highlight - report: ", report);
    const data = report && report.length ? report[report.length - 1] : [];
    console.log("Highlight - last data report:", data);
    const summary = [
        {
            title: "Confirmed",
            count: data.Confirmed,
            type: "confirmed",
        },
        {
            title: "Recovered",
            count: data.Recovered,
            type: "recovered",
        },
        {
            title: "Deaths",
            count: data.Deaths,
            type: "deaths",
        },
    ];
    console.log("Highlight - summary data:", summary[0]);

    return (
        <Grid container spacing={3}>
            {summary.map((item) => (
                <Grid item sm={4} xs={12} key={item.type}>
                    <HighlightCard
                        title={item.title}
                        count={item.count}
                        type={item.type}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default Highlight;
