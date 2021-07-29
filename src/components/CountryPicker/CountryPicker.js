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
    },
    input: {
        "& input:valid fieldset": {
            borderRadius: 50,
        },
        width: 300,
        margin: "10px 0",
        backgroundColor: "white",
    },
});

export default function CountryPicker({ value, handleChange, countries }) {
    const styles = useStyles();
    console.log("MultiCountrySearch: ", countries);
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
                // value={value}
                defaultValue={{
                    Country: "Viet Nam",
                    ISO2: "VN",
                    Slug: "vietnam",
                }}
                id="combo-box-demo"
                freeSolo
                disableClearable
                options={countries}
                getOptionLabel={(option) => (option ? option.Country : "")}
                onChange={handleChange}
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
