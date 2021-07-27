import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import React from "react";

const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === "confirmed")
            return { borderLeft: "5px solid #c9302c" };
        if (props.type === "recovered")
            return { borderLeft: "5px solid #28a745" };
        else return { borderLeft: "5px solid gray" };
    },
    title: { fontSize: 18, marginBottom: 5 },
    count: { fontWeight: "bold", fontSize: 18 },
});

function HighlightCard({ title, count, type }) {
    const styles = useStyles({ type });
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
