import * as Prism from 'prismjs';
import * as React from 'react';

import { Button, Grid, TextField, Theme, createStyles } from '@material-ui/core';
import { CheckNumbers, GetNumbers } from 'src/helpers/Helpers';
import { IChartData, ISimpleObjectParameter } from 'src/types';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { dpRod, dpRodSpace, recRodSpace, recursiveRod, rodExamples } from 'src/dpProblemsStuff/rod/RodStatsHelper';

import DoubleChart from 'src/components/fields/DoubleChart';
import myTheme from '../../../styles/index';
import { strings } from 'src/strings/languages';

type AllProps =
    WithStyles<typeof styles>;

interface IRodChartsState {
    givenPrices: string,
    chartsVisible: boolean
}

const styles = (theme: Theme) => createStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    center: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    },
    leftMargin: {
        marginLeft: 20
    },
    bottomMargin: {
        marginBottom: 15,
    },
    paper: {
        padding: theme.spacing.unit * 2,
    },
    flexChild: {
        flex: 1,
        padding: theme.spacing.unit * 2
    },
    buttonDark: {
        margin: theme.spacing.unit,
        color: 'white',
        backgroundColor: myTheme.palette.primary.main,
        "&:hover": {
            backgroundColor: myTheme.palette.secondary.main
        }
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        minWidth: 200,
    },
});

class RodCharts extends React.Component<AllProps, IRodChartsState> {
    private prices: number[];
    private spaceStats: IChartData[];
    private callsStats: IChartData[];

    public constructor(props: AllProps) {
        super(props)
        this.state = {
            givenPrices: '1,5,6,6,9',
            chartsVisible: false
        }
    }

    public componentDidMount() {
        Prism.highlightAll();
    }

    public render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid className={[classes.container, classes.bottomMargin].join(' ')}>
                    <form className={classes.container} autoComplete="off">
                        <TextField
                            id="givenPricesTF"
                            label={strings.coins.coins}
                            className={classes.textField}
                            value={this.state.givenPrices}
                            onChange={this.handlePrices}
                            margin="normal"
                        />
                    </form>
                </Grid>
                <Button variant="contained" color="primary" className={classes.buttonDark} onClick={this.drawCharts}>
                    {strings.global.drawCharts}
                </Button>
                {this.state.chartsVisible &&
                    <div>
                        <DoubleChart data={this.callsStats} unit={strings.components.calls} brief={strings.components.timeComplex} />
                        <DoubleChart data={this.spaceStats} brief={strings.components.spaceComplex} />
                    </div>
                }
            </div>
        );
    }

    private handlePrices = (e: any) => {
        if (CheckNumbers(e.target.value)) {
            this.setState({ givenPrices: e.target.value, chartsVisible: false });
        }
    }

    private getStats = (spaceChart: IChartData[], callsChart: IChartData[]) => {
        let recCalls: number;
        let dpCalls: number;

        let calls: ISimpleObjectParameter = { value: 0 };

        calls = { value: 0 };
        recursiveRod(this.prices, this.prices.length, calls);

        recCalls = calls.value;

        calls = { value: 0 };
        dpRod(this.prices, this.prices.length, calls);

        dpCalls = calls.value;

        spaceChart.push({ colName: `${strings.rod.prices}: ${this.prices}`, rec: recRodSpace(this.prices.length), dp: dpRodSpace(this.prices.length) });
        callsChart.push({ colName: `${strings.rod.prices}: ${this.prices}`, rec: recCalls, dp: dpCalls });

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < rodExamples.length; i++) {
            calls = { value: 0 };
            recursiveRod(rodExamples[i].prices, rodExamples[i].prices.length, calls);

            recCalls = calls.value;

            calls = { value: 0 };
            dpRod(rodExamples[i].prices, rodExamples[i].prices.length, calls);

            dpCalls = calls.value;

            spaceChart.push({ colName: `${strings.rod.prices}: ${rodExamples[i].prices}`, rec: recRodSpace(rodExamples[i].prices.length), dp: dpRodSpace(rodExamples[i].prices.length) });
            callsChart.push({ colName: `${strings.rod.prices}: ${rodExamples[i].prices}`, rec: recCalls, dp: dpCalls });
        }
    }

    private drawCharts = () => {
        this.prices = GetNumbers(this.state.givenPrices);
        this.spaceStats = [];
        this.callsStats = [];

        this.getStats(this.spaceStats, this.callsStats);
        this.setState({ chartsVisible: true });
    }
}

export default withStyles(styles)(RodCharts);
