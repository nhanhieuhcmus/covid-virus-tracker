import { Container, Typography } from "@material-ui/core";
import moment from "moment";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import '@fontsource/roboto';

function App() {
    const [countries, setCountries] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState("");
    const [report, setReport] = useState([]);

    useEffect(() => {
        getCountries().then((res) => {
            setCountries(res.data);

            // default selection
            setSelectedCountryId("vn");
        });
    }, []);

    const handleOnChange = (event) => {
        setSelectedCountryId(event.target.value);
        console.log("User click: ", event.target.value);
    };

    useEffect(() => {
        if (selectedCountryId) {
            const { Slug } = countries.find(
                (country) => country.ISO2.toLowerCase() === selectedCountryId
            );
            // call API
            getReportByCountry(Slug).then((res) => {
                // delete the last item because it has not updated till end of the day
                res.data.pop();
                setReport(res.data);
            });
        }
    }, [countries, selectedCountryId]);

    return (
        <Container style={{marginTop:20}}>
            <Typography variant="h2" component="h2">
                COVID-19 TRACKER
            </Typography>
            <Typography>{moment().format("LLL")}</Typography>
            <CountrySelector
                value={selectedCountryId}
                countries={countries}
                handleOnChange={handleOnChange}
            />
            <Highlight report={report} />
            <Summary report={report} />
        </Container>
    );
}

export default App;
