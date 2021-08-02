import {
    Card,
    CardContent,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
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
    card: {
        marginTop: 30,
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

function VaccineTable({ rowsData }) {
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <CardContent style={{ paddingTop: 0 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableHead>Tỉnh</StyledTableHead>
                            <StyledTableHead className={styles.column} align="right">
                                Phân bổ dự kiến
                            </StyledTableHead>
                            <StyledTableHead align="right">Phân bổ thực tế</StyledTableHead>
                            <StyledTableHead align="right">Dân số {">"}= 18t</StyledTableHead>
                            <StyledTableHead align="right">Số liều đã tiêm</StyledTableHead>
                            <StyledTableHead align="right">Tỉ lệ dự kiến/ dân số ({">"}= 18t)</StyledTableHead>
                            <StyledTableHead align="right">Tỉ lệ thực tế/ dân số ({">"}= 18t)</StyledTableHead>
                            <StyledTableHead align="right">Tỉ lệ tiêm {">"}= 1 mũi ({">"}= 18t)</StyledTableHead>
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
                                    <TableCell align="right"><b>{real}</b></TableCell>
                                    <TableCell align="right">
                                        {population18}
                                    </TableCell>
                                    <TableCell align="right">
                                        <b>{injection}</b>
                                    </TableCell>
                                    <TableCell className={styles.expectedRate} align="right">
                                        <b>{expectedRate}</b>
                                    </TableCell>
                                    <TableCell className={styles.injectionRate} align="right">
                                        <b>{injectionRate}</b>
                                    </TableCell>
                                    <TableCell className={styles.injection1Rate} align="right">
                                        <b>{injection1Rate}</b>
                                    </TableCell>
                                </StyledTableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default VaccineTable;
