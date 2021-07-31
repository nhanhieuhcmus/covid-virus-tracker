import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import React from "react";

const useStyles = makeStyles({
    wrapper: (props) => {
        const Styles = {
            textAlign: "center",
            borderLeft: "10px solid",
            // boxShadow: "0 8px 16px 0 #BDC9D7",
            boxShadow: "0 8px 32px -12px rgba(0,0,0,0.3)",
            "&:hover": {
                boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
              },   
            // overflow: "hidden",
        };
        if (props.type === "confirmed")
            return { ...Styles, borderColor: "rgba(255,0,0,0.5)" };
        if (props.type === "recovered")
            return { ...Styles, borderColor: "rgba(0,255,0,0.5)" };
        else
            return {
                ...Styles,
                borderColor: "rgba(128,128,128,0.5)",
            };
    },
    title: { fontSize: 18 },
    total: { fontWeight: "bold", fontSize: 28, margin: "5px 0px" },
    count: { fontSize: 16 },
});

function HighlightCard({ title, total, today, type }) {
    const styles = useStyles({ type });
    // console.log("HighlightCard: ", {title,count,type});
    return (
        <Card className={styles.wrapper}>
            <CardContent>
                <Typography
                    variant="body2"
                    component="p"
                    className={styles.title}
                    color="textSecondary"
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    component="span"
                    className={styles.total}
                >
                    <CountUp end={total || 0} duration={1.5} separator="," />
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    className={styles.count}
                >
                    + <CountUp end={today || 0} duration={1.5} separator="," />
                </Typography>
            </CardContent>
        </Card>
    );
}

export default HighlightCard;
