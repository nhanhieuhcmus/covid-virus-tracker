import { Card, CardContent } from "@material-ui/core";
import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import React, { useEffect, useState } from "react";

const generateOptions = (data) => {
    return {
        chart: {
            type: "pie",
            height: 424,
            style: {
                fontFamily: "Roboto",
            },
        },
        title: {
            text: undefined,
        },
        accessibility: {
            point: {
                valueSuffix: "%",
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
                series: {
                    animation: {
                        duration: 1500,
                    },
                    fillOpacity: 0.2,
                },
            },
        },
        series: [
            {
                name: "Rate",
                colorByPoint: true,
                data: [
                    {
                        name: "Confirmed",
                        y: data.cases,
                        // sliced: false,
                        selected: false,
                        color: "rgba(255,0,0,0.6)",
                    },
                    {
                        name: "Recovered",
                        y: data.recovered,
                        color: "rgba(0,255,0,0.6)",
                    },
                    {
                        name: "Deaths",
                        y: data.deaths,
                        color: "rgba(128,128,128,0.6)",
                    },
                ],
            },
        ],

        credits: {
            enabled: false,
        },
    };
};

function PieChart({ data }) {
    console.log("data in PieChart: ", data);
    const [options, setOptions] = useState({});
    useEffect(() => {
        setOptions(generateOptions(data));
    }, [data]);

    return (
        <Card>
            <CardContent>
                <HighchartsReact
                    highcharts={Highchart}
                    options={options}
                />
            </CardContent>
        </Card>
    );
}

export default PieChart;
