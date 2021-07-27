import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import React, { useEffect, useState } from "react";
import moment from "moment";
import {
    Button,
    ButtonGroup,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@material-ui/core";

const generateOptions = (data) => {
    const formatedDate = data.map((item) =>
        moment(item.Date).format("DD/MM/YYYY")
    );
    return {
        chart: {
            height: 500,
        },
        title: {
            text: "Number of confirmed",
        },
        xAxis: {
            categories: formatedDate,
            crosshair: true,
        },
        colors: ["#F3585B"],
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
                '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
            footerFormat: "</table>",
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            {
                name: "Number of confirmed",
                data: data.map((item) => item.Confirmed),
            },
        ],
    };
};

function LineChart({ data }) {
    const [options, setOptions] = useState({});
    const [filterType, setFilterType] = useState("");
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
    }, [data,filterType]);

    const handleOnChange = (event) => {
        console.log("filterType: ", event.target.value);
        setFilterType(event.target.value);
    };

    return (
        <div>
            {/* <ButtonGroup size="small" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button >All data</Button>
                <Button>Last 30 days</Button>
                <Button>Last 7 days</Button>
            </ButtonGroup> */}

            <FormControl shrink size="small">
                <InputLabel id="filter-type">All</InputLabel>
                <Select
                    labelId="filter-type"
                    id="filter-type-select"
                    // value={age}
                    onChange={handleOnChange}
                >
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={"30"}>Last 30 days</MenuItem>
                    <MenuItem value={"7"}>Last 7 days</MenuItem>
                </Select>
            </FormControl>

            <HighchartsReact highcharts={Highchart} options={options} />
        </div>
    );
}

export default LineChart;
