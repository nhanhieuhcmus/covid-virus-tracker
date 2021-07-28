import { Container, Typography } from "@material-ui/core";
import moment from "moment";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import "@fontsource/roboto";
import MultiCountrySearch from "./components/MultiCountrySearch";

function App() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCountryId, setSelectedCountryId] = useState("");
    const [report, setReport] = useState([]);

    useEffect(() => {
        getCountries().then((res) => {
            setCountries(res.data);

            // default selection
            setSelectedCountryId("vn");
        });
    }, []);

    // const handleOnChange = (event) => {
    //     setSelectedCountryId(event.target.value);
    //     console.log("User click: ", event.target.value);
    // };

    // for new search button
    const handleChange = (event, value) => {
        if (value) {
            setSelectedCountryId(value.ISO2.toLowerCase());
            console.log("event: ", event.target.value);
            console.log("value: ", value.ISO2.toLowerCase());
        }
        // setSelectedCountryId("User click new search button: ", value.ISO2.toLowerCase());
    };

    useEffect(() => {
        if (selectedCountryId) {
            // const { Slug } = countries.find(
            //     (country) => country.ISO2.toLowerCase() === selectedCountryId
            // );

            const selectedCountry = countries.find(
                (country) => country.ISO2.toLowerCase() === selectedCountryId
            );
              
              setSelectedCountry(selectedCountry.Country);

            // call API
            getReportByCountry(selectedCountry.Slug).then((res) => {
                // delete the last item because it has not updated till end of the day
                console.log("getReportByCountry: ", res);
                res.data.pop();
                setReport(res.data);
            });
        }
    }, [countries, selectedCountryId]);

    return (
        <Container style={{ marginTop: 20 }}>
            <Typography variant="h2" component="h2">
                COVID-19 TRACKER
            </Typography>
            <Typography>{moment().format("LLL")}</Typography>
            {/* <CountrySelector
                value={selectedCountryId}
                countries={countries}
                handleOnChange={handleOnChange}
            /> */}
            <MultiCountrySearch
                // value={selectedCountry}
                countries={countries}
                handleChange={handleChange}
            />
            <Highlight report={report} />
            <Summary report={report} />
        </Container>
    );
}

export default App;
