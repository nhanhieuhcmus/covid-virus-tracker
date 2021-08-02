import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

function Highlight({ report, language }) {
    console.log("Highlight render");
    const summary = [
        {
            title: language.Confirmed,
            total: report.cases,
            today: report.todayCases,
            type: "confirmed",
        },
        {
            title: language.Recovered,
            total: report.recovered,
            today: report.todayRecovered,
            type: "recovered",
        },
        {
            title: language.Deaths,
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
                        language = {language}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default Highlight;
