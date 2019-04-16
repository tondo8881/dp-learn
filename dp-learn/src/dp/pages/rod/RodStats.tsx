import * as Markdown from 'react-markdown';
import * as React from 'react';

import { dpRod, dpRodSpace, dpRodTime, recRodSpace, recRodTime, recursiveRod, rodExamples } from 'src/dp/helpers/rod/RodStatsHelper';
import { rodDpSpaceComplex, rodDpTimeComplex, rodRecSpaceComplex, rodRecTimeComplex } from 'src/dp/helpers/rod/RodStrings';

import BottomMarginDiv from 'src/hoc/BottomMarginDiv';
import ChartsAndTable from 'src/components/dpComponents/ChartsAndTable';
import Complexity from 'src/components/dpComponents/Complexity';
import CustomButton from 'src/components/customComponents/CustomButton';
import CustomTextField from 'src/components/customComponents/CustomTextField';
import CustomTitle from 'src/hoc/CustomTitle';
import FlexOne from 'src/hoc/FlexOne';
import FlexTwo from 'src/hoc/FlexTwo';
import { GetNumbers } from 'src/helpers/Helpers';
import { Grid } from '@material-ui/core';
import { ISimpleObjectParameter } from 'src/helpers/TypesDefinitions';
import { ISpaceChartData } from 'src/components/dpComponents/SpaceChart';
import { IStatsTableData } from 'src/components/dpComponents/StatsTable';
import { ITimeChartData } from 'src/components/dpComponents/TimeChart';
import { strings } from 'src/strings/languages';

interface IRodStatsState {
    givenPrices: string,
    statsVisible: boolean
}

class RodStats extends React.Component<any, IRodStatsState> {
    private prices: number[];
    private spaceStats: ISpaceChartData[];
    private timeStats: ITimeChartData[];
    private tableStats: IStatsTableData[];

    public constructor(props: any) {
        super(props)
        this.state = {
            givenPrices: '1,5,6,6,9',
            statsVisible: false
        }
    }

    public render() {
        return (
            <div>
                <CustomTitle variant='h5'>
                    {strings.rod.stats.title}
                </CustomTitle>
                <BottomMarginDiv>
                    {strings.rod.stats.brief}
                </BottomMarginDiv>
                <Grid container={true} direction='row'>
                    <FlexOne>
                        <BottomMarginDiv>
                            <CustomTextField label={`${strings.rod.prices} (max. 20)`} value={this.state.givenPrices} onChange={this.handlePrices} />
                        </BottomMarginDiv>
                        <CustomButton onClick={this.drawStats} label={strings.global.evaluateStats} />
                    </FlexOne>

                    <FlexTwo>
                        <Grid container={true} direction='row'>
                            <Complexity time={rodRecTimeComplex} space={rodRecSpaceComplex} recOrDp='rec' />
                            <Complexity time={rodDpTimeComplex} space={rodDpSpaceComplex} recOrDp='dp' />
                        </Grid>
                    </FlexTwo>
                </Grid>
                <br />
                <ChartsAndTable visible={this.state.statsVisible} timeStats={this.timeStats} spaceStats={this.spaceStats} tableStats={this.tableStats} />
                {this.state.statsVisible &&
                    <div>
                        <CustomTitle variant='h5'>
                            {strings.global.conclusion}
                        </CustomTitle>
                        <Markdown source={strings.rod.stats.conclusion} />
                    </div>
                }
            </div>
        );
    }

    private handlePrices = (e: any) => {
        const prices = GetNumbers(e.target.value);
        if (prices.length <= 20) {
            this.setState({ givenPrices: e.target.value });
        }
    }

    private getStats = () => {
        let recCalls: number;
        let dpCalls: number;
        let name: string;
        let data: IStatsTableData;

        let calls: ISimpleObjectParameter = { value: 0 };

        calls = { value: 0 };
        recursiveRod(this.prices, this.prices.length, calls);

        recCalls = calls.value;

        calls = { value: 0 };
        dpRod(this.prices, this.prices.length, calls);

        dpCalls = calls.value;

        name = `${strings.rod.prices}: ${this.prices}`;
        data = {
            name,
            dpTime: dpCalls,
            dpTheorTime: dpRodTime(this.prices.length),
            recTime: recCalls,
            recTheorTime: recRodTime(this.prices.length),
            dpSpace: dpRodSpace(this.prices.length),
            recSpace: recRodSpace(this.prices.length)
        }

        this.spaceStats.push({ name, rec: data.recSpace, dp: data.dpSpace });
        this.timeStats.push({ name, recTheor: data.recTheorTime, rec: recCalls, dpTheor: data.dpTheorTime, dp: dpCalls });
        this.tableStats.push(data);

        for (const example of rodExamples) {
            calls = { value: 0 };
            recursiveRod(example.prices, example.prices.length, calls);

            recCalls = calls.value;

            calls = { value: 0 };
            dpRod(example.prices, example.prices.length, calls);

            dpCalls = calls.value;

            name = `${strings.rod.prices}: ${example.prices}`;
            data = {
                name,
                recTheorTime: recRodTime(example.prices.length),
                recTime: recCalls,
                dpTime: dpCalls,
                dpTheorTime: dpRodTime(example.prices.length),
                dpSpace: dpRodSpace(example.prices.length),
                recSpace: recRodSpace(example.prices.length)
            }

            this.spaceStats.push({ name, rec: data.recSpace, dp: data.dpSpace });
            this.timeStats.push({ name, recTheor: data.recTheorTime, rec: recCalls, dpTheor: data.dpTheorTime, dp: dpCalls });
            this.tableStats.push(data);
        }
    }

    private drawStats = () => {
        this.prices = GetNumbers(this.state.givenPrices);
        this.spaceStats = [];
        this.timeStats = [];
        this.tableStats = [];

        this.getStats();
        this.setState({ statsVisible: true });
    }
}

export default RodStats;