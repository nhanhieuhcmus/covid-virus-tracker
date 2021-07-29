import { Container, Typography } from "@material-ui/core";
import moment from "moment";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Highlight from "./components/Highlight/Highlight";
import Summary from "./components/Summary/Summary";
import "@fontsource/roboto";
import styles from "./App.module.css";
import logo from "./images/logo.png";

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
                console.log("getReportByCountry: ", res); // delete the last item because it has not updated till end of the day
                res.data.pop();
                setReport(res.data);
            });
        }
    }, [countries, selectedCountryId]);

    return (
        <Container style={{ marginTop: 20 }}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <img
                        className={styles.logo}
                        src={logo}
                        alt="logo"
                    />
                </div>
                <Typography>{moment().format("LLL")}</Typography>

                <CountryPicker
                    // value={selectedCountry}
                    countries={countries}
                    handleChange={handleChange}
                />
            </div>

            <Highlight report={report} />
            <Summary report={report} />
        </Container>
    );
}

export default App;
