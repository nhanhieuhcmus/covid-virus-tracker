import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "@fontsource/roboto";

const useStyles = makeStyles({
    footer: {
        marginTop: 100,
        marginBottom: 0,
        height: 50,
        // backgroundColor: '#000',
        textAlign: "center",
        '& a':{
            textDecoration: 'none',
        }
    },
    heart: {
        marginLeft: 5,
        fontSize: 20,
        color: "red",
        fontWeight: 900,
    },
});
function Footer() {
    const styles = useStyles();
    return (
        <div className={styles.footer}>
            <Typography>
                Designed by
                <b> <a href="https://www.facebook.com/nhan.hieu.hcmus"> Nhan </a> </b>
                with
                <span className={styles.heart}>
                    {/* &hearts; */}
                    ❤
                </span>
                
            </Typography>
        </div>
    );
}

export default Footer;
