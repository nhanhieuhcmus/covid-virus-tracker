import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
// import styles from "./MultiCountrySearch.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        width: 300,
        position: "relative",
        borderRadius: 50,
    },
    search: {
        position: "absolute",
        right: 10,
        opacity: 0.7
    },
    input: {
        // `&[fieldset]`: {
        //     borderRadius: 50,
        // },
        width: 300,
        margin: "10px 0",
        backgroundColor: "white",
    },
});

export default function CountryPicker({ selectedCountryId, handleCountryChange, countries }) {
    console.log("CountryPicker render");
    const styles = useStyles();
    // const defaultValue = countries.map(country=>country.ISO2.toLowerCase()===selectedCountryId);
    const hardcodeDefaultValue = {
        name: "Vietnam",
        value: "VN",
    };
    // console.log("CountryPicker received from props: ", countries);
    // if (defaultValue){
    //     console.log("defaultValue: ", defaultValue, Object.keys(defaultValue).length);
    // }
    // console.log("defaultValue hardcode: ", hardcodeDefaultValue,Object.keys(hardcodeDefaultValue).length);
    // const countries
    // const handleChange = (event,value) => {
    //     console.log("event: ", event.target.value);
    //     console.log("value: ", value);
    // }

    return (
        <div className={styles.container}>
            <SearchIcon className={styles.search} />
            <Autocomplete
                className={styles.input}
                defaultValue = {hardcodeDefaultValue}
                id="combo-box-demo"
                includeInputInList
                blurOnSelect
                clearOnBlur
                freeSolo
                disableClearable
                clearOnEscape
                selectOnFocus
                fullWidth
                options={countries}
                getOptionLabel={(option) => (option ? option.name : "")}
                onChange={handleCountryChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        value={params}
                        label="Select country ..."
                        variant="outlined"
                        size="small"
                    />
                )}
            />
        </div>
    );
}

// insert from HoleTex
CountryPicker.defaultProps = {
    countries: [],
}