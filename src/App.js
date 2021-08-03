import { Container, Typography } from "@material-ui/core";
import moment from "moment";
import { useEffect, useState } from "react";
import {
    getCountries,
    getHistoricalCountry,
    getReportByCountry,
    getVaccineData,
} from "./apis";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Highlight from "./components/Highlight/Highlight";
import Summary from "./components/Summary/Summary";
import "@fontsource/roboto";
import styles from "./App.module.css";
// import logo from "./images/logo.png";
import StatTable from "./components/StatTable/StatTable";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import VaccineTable from "./components/VaccineTable/VaccineTable";
import languages from './languages/languages.js';
function App() {
    const [countries, setCountries] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState("");
    const [report, setReport] = useState({});
    const [historicalCountry, setHistoricalCountry] = useState([]);
    const [lastestCountries, setLastestCountries] = useState([]);
    const [vaccineData, setVaccineData] = useState([]);
    const [language, setLanguage] = useState("VN");

    useEffect(() => {
        console.log("useEffect all countries call");
        getCountries().then((res) => {
            console.log("all countries data: ", res);
            // const alphabetCountries = sortBy(res.data, "Country"); // sort to alphabet order
            const destructureCountries = res.data.map((country) => ({
                name: country.country,
                value: country.countryInfo.iso2,
            }));
            // console.log("destructureCountries: ", destructureCountries);
            setCountries(destructureCountries);
            // // default selection
            setSelectedCountryId("VN"); // default selection
            setLanguage("VN"); // default language
            const destructureLastestCountries = res.data.map(
                ({
                    country,
                    countryInfo: { flag },
                    cases,
                    recovered,
                    deaths,
                    todayCases,
                    todayRecovered,
                    todayDeaths,
                }) => ({
                    country,
                    flag,
                    cases,
                    recovered,
                    deaths,
                    todayCases,
                    todayRecovered,
                    todayDeaths,
                })
            );
            console.log(
                "destructureLastestCountries: ",
                destructureLastestCountries
            );
            setLastestCountries(destructureLastestCountries);
        });
        console.log("useEffect all countries done");
    }, []);

    // for new search button
    const handleCountryChange = (event, value) => {
        // if (value)
        setSelectedCountryId(value.value);
        console.log("event: ", event.target.value);
        console.log("value: ", value.value);
    };

    useEffect(() => {
        console.log("useEffect one country call");
        if (selectedCountryId) {
            // call lastest report of specific country
            getReportByCountry(selectedCountryId).then((res) => {
                console.log("getReportByCountry: ", res);
                setReport(res.data);
            });

            // call historial of specific country
            getHistoricalCountry(selectedCountryId).then((res) => {
                console.log("getHistoricalCountry: ", res.data);
                setHistoricalCountry(res.data);
            });
        }
        if (selectedCountryId === "VN") {
            // only call Vaccine data for VN
            getVaccineData().then((res) => {
                console.log("getVaccineData: ", res);
                setVaccineData(res.data);
            });
            setLanguage("VN");
        } else {
            // set the others (!=VN) language is English
            setLanguage("EN");
        }
        console.log("useEffect one country done");
    }, [selectedCountryId, countries]);

    return (
        <Container className={styles.container}>
            <div className={styles.header}>
                <img
                    className={styles.logo}
                    src="https://drive.google.com/uc?view&id=1bwfj4jVjGBBuARbu7j8Xo8nx0kVrgkML"
                    alt="logo"
                />
                <Typography>{moment().format("LLL")}</Typography>
                {countries.length && selectedCountryId && (
                    <CountryPicker
                        selectedCountryId={selectedCountryId}
                        countries={countries}
                        handleCountryChange={handleCountryChange}
                        language={languages[language].CountryPicker}
                    />
                )}
            </div>
            {Object.keys(report).length && (
                <Highlight
                    report={report}
                    language={languages[language].Highlight}
                />
            )}
            {Object.keys(report).length && historicalCountry.length && (
                <Summary
                    historicalCountry={historicalCountry}
                    report={report}
                    language={languages[language].Summary}
                />
            )}
            {lastestCountries.length && (
                <StatTable
                    rowsData={lastestCountries}
                    language={languages[language].StatTable}
                />
            )}

            {selectedCountryId === "VN" && vaccineData.length && (
                <VaccineTable
                    rowsData={vaccineData}
                    language={languages["VN"].VaccineTable}
                />
            )}
            <ScrollTop language = {languages[language].ScrollTop}/>
            <Footer />
        </Container>
    );
}

export default App;
