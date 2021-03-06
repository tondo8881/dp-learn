// author: Tomáš Nereča, 2019

import * as React from 'react';

import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { blueColor, darkColor } from 'src/styles/globalStyles';

type AllProps =
    IDemoTableProps &
    WithStyles<typeof styles>;

interface IDemoTableProps {
    visible: boolean,
    result: string,
    currentState: string,
    cols: number,
    head: () => any,
    body: () => any
}

const styles = (theme: Theme) => createStyles({
    result: {
        marginBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        "& span": {
            fontSize: theme.typography.pxToRem(24),
            color: 'white',
            backgroundColor: blueColor,
            padding: theme.spacing.unit,
        }
    },
    table: {
        width: 'auto',
        "& td:last-child, th:last-child": {
            paddingRight: 4
        },
    },
    currentState: {
        color: 'white',
        backgroundColor: darkColor,
        padding: '4px 24px 4px 14px',
        borderRight: 'solid 1px gray',
    },
    hiddenOverflow: {
        overflowX: 'auto'
    }
})

// Most important component of app - animated table for DP algorithm
class DemoTable extends React.Component<AllProps> {
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.hiddenOverflow}>
                {this.props.result !== '' &&
                    <div className={classes.result}>
                        <span>
                            {this.props.result}
                        </span>
                    </div>
                }
                {(this.props.visible) &&
                    <Table className={classes.table}>
                        <TableBody>
                            {this.props.currentState !== "" &&
                                <TableRow >
                                    <TableCell className={classes.currentState} colSpan={this.props.cols}>
                                        {this.props.currentState}
                                    </TableCell>
                                </TableRow>
                            }
                            <TableRow>{this.props.head()}</TableRow>
                            {this.props.body()}
                        </TableBody>
                    </Table>
                }
            </div>
        );
    }
}

export default withStyles(styles)(DemoTable);
