import { Card, CardContent } from "@material-ui/core";
import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import React, { useState } from "react";

const generateOptions = () => {
    return {
        chart: {
            type: "pie",
            height: 400,
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
            },
        },
        series: [
            {
                name: "Brands",
                colorByPoint: true,
                data: [
                    {
                        name: "Chrome",
                        y: 61.41,
                        sliced: true,
                        selected: true,
                    },
                    {
                        name: "Internet Explorer",
                        y: 11.84,
                    },
                    {
                        name: "Firefox",
                        y: 10.85,
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
    // const [options, setOptions] = useState({});
    // useEffect(() => {
    //     setOptions(generateOptions(data));
    // }, [data]);

    return (
        <Card>
            <CardContent>
                <HighchartsReact highcharts={Highchart} options={generateOptions} />
            </CardContent>
        </Card>
    );
}

export default PieChart;
