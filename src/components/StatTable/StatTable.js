import {
    Card,
    CardContent,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    card: {
        marginTop: 20,
        maxHeight: 500,
        overflow: 'scroll'
    }
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
                        {rowsData.map(({Country, NewConfirmed, NewRecovered, NewDeaths}) => (
                            <TableRow key={Country}>
                                <TableCell component="th" scope="row">
                                    {Country}
                                </TableCell>
                                <TableCell align="right">
                                    {NewConfirmed}
                                </TableCell>
                                <TableCell align="right">
                                    {NewRecovered}
                                </TableCell>
                                <TableCell align="right">{NewDeaths}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default StatTable;
