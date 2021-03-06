// author: Tomáš Nereča, 2019

// Codes for optimization problem solutiom are inspirated by https://www.geeksforgeeks.org/longest-common-substring-dp-29/

import * as Markdown from 'react-markdown';
import * as React from 'react';

import { Grid, TableCell, TableRow } from '@material-ui/core';
import { WithStyles, withStyles } from "@material-ui/core/styles";

import BottomMarginDiv from 'src/components/hoc/BottomMarginDiv';
import CustomButton from 'src/components/customStyled/CustomButton';
import CustomTextField from 'src/components/customStyled/CustomTextField';
import CustomTitle from 'src/components/hoc/CustomTitle';
import DemoTable from 'src/components/specialized/DemoTable';
import FlexOne from 'src/components/hoc/FlexOne';
import FlexTwo from 'src/components/hoc/FlexTwo';
import Formula from 'src/components/hoc/Formula';
import SpeedSelector from 'src/components/specialized/SpeedSelector';
import { globalStyles } from 'src/styles/globalStyles';
import { strings } from 'src/strings/translations/strings';
import { substringFormula } from 'src/strings/dpProblemsStrings/SubstringStrings';
import { valueOrUndefined } from 'src/helpers';

interface ISubstringDemoState {
    speed: string
    inProgress: boolean
    tableVisible: boolean
    table: number[][]
    result: string
    currentState: string
    stringX: string
    stringY: string
    match: boolean | undefined
    highlitingOn: boolean
}

type AllProps =
    WithStyles<typeof globalStyles>;

// Longest common substring problem demo
class SubstringDemo extends React.Component<AllProps, ISubstringDemoState> {

    /////////////////////// private variables /////////////////////////////////

    private outerCounter: number;
    private innerCounter: number;

    private nextAutomataState:
        'doInnerLoop' |
        'nextInnerLoop' |
        'assignZero' |
        'assignOne' |
        'assignIncremented' |
        'done'
        = 'done';

    // Tuple for result position
    private resultPos: [number, number];

    // Helper for solution highlighting
    private solution: Array<[number, number]>;

    // Length of strings
    private LENGTH1: number;
    private LENGTH2: number;

    // Timeout
    private timeout: any;
    private speed: number = 1;

    public constructor(props: AllProps) {
        super(props)
        this.state = {
            speed: '9',
            inProgress: false,
            tableVisible: false,
            table: [],
            result: "",
            currentState: '...',
            stringX: "String",
            stringY: "Testing",
            match: undefined,
            highlitingOn: false
        }
    }

    public render() {
        return (
            <div>
                <CustomTitle variant='h2'>
                    {strings.substring.demo.title}
                </CustomTitle>
                <BottomMarginDiv>
                    <Markdown source={strings.substring.demo.brief} />
                </BottomMarginDiv>
                <Grid container={true} direction='row'>
                    <FlexOne>
                        <Grid container={true} direction='column'>
                            <CustomTextField label={`${strings.global.string} X (max. 20)`} value={this.state.stringX} onChange={this.handlestrXChange} />
                            <CustomTextField label={`${strings.global.string} Y (max. 20)`} value={this.state.stringY} onChange={this.handlestrYChange} />
                        </Grid>

                        {/* Speed select */}
                        <SpeedSelector onClick={this.speedChange} speed={this.state.speed} />
                        <br />

                        <Grid container={true} direction='row'>
                            {/* Start button */}
                            <CustomButton label={strings.demoGlobal.start} onClick={this.handleStartClick} disabled={false} />

                            {/* Step button */}
                            <CustomButton label={strings.demoGlobal.step} onClick={this.finiteAutomata} disabled={!this.state.inProgress || +this.state.speed !== 0} />

                            {/* Finish button */}
                            <CustomButton label={strings.demoGlobal.finish} onClick={this.handleFinishClick} disabled={!this.state.inProgress} />
                        </Grid>
                    </FlexOne>
                    <FlexTwo>
                        <Formula>
                            {substringFormula}
                        </Formula>
                    </FlexTwo>
                </Grid>
                <br />

                {/* Table and result */}
                <DemoTable currentState={this.state.currentState} cols={this.LENGTH2 + 1} visible={this.state.tableVisible} result={this.state.result} head={this.tableHead} body={this.tableBody} />
            </div >
        );
    }

    private handlestrXChange = (e: any) => {
        if (e.target.value.length <= 20) {
            clearTimeout(this.timeout);
            this.setState({ stringX: e.target.value, tableVisible: false, result:'', inProgress: false });
        }
    };

