import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import React from "react";

const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === "confirmed")
            return { borderLeft: "5px solid rgba(255,0,0,0.5)" };
        if (props.type === "recovered")
            return { borderLeft: "5px solid rgba(0,255,0,0.5)" };
        else return { borderLeft: "5px solid rgba(128,128,128,0.5)" };
    },
    title: { fontSize: 18, marginBottom: 5 },
    count: { fontWeight: "bold", fontSize: 18 },
});

function HighlightCard({ title, count, type }) {
    const styles = useStyles({ type });
    if (!count) return "Loading ...";
    // console.log("HighlightCard: ", {title,count,type});
    return (
        <Card className={styles.wrapper}>
            <CardContent>
                <Typography
                    variant="body2"
                    component="p"
                    className={styles.title}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    component="span"
                    className={styles.count}
                >
                    <CountUp end={count || 0} duration={1.5} separator="," />
                </Typography>
            </CardContent>
        </Card>
    );
}

export default HighlightCard;
