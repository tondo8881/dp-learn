// author: Tomáš Nereča, 2019

import * as React from 'react';

import { AccessTime, Storage } from '@material-ui/icons';
import { Grid, Typography } from '@material-ui/core';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';

import { strings } from 'src/strings/translations/strings';

type AllProps =
    IComplexityProps &
    WithStyles<typeof styles>;

interface IComplexityProps {
    time: string,
    space: string,
    recOrDp: 'rec' | 'dp' | undefined,
    theta: boolean
}

const styles = () => createStyles({
    complexityParent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    complexity: {
        border: '1px solid black',
        padding: '8px 4px',
        marginRight: '20px',
        display: 'inline-block',
        '& svg': {
            display: 'inline-block',
            verticalAlign: 'middle'
        }
    },
    fixedWidth: {
        minWidth: 180
    }
})

// Component for showing time and space complexity of algorithm
class Complexity extends React.Component<AllProps> {
    public static defaultProps: any = {
        time: "",
        space: "",
        dpOrRec: undefined,
        theta: false
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                {this.props.recOrDp === 'dp' &&
                    <Typography variant='subtitle1'>
                        {strings.global.dp}
                    </Typography>
                }
                {this.props.recOrDp === 'rec' &&
                    <Typography variant='subtitle1'>
                        {strings.global.recursion}
                    </Typography>
                }
                <div className={classes.complexityParent}>
                    <div className={classes.complexity}>
                        {(this.props.time !== "") &&
                            <Grid container={true} direction='row' >
                                <div className={classes.fixedWidth}>
                                    <AccessTime />
                                    {strings.global.timeComplex}:
                                </div>
                                {this.props.theta &&
                                    <b>Θ({this.props.time})</b>
                                }
                                {!this.props.theta &&
                                    <b>O({this.props.time})</b>
                                }
                                <br />
                            </Grid>
                        }
                        {(this.props.space !== "") &&
                            <Grid container={true} direction='row' className={classes.fixedWidth}>
                                <div className={classes.fixedWidth}>
                                    <Storage />
                                    {strings.global.spaceComplex}:</div>
                                <b>O({this.props.space})</b>
                                <br />
                            </Grid>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Complexity);
