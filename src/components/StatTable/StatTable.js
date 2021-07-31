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
      fontWeight: 900
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const useStyles = makeStyles({
    card: {
        marginTop: 20,
        maxHeight: 500,
        overflow: "scroll",
    },
    table: {
    },

    country: {
        display: "flex",
        alignItems: "center",
    },
    column: {

    }, 
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
    confirmedColor: {
        color: '#e53e3e',
        fontSize: 13,
    },
    recoveredColor: {
        color: '#8ACA2B',
        fontSize: 13,
    },
    deathsColor: {
        color: '#718096',
        fontSize: 13,
    },
    "@media (max-width:780px)": {
        // column: {
        //     padding: 0,
        //     margin: 0,
        // }
    },
    "@media (max-width:550px)": {
        flag: {
            display: "none",
        },
        column: {
            padding: 0,
            margin: 0,
            maxWidth: 60,
        }
    },
});

function StatTable({ rowsData }) {
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <CardContent>
                <Table className={styles.table} stickyHeader>
                    <TableHead>
                        <TableRow>
                            <StyledTableHead className={styles.column}>Country</StyledTableHead>
                            <StyledTableHead align="right">Confirmed</StyledTableHead>
                            <StyledTableHead align="right">Recovered</StyledTableHead>
                            <StyledTableHead align="right">Deaths</StyledTableHead>
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
                                <StyledTableRow key={country}>
                                    <TableCell className={styles.column} component="th" scope="row">
                                        <div className={styles.country}>
                                            <img
                                                src={flag}
                                                className={styles.flag}
                                            />
                                            {country}
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">
                                        {cases}
                                        <Typography className={styles.confirmedColor}>+ {todayCases}</Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        {recovered}
                                        <Typography className={styles.recoveredColor}>
                                            + {todayRecovered}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        {deaths}
                                        <Typography className={styles.deathsColor}>+ {todayDeaths}</Typography>
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

export default StatTable;
