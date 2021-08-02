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
    withStyles,
} from "@material-ui/core";
import React from "react";

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const StyledTableHead = withStyles((theme) => ({
    head: {
        //   backgroundColor: theme.palette.common.black,
        //   color: theme.palette.common.white,
        fontSize: 16,
        fontWeight: 900,
    },
    body: {
        fontSize: 14,
    },
    "@media (max-width:550px)": {
        head: {
            fontSize: 14,
            fontWeight: 800,
        },
    },
}))(TableCell);

const useStyles = makeStyles({
    container: {
        marginTop: 30,
    },
    card: {
        marginTop: 10,
        maxHeight: 500,
        overflow: "scroll",
    },
    table: {},

    flag: {
        height: 50,
        width: 80,
        marginRight: 10,
        // "@media (max-width:780px)": {
        //     display: "none",
        // },
    },
    styledTableRow: {
        "&:nth-of-type(odd)": {
            backgroundColor: "rgba(224, 224, 224, 1)",
        },
    },
    expectedRate: {
        color: "red",
        fontSize: 13,
    },
    injectionRate: {
        color: "green",
        fontSize: 13,
    },
    injection1Rate: {
        color: "blue",
        fontSize: 13,
    },
    // "@media (max-width:780px)": {

    // },
    "@media (max-width:550px)": {
        flag: {
            display: "none",
            padding: 0,
        },
        column: {
            padding: 0,
            margin: 0,
            maxWidth: 50,
        },
    },
});

function VaccineTable({ rowsData, language }) {
    console.log("language in VaccineTable: ", language);
    const styles = useStyles();
    return (
        <div className={styles.container}>
            <Typography component="h2" variant="h5">
                Thống kê vắc-xin theo địa phương
            </Typography>
            <Card className={styles.card}>
                <CardContent style={{ paddingTop: 0 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <StyledTableHead>
                                    {language.Province}
                                </StyledTableHead>
                                <StyledTableHead
                                    className={styles.column}
                                    align="right"
                                >
                                    {language.Expected}
                                </StyledTableHead>
                                <StyledTableHead align="right">
                                    {language.Real}
                                </StyledTableHead>
                                <StyledTableHead align="right">
                                    {language.Population18}
                                </StyledTableHead>
                                <StyledTableHead align="right">
                                    {language.Injected}
                                </StyledTableHead>
                                <StyledTableHead align="right">
                                    {language.ExpectedRate}
                                </StyledTableHead>
                                <StyledTableHead align="right">
                                    {language.InjectedRate}
                                </StyledTableHead>
                                <StyledTableHead align="right">
                                    {language.Injected1}
                                </StyledTableHead>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowsData.map(
                                ({
                                    id,
                                    province,
                                    expected,
                                    real,
                                    population18,
                                    injection,
                                    expectedRate,
                                    injectionRate,
                                    injection1Rate,
                                }) => (
                                    <StyledTableRow key={id}>
                                        <TableCell
                                            className={styles.column}
                                            component="th"
                                            scope="row"
                                        >
                                            {province}
                                        </TableCell>
                                        <TableCell align="right">
                                            {expected}
                                        </TableCell>
                                        <TableCell align="right">
                                            <b>{real}</b>
                                        </TableCell>
                                        <TableCell align="right">
                                            {population18}
                                        </TableCell>
                                        <TableCell align="right">
                                            <b>{injection}</b>
                                        </TableCell>
                                        <TableCell
                                            className={styles.expectedRate}
                                            align="right"
                                        >
                                            <b>{expectedRate}</b>
                                        </TableCell>
                                        <TableCell
                                            className={styles.injectionRate}
                                            align="right"
                                        >
                                            <b>{injectionRate}</b>
                                        </TableCell>
                                        <TableCell
                                            className={styles.injection1Rate}
                                            align="right"
                                        >
                                            <b>{injection1Rate}</b>
                                        </TableCell>
                                    </StyledTableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

export default VaccineTable;
