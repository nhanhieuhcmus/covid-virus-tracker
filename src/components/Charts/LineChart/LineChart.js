import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import React, { useEffect, useState } from "react";
import moment from "moment";
import {
    Card,
    CardContent,
    FormControl,
    makeStyles,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";

const generateOptions = (data) => {
    const formatedDate = data.length&&data.map((item) =>
        moment(item.Date).format("DD/MM/YYYY")
    );
    return {
        chart: {
            type: "area",
            height: 400,
            style: {
                fontFamily: "Roboto",
            },
        },
        title: {
            text: undefined,
        },
        xAxis: {
            categories: formatedDate,
            crosshair: true,
        },
        // colors: ["#F3585B"],
        yAxis: {
            min: 0,
            title: {
                text: null,
            },
            labels: {
                align: "right",
            },
        },
        tooltip: {
            headerFormat:
                '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color};padding:0;font-size:"Roboto"">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: "</table>",
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
            series: {
                animation: {
                    duration: 1500,
                },
                lineWidth: 2,
                fillOpacity: 0.2,
            },
        },
        series: [
            {
                name: "Number of confirmed",
                data: data.map((item) => item.Confirmed),
                color: "rgba(255,0,0,0.6)",
            },
            {
                name: "Number of recovered",
                data: data.map((item) => item.Recovered),
                color: "rgba(0,255,0,0.8)",
            },
            {
                name: "Number of deaths",
                data: data.map((item) => item.Deaths),
                color: "rgba(128,128,128,0.6)",
            },
        ],
        credits: {
            enabled: false,
        },
    };
};

function LineChart({ data }) {
    const [options, setOptions] = useState({});
    const [filterType, setFilterType] = useState("30");
    useEffect(()=>{
        setFilterType("30");
    },[data])
    useEffect(() => {
        let customData;
        switch (filterType) {
            case "30":
                customData = data.slice(-30);
                break;
            case "7":
                customData = data.slice(-7);
                break;
            default:
                customData = data;
                break;
        }
        setOptions(generateOptions(customData));
    }, [data, filterType]);

    const handleOnChange = (event) => {
        console.log("filterType: ", event.target.value);
        setFilterType(event.target.value);
    };

    return (
        <Card>
            <CardContent>
                <FormControl align="right">
                    <Select
                        labelId="filter-type"
                        id="filter-type-select"
                        value={filterType}
                        onChange={handleOnChange}
                    >
                        <MenuItem value={"all"}>All the time</MenuItem>
                        <MenuItem value={"30"}>Last 30 days</MenuItem>
                        <MenuItem value={"7"}>Last 7 days</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
            <HighchartsReact highcharts={Highchart} options={options} />
        </Card>
    );
}

export default LineChart;