    private handlestrYChange = (e: any) => {
        if (e.target.value.length <= 20) {
            clearTimeout(this.timeout);
            this.setState({ stringY: e.target.value, tableVisible: false, result:'', inProgress: false });
        }
    };

    private speedChange = (e: any) => {
        this.setState({ speed: e.target.value });
        this.speed = +e.target.value;
            
        clearTimeout(this.timeout);

        if (+e.target.value !== 0 && this.state.inProgress) {
            this.finiteAutomata();
        }
    };

    private setTimeout = (func: () => void) => {
        this.timeout = setTimeout(func, 9000 / this.speed);
    }

    private handleStartClick = () => {
        clearTimeout(this.timeout);

        const table: number[][] = [];

        this.LENGTH1 = this.state.stringX.length;
        this.LENGTH2 = this.state.stringY.length;

        if (this.LENGTH1 === 0 || this.LENGTH2 === 0) {
            this.setState({
                result: `${strings.substring.demo.longestSubr}: '', ${strings.substring.demo.length}: 0`,
            });
            return;
        }

        this.resultPos = [0, 0];

        // Initialize two dimensional array
        for (let i = 0; i < this.LENGTH1; i++) {
            table[i] = [];
        }

        this.outerCounter = 0;
        this.innerCounter = 0;

        this.setState({
            tableVisible: true,
            inProgress: true,
            table,
            result: strings.demoGlobal.evaluation,
            match: undefined,
            highlitingOn: false
        });

        // Start immediately with inner loop
        this.doInnerLoop();

        // Check if auto play or step by step
        if (this.speed !== 0) {
            this.setTimeout(this.finiteAutomata);
        }
    }

    private finiteAutomata = () => {
        // Finite automata
        switch (this.nextAutomataState) {
            case 'doInnerLoop':
                this.doInnerLoop();
                break;
            case 'nextInnerLoop':
                this.nextInnerLoop();
                break;
            case 'assignZero':
                this.assignZero();
                break;
            case 'assignOne':
                this.assignOne();
                break;
            case 'assignIncremented':
                this.assignIncremented();
                break;
        }

        // if speed != 0, setTimeout is needed
        const auto: boolean = this.speed !== 0;

        if (auto && this.nextAutomataState !== 'done') {
            this.setTimeout(this.finiteAutomata);
        }
    }

    private doInnerLoop = () => {
        this.setState({ highlitingOn: true });
        if (this.state.stringX[this.outerCounter] === this.state.stringY[this.innerCounter]) {
            this.setState({
                currentState: `'${this.state.stringX[this.outerCounter]}' == '${this.state.stringY[this.innerCounter]}', ${strings.substring.demo.incrementPrevious}`,
                match: true
            });
            if (this.innerCounter === 0 || this.outerCounter === 0) {
                this.nextAutomataState = 'assignOne';
            }
            else {
                this.nextAutomataState = 'assignIncremented';
            }
        }
        else {
            this.setState({ currentState: `'${this.state.stringX[this.outerCounter]}' != '${this.state.stringY[this.innerCounter]}', ${strings.substring.demo.assignZero}` });
            this.nextAutomataState = 'assignZero';
        }
    }

    private assignZero = () => {
        const table = [...this.state.table];
        table[this.outerCounter][this.innerCounter] = 0;

        this.setState({
            table,
        });

        this.nextAutomataState = 'nextInnerLoop';
    }

    private assignOne = () => {
        const table = [...this.state.table];
        table[this.outerCounter][this.innerCounter] = 1;

        this.setState({
            table,
        });

        if (table[this.outerCounter][this.innerCounter] > this.state.table[this.resultPos[0]][this.resultPos[1]]) {
            this.resultPos[0] = this.outerCounter;
            this.resultPos[1] = this.innerCounter;
        }

        this.nextAutomataState = 'nextInnerLoop';
    }

    private assignIncremented = () => {
        this.setState({ match: true });

        const table = [...this.state.table];
        table[this.outerCounter][this.innerCounter] = table[this.outerCounter - 1][this.innerCounter - 1] + 1;

        this.setState({
            table,
        });

        if (table[this.outerCounter][this.innerCounter] > this.state.table[this.resultPos[0]][this.resultPos[1]]) {
            this.resultPos[0] = this.outerCounter;
            this.resultPos[1] = this.innerCounter;
        }

        this.nextAutomataState = 'nextInnerLoop';
    }

    private nextInnerLoop = () => {
        if (this.innerCounter + 1 >= this.LENGTH2) {
            if (this.outerCounter + 1 >= this.LENGTH1) {
                this.nextAutomataState = 'done';
                this.setFinalState(this.state.table);
                return;
            }
            else {
                this.outerCounter++;
                this.innerCounter = 0;
            }
        }
        else {
            this.innerCounter++;
        }

        this.setState({
            match: undefined,
        });

        this.doInnerLoop();
    }

