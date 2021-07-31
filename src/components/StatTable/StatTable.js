import {
    Card,
    CardContent,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    card: {
        marginTop: 20,
        maxHeight: 500,
        overflow: "scroll",
    },
    country: {
        display: 'flex',
        alignItems: 'center', 
    },
    flag: {
        height: 50,
        width: 80,
        marginRight: 10,
    },
    
});

function StatTable({ rowsData }) {
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <CardContent>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell align="right">Confirmed</TableCell>
                            <TableCell align="right">Recovered</TableCell>
                            <TableCell align="right">Deaths</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsData.map(
                            ({
                                country,
                                flag,
                                cases,
                                recovered,
                                deaths,
                                todayCases,
                                todayRecovered,
                                todayDeaths,
                            }) => (
                                <TableRow className={styles.row} key={country}>
                                    <TableCell className={styles.country} component="th" scope="row">
                                       <img src={flag} className={styles.flag}/>
                                        {country}
                                    </TableCell>
                                    <TableCell align="right">
                                        {cases}
                                        <Typography>+ {todayCases}</Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        {recovered}
                                        <Typography>
                                            + {todayRecovered}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        {deaths}
                                        <Typography>+ {todayDeaths}</Typography>
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default StatTable;
