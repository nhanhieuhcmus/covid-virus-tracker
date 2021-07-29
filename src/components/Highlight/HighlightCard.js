import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import React from "react";

const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === "confirmed")
            return {
                borderLeft: "10px solid rgba(255,0,0,0.5)",
                borderRadius: 15,
            };
        if (props.type === "recovered")
            return {
                borderLeft: "10px solid rgba(0,255,0,0.5)",
                borderRadius: 15,
            };
        else
            return {
                borderLeft: "10px solid rgba(128,128,128,0.5)",
                borderRadius: 15,
            };
    },
    title: { fontSize: 18 },
    total: { fontWeight: "bold", fontSize: 28, margin: "5px 0px" },
    count: { fontSize: 16 },
});

function HighlightCard({ title, count, total, type }) {
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
                    + <CountUp end={count || 0} duration={1.5} separator="," />
                </Typography>
            </CardContent>
        </Card>
    );
}

export default HighlightCard;
