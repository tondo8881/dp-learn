import * as Markdown from 'react-markdown';
import * as React from 'react';

import { dpEditDistance, dpEditDistanceSpace, dpEditDistanceTime, editDistanceExamples, recEditDistanceSpace, recEditDistanceTime, recursiveEditDistance } from 'src/dp/helpers/editDistance/EditDistanceStatsHelper';
import { editDistDpSpaceComplex, editDistDpTimeComplex, editDistRecSpaceComplex, editDistRecTimeComplex } from 'src/dp/helpers/editDistance/EditDistanceStrings';

import BottomMarginDiv from 'src/hoc/BottomMarginDiv';
import ChartsAndTable from 'src/components/dpComponents/ChartsAndTable';
import Complexity from 'src/components/dpComponents/Complexity';
import CustomButton from 'src/components/customComponents/CustomButton';
import CustomTextField from 'src/components/customComponents/CustomTextField';
import CustomTitle from 'src/hoc/CustomTitle';
import FlexOne from 'src/hoc/FlexOne';
import FlexTwo from 'src/hoc/FlexTwo';
import { Grid } from '@material-ui/core';
import { ISimpleObjectParameter } from 'src/helpers/TypesDefinitions';
import { ISpaceChartData } from 'src/components/dpComponents/SpaceChart';
import { IStatsTableData } from 'src/components/dpComponents/StatsTable';
import { ITimeChartData } from 'src/components/dpComponents/TimeChart';
import { strings } from 'src/strings/languages';

interface IEditDistanceStatsState {
    stringX: string,
    stringY: string,
    statsVisible: boolean
}

class EditDistanceStats extends React.Component<any, IEditDistanceStatsState> {
    private spaceStats: ISpaceChartData[];
    private timeStats: ITimeChartData[];
    private tableStats: IStatsTableData[];

    public constructor(props: any) {
        super(props)
        this.state = {
            stringX: "AdRemovee",
            stringY: "AddRemove",
            statsVisible: false
        }
    }

    public render() {
        return (
            <div>
                <CustomTitle variant='h5'>
                    {strings.editDistance.stats.title}
                </CustomTitle>
                <BottomMarginDiv>
                    <Markdown source={strings.editDistance.stats.brief} />
                </BottomMarginDiv>
                <Grid container={true} direction='row'>
                    <FlexOne>
                        <Grid container={true} direction='column'>
                            <CustomTextField label={`${strings.global.string} X (max. 30)`} value={this.state.stringX} onChange={this.handlestrXChange} />
                            <CustomTextField label={`${strings.global.string} Y (max. 30)`} value={this.state.stringY} onChange={this.handlestrYChange} />
                        </Grid>
                        <CustomButton onClick={this.drawStats} label={strings.global.evaluateStats} />
                    </FlexOne>
                    <FlexTwo>
                        <Grid container={true} direction='row'>
                            <Complexity time={editDistRecTimeComplex} space={editDistRecSpaceComplex} recOrDp='rec' />
                            <Complexity time={editDistDpTimeComplex}  space={editDistDpSpaceComplex} recOrDp='dp' />
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
                        <Markdown source={strings.editDistance.stats.conclusion} />
                    </div>
                }
            </div>
        );
    }

    private handlestrXChange = (e: any) => {
        if (e.target.value.length <= 30) {
            this.setState({ stringX: e.target.value });
        }
    };

    private handlestrYChange = (e: any) => {
        if (e.target.value.length <= 30) {
            this.setState({ stringY: e.target.value });
        }
    };

    private getStats = () => {
        let recCalls: number;
        let dpCalls: number;
        let name: string;
        let data: IStatsTableData;

        let calls: ISimpleObjectParameter = { value: 0 };

        calls = { value: 0 };
        let strX = this.state.stringX;
        let length1 = strX.length;
        let strY = this.state.stringY;
        let length2 = strY.length;

        recursiveEditDistance(strX, strY, length1, length2, calls);

        recCalls = calls.value;

        calls = { value: 0 };
        dpEditDistance(strX, strY, length1, length2, calls);
        dpCalls = calls.value;

        name = `'${strX}', '${strY}'`;
        data = {
            name,
            recTheorTime: recEditDistanceTime(length1, length2),
            recTime: recCalls,
            dpTime: dpCalls,
            dpTheorTime: dpEditDistanceTime(length1, length2),
            dpSpace: dpEditDistanceSpace(length1, length2),
            recSpace: recEditDistanceSpace(length1, length2)
        }

        this.spaceStats.push({ name, rec: data.recSpace, dp: data.dpSpace });
        this.timeStats.push({ name, recTheor: data.recTheorTime, rec: recCalls, dpTheor: data.dpTheorTime, dp: dpCalls });
        this.tableStats.push(data);

        for (const example of editDistanceExamples) {
            calls = { value: 0 };
            strX = example.strX;
            length1 = strX.length;
            strY = example.strY;
            length2 = strY.length;

            recursiveEditDistance(strX, strY, length1, length2, calls);

            recCalls = calls.value;

            calls = { value: 0 };
            dpEditDistance(strX, strY, length1, length2, calls);

            dpCalls = calls.value;

            name = `'${strX}', '${strY}'`;
            data = {
                name,
                recTheorTime: recEditDistanceTime(length1, length2),
                recTime: recCalls,
                dpTime: dpCalls,
                dpTheorTime: dpEditDistanceTime(length1, length2),
                dpSpace: dpEditDistanceSpace(length1, length2),
                recSpace: recEditDistanceSpace(length1, length2)
            }

            this.spaceStats.push({ name, rec: data.recSpace, dp: data.dpSpace });
            this.timeStats.push({ name, recTheor: data.recTheorTime, rec: recCalls, dpTheor: data.dpTheorTime, dp: dpCalls });
            this.tableStats.push(data);
        }
    }

    private drawStats = () => {
        this.spaceStats = [];
        this.timeStats = [];
        this.tableStats = [];

        this.getStats();
        this.setState({ statsVisible: true });
    }
}

export default EditDistanceStats;