    private handleFinishClick = () => {
        clearTimeout(this.timeout);

        const table: number[][] = [];
        this.resultPos = [0, 0];

        for (let i = 0; i < this.LENGTH1; i++) {
            table[i] = [];
            for (let j = 0; j < this.LENGTH2; j++) {
                if (this.state.stringX[i] === this.state.stringY[j]) {
                    if (i === 0 || j === 0) {
                        table[i][j] = 1;
                    }
                    else {
                        table[i][j] = table[i - 1][j - 1] + 1;
                    }

                    if (table[i][j] > table[this.resultPos[0]][this.resultPos[1]]) {
                        this.resultPos[0] = i;
                        this.resultPos[1] = j;
                    }
                }
                else {
                    table[i][j] = 0;
                }
            }
        }

        this.setState({
            table
        });

        this.setFinalState(table);
    };

    private setFinalState = (table: number[][]) => {
        this.solution = [];
        let finalString = '';

        for (let i = table[this.resultPos[0]][this.resultPos[1]] - 1; i >= 0; i--) {
            this.solution.push([this.resultPos[0] - i, this.resultPos[1] - i]);
            finalString += this.state.stringX[this.resultPos[0] - i];
        }

        this.setState({
            inProgress: false,
            result: `${strings.substring.demo.longestSubr}: '${finalString}', ${strings.substring.demo.length}: ${table[this.resultPos[0]][this.resultPos[1]]}`,
            currentState: strings.demoGlobal.done
        });
    }

    // Return table heading
    private tableHead = () => {
        const { classes } = this.props;

        const heading = [];

        heading.push(<TableCell key='tableHeading' className={[classes.tableHeading, classes.caption].join(' ')} />)

        for (let i = 0; i < this.LENGTH2; i++) {
            const classNames = [classes.columnCaption];

            // Highlight solution
            if (this.state.inProgress === false) {
                let isBlue: boolean = false;
                this.solution.forEach(element => {
                    if (element[1] === i) {
                        classNames.push(classes.blueCaption);
                        isBlue = true;
                    }
                });
                if (!isBlue) {
                    classNames.push(classes.caption);
                }
            }
            else {
                classNames.push(classes.caption);
            }

            heading.push(
                <TableCell key={'columnName' + i.toString()} className={classNames.join(' ')}>
                    {this.state.stringY[i]}
                </TableCell>);
        }

        return heading;
    }

    // Return table body
    private tableBody = () => {
        const { classes } = this.props;

        const body = [];
        let classNames = [];

        // i = 1 because 0 is heading
        for (let i = 0; i < this.LENGTH1; i++) {
            const row = [];

            classNames = [classes.rowCaption];

            // Highlight solution
            if (this.state.inProgress === false) {
                let isBlue: boolean = false;
                this.solution.forEach(element => {
                    if (element[0] === i) {
                        classNames.push(classes.blueCaption);
                        isBlue = true;
                    }
                });
                if (!isBlue) {
                    classNames.push(classes.caption);
                }
            }
            else {
                classNames.push(classes.caption);
            }

            // Row names
            row.push(
                <TableCell key={`rowName ${i.toString()}`} className={classNames.join(' ')}>
                    {this.state.stringX[i]}
                </TableCell>
            );

            // Table body(content)
            for (let j = 0; j < this.LENGTH2; j++) {
                classNames = [classes.tableCell];
                const key = `row ${i}, column ${j}`;

                let value = valueOrUndefined(this.state.table[i][j]);

                if (this.state.highlitingOn) {
                    // Highlight solution
                    if (this.state.inProgress === false) {
                        this.solution.forEach(element => {
                            if (element[0] === i && element[1] === j) {
                                classNames.push(classes.blueCell);
                            }
                        });
                    }
                    else {
                        // Highlight current
                        if (i === this.outerCounter && j === this.innerCounter) {
                            classNames.push(classes.blueCell);
                        }

                        // Highlight previous
                        if (this.state.match && i === this.outerCounter - 1 && j === this.innerCounter - 1 && this.nextAutomataState === 'nextInnerLoop') {
                            classNames.push(classes.yellowCell);
                            value += ' + 1';
                        }
                    }
                }

                row.push(
                    <TableCell key={key} className={classNames.join(' ')}>
                        {value}
                    </TableCell>
                );
            }

            // Push row to the table
            body.push(
                <TableRow key={`row ${i}`}>
                    {row}
                </TableRow>
            );
        }

        return body;
    }
}

export default withStyles(globalStyles)(SubstringDemo);
