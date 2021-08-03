import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    myBtn: {
        display: 'none',
        position: 'fixed',
        bottom: 50,
        right: 30,
        zIndex: 9,
        fontSize: 14,
        border: "none",
        outline: "none",
        backgroundColor: "#000",
        color: "white",
        cursor: "pointer",
        padding: 15,
        borderRadius: 4,
        "&:hover": {
            backgroundColor: "#434343",
        },
    },
    
});

function ScrollTop({language}) {
    const styles = useStyles();
    const mybutton = document.getElementById("myBtn");
    window.onscroll =  () => {
        scrollFunction();
    };

    const scrollFunction = () => {
        if (
            document.body.scrollTop > 500 ||
            document.documentElement.scrollTop > 500
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    const topFunction = () => {
        console.log("User clicked scroll button");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    return (
        <div>
            <button id="myBtn" className={styles.myBtn} onClick={topFunction}>
                {language.innerText}
                &nbsp; &#x2191;
            </button>
        </div>
    );
}

export default ScrollTop;
