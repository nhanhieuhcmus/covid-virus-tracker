import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

function Highlight({ report }) {
    console.log("Highlight render");
    const summary = [
        {
            title: "Confirmed",
            total: report.cases,
            today: report.todayCases,
            type: "confirmed",
        },
        {
            title: "Recovered",
            total: report.recovered,
            today: report.todayRecovered,
            type: "recovered",
        },
        {
            title: "Deaths",
            total: report.deaths,
            today: report.todayDeaths,
            type: "deaths",
        },
    ];

    return (
        <Grid container spacing={3}>
            {summary.map((item) => (
                <Grid item sm={4} xs={12} key={item.type}>
                    <HighlightCard
                        title={item.title}
                        total = {item.total}
                        today={item.today}
                        type={item.type}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default Highlight;
