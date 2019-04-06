import * as Prism from 'prismjs';
import * as React from 'react';

import { Button, Theme, createStyles } from '@material-ui/core';
import SpaceChart, { ISpaceChartData } from 'src/components/dpComponents/SpaceChart';
import StatsTable, { IStatsTableData } from 'src/components/dpComponents/StatsTable';
import TimeChart, { ITimeChartData } from 'src/components/dpComponents/TimeChart';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { coinsExamples, dpCoins, dpCoinsSpace, recCoinsSpace, recCoinsTime, recursiveCoins } from 'src/dp/helpers/coins/CoinsStatsHelper';

import CustomTextField from 'src/components/customComponents/CustomTextField';
import FlexRowContainer from 'src/hoc/FlexRowContainer';
import { GetNumbers } from 'src/helpers/Helpers';
import { ISimpleObjectParameter } from 'src/helpers/TypesDefinitions';
import myTheme from './../../../styles/index';
import { strings } from 'src/strings/languages';

type AllProps =
    WithStyles<typeof styles>;

interface ICoinsChartsState {
    givenValue: number
    givenCoins: string
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

class CoinsCharts extends React.Component<AllProps, ICoinsChartsState> {
    private coins: number[];
    private timeStats: ITimeChartData[];
    private spaceStats: ISpaceChartData[];
    private tableStats: IStatsTableData[];


    public constructor(props: AllProps) {
        super(props)
        this.state = {
            givenValue: 10,
            givenCoins: "1,2,5",
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
                <FlexRowContainer>
                    <CustomTextField label={`${strings.coins.value} (1-20)`} value={this.state.givenValue.toString()} onChange={this.handleValue} />
                    <CustomTextField label={`${strings.coins.coins} (max. 5)`} value={this.state.givenCoins} onChange={this.handleCoins} />
                </FlexRowContainer>
                <Button variant="contained" color="primary" className={classes.buttonDark} onClick={this.drawCharts}>
                    {strings.global.drawCharts}
                </Button>
                {this.state.chartsVisible &&
                    <div>
                        <div>
                            <TimeChart data={this.timeStats} />
                            <SpaceChart data={this.spaceStats} />
                            <StatsTable data={this.tableStats} />
                        </div>
                    </div>
                }
            </div>
        );
    }

    private handleValue = (e: any) => {
        if (!Number.isNaN(+e.target.value)) {
            this.setState({ givenValue: +e.target.value });
        }
    }

    private handleCoins = (e: any) => {
        for (const coin of e.target.value.split(",")) {
            if (Number.isNaN(+coin)) {
                return;
            }
        }

        this.setState({ givenCoins: e.target.value });
    }

    private getStats = () => {
        let recCalls: number;
        let dpCalls: number;
        let name: string;
        let data: IStatsTableData;

        let calls: ISimpleObjectParameter = { value: 0 };

        calls = { value: 0 };
        recursiveCoins(this.coins, this.coins.length, this.state.givenValue, calls);

        recCalls = calls.value;

        calls = { value: 0 };
        dpCoins(this.coins, this.coins.length, this.state.givenValue, calls);
        dpCalls = calls.value;

        name = `${strings.coins.coins}: ${this.coins}`;
        data = {
            name,
            dpTime: dpCalls,
            recTime: recCalls,
            recTheorTime: recCoinsTime(this.coins.length),
            dpSpace: dpCoinsSpace(this.coins.length),
            recSpace: recCoinsSpace(this.coins.length)
        }

        this.spaceStats.push({ name, rec: data.recSpace, dp: data.dpSpace });
        this.timeStats.push({ name, recTheoretical: data.recTheorTime, rec: recCalls, dp: dpCalls });
        this.tableStats.push(data);

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < coinsExamples.length; i++) {
            calls = { value: 0 };
            recursiveCoins(coinsExamples[i].coins, coinsExamples[i].coins.length, coinsExamples[i].value, calls);
            recCalls = calls.value;

            calls = { value: 0 };
            dpCoins(coinsExamples[i].coins, coinsExamples[i].coins.length, coinsExamples[i].value, calls);

            dpCalls = calls.value;

            name = `${strings.coins.coins}: ${coinsExamples[i].coins}`;
            data = {
                name,
                dpTime: dpCalls,
                recTime: recCalls,
                recTheorTime: recCoinsTime(coinsExamples[i].coins.length),
                dpSpace: dpCoinsSpace(coinsExamples[i].coins.length),
                recSpace: recCoinsSpace(coinsExamples[i].coins.length)
            }

            this.spaceStats.push({ name, rec: data.recSpace, dp: data.dpSpace });
            this.timeStats.push({ name, recTheoretical: data.recTheorTime, rec: recCalls, dp: dpCalls });
            this.tableStats.push(data);
        }
    }

    private drawCharts = () => {
        this.coins = GetNumbers(this.state.givenCoins);
        this.timeStats = [];
        this.spaceStats = [];
        this.tableStats = [];

        this.getStats();
        this.setState({ chartsVisible: true });
    }
}

export default withStyles(styles)(CoinsCharts);
