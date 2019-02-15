import * as React from 'react';

import { Avatar, Button, Grid, TableCell, TableRow, TextField, Typography } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { AnimatedDiv } from 'src/components/Animated';
import DemoTable from 'src/components/hoc/presentational/fields/DemoTable';
import SpeedSelector from 'src/components/hoc/presentational/buttons/SpeedSelector';
import StepFinishButton from 'src/components/hoc/presentational/buttons/StepFinishButton';
import { demoStyles } from 'src/styles/demoStyles';
import { strings } from 'src/translations/languages';

interface ICoinsDemoState {
    givenValue: number
    givenCoins: string
    charX: string
    charY: string
    inProgress: boolean
    tableVisible: boolean
    result: string
    speed: number
    table: number[]
    selectedCol: number
    highlitedCells: string[]
    skip: boolean
    pose: string
}

type AllProps =
    WithStyles<typeof demoStyles>;

class CoinsDemo extends React.Component<AllProps, ICoinsDemoState> {

    /////////////////////// private variables /////////////////////////////////

    private outerCounter: number;
    private innerCounter: number;

    // To store table position of the result
    // private tableRow: number;
    // private tableCol: number;

    // Given coins
    private coins: number[];

    private backtrackHelp: number[];

    // Create a table to store lengths of  
    // longest common suffixes of substrings. 
    // Note that table[i][j] contains length 
    // of longest common suffix of X[0..i-1]  
    // and Y[0..j-1]. The first row and first 
    // column entries have no logical meaning, 
    // they are used only for simplicity of  
    // program 
    private table: number[];

    // Timeout
    private timeout: any;

    // Delay helper
    private delayHelper = 1500;

    public constructor(props: AllProps) {
        super(props)
        this.state = {
            givenValue: 4,
            givenCoins: "1,2,5",
            charX: "",
            charY: "",
            speed: 1,
            inProgress: false,
            tableVisible: false,
            result: "",
            table: [],
            selectedCol: 0,
            highlitedCells: [],
            skip: false,
            pose: "empty"
        }
    }

    public render() {
        const { classes } = this.props;

        return (
            <div>
                <Typography variant={'h4'} align={'center'} className={classes.bottomMargin}>
                    {strings.coins.demo.title}
                </Typography>
                <div className={classes.bottomMargin}>
                    {strings.coins.demo.brief}
                </div>
                <Grid className={[classes.container, classes.bottomMargin].join(' ')}>
                    <form className={classes.container} autoComplete="off">
                        <TextField
                            id="givenValueTF"
                            label={strings.coins.demo.value}
                            className={classes.textField}
                            value={this.state.givenValue}
                            onChange={this.handleValue}
                            margin="normal"
                        />
                    </form>
                    <form className={classes.container} autoComplete="off">
                        <TextField
                            id="givenCoinsTF"
                            label={strings.coins.demo.coins}
                            className={classes.textField}
                            value={this.state.givenCoins}
                            onChange={this.handleCoins}
                            margin="normal"
                        />
                    </form>
                </Grid>
                <br />

                {/* Speed select */}
                <SpeedSelector onClick={this.speedChange} speed={this.state.speed.toString()} />
                <br />
                <Button variant="contained" color="primary" className={classes.buttonDark} onClick={this.evaluate}>
                    {strings.global.start}
                </Button>

                {/* Do step or finish */}
                <StepFinishButton visible={this.state.inProgress} speed={this.state.speed} onStepClick={this.onStepClick} onFinishClick={this.onFinishClick} />

                {/* Animated avatars */}
                {(this.state.charX !== "" || this.state.charY !== "") &&
                    <div className={classes.avatars}>
                        <Avatar className={[classes.avatar, classes.defaultAvatar].join(' ')}>{this.state.charX}</Avatar>
                        <span className={classes.sign}> > </span>

                        <AnimatedDiv pose={this.state.pose}>
                            <Avatar
                                className={[classes.avatar, this.state.charY === "" ? classes.defaultAvatar :
                                    this.state.pose === 'noMatch' ? classes.redAvatar : classes.greenAvatar].join(' ')}
                            >
                                {this.state.charY}
                            </Avatar>
                        </AnimatedDiv>
                        {this.state.skip && <span>Skipping...</span>}
                    </div>
                }

                {/* Table and result */}
                <DemoTable visible={this.state.tableVisible} result={this.state.result} head={this.tableHead} body={this.tableBody} />
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

    private speedChange = (e: any) => {
        this.setState({ speed: +e.target.value });
    };

    private evaluate = () => {
        this.setState({
            charX: "",
            charY: ""
        });

        this.table = [];
        this.backtrackHelp = [];
        // this.tableCol = this.tableRow = 0;

        this.getCoins();

        // Base case (If given value is 0) 
        this.table[0] = 0;

        // Initialize all table
        // values as Infinite
        for (let i = 1; i <= this.state.givenValue; i++) {
            this.table[i] = Number.MAX_VALUE;
            this.backtrackHelp[i] = -1;
        }

        this.outerCounter = 1;

        this.setState({
            tableVisible: true,
            inProgress: true,
            table: this.table,
            result: "Current result: 0"
        });

        this.innerCounter = 0;

        // Check if auto play or debugging
        if (this.state.speed !== 0) {
            this.timeout = setTimeout(this.onStepClick, this.delayHelper / this.state.speed);
        }
    }

    private onStepClick = () => {
        // Only for speed === 0
        if (this.outerCounter > this.state.givenValue) {
            this.setFinalState();
            return;
        }

        this.setState({ selectedCol: this.innerCounter + 1});

        if (this.coins[this.innerCounter] <= this.outerCounter) {
            const subRes = this.table[this.outerCounter - this.coins[this.innerCounter]];

            this.setState({
                charX: this.table[this.outerCounter] === Number.MAX_VALUE ? '∞' : this.table[this.outerCounter].toString(),
                charY: subRes === Number.MAX_VALUE ? '∞' : `${subRes} + 1` ,
                highlitedCells: []
            });

            if ((subRes !== Number.MAX_VALUE) && (subRes + 1 < this.table[this.outerCounter])) {
                this.table[this.outerCounter] = subRes + 1;
                this.backtrackHelp[this.outerCounter] = this.innerCounter;
                this.setState({ pose: 'match'})
                // Flash
                this.incrementOn();
            }
            else {
                this.setState({ pose: 'noMatch'});
            }
        }
        else {
            this.setState({ skip: true, pose: 'empty'});
        }

        this.setState({ table: this.table });

        this.innerCounter++;

        if (this.innerCounter < this.state.givenValue) {
            if (this.state.speed !== 0) {
                this.timeout = setTimeout(this.transitionHelper, this.delayHelper / this.state.speed);
            }
        }
        else {
            this.outerCounter++;
            if (this.outerCounter > this.state.givenValue) {
                this.timeout = setTimeout(this.setFinalState, this.delayHelper / this.state.speed);
            }
            else {
                this.innerCounter = 0;
                this.timeout = setTimeout(this.transitionHelper, this.delayHelper / this.state.speed);
            }
        }
    }

    private onFinishClick = () => {
        clearTimeout(this.timeout);
        this.setState({ speed: 0 });

        while (this.outerCounter <= this.state.givenValue) {
            this.onStepClick();
        }

        this.setState({ speed: 1 });
    };

    private incrementOn = () => {

        const cells = [`row ${this.outerCounter - 1},column ${this.innerCounter - 1}`];

        this.setState({
            highlitedCells: cells
        });

        if (this.state.speed !== 0) {
            setTimeout(this.incrementOff, (this.delayHelper / 2) / this.state.speed);
        }
    }

    private incrementOff = () => {
        this.setState({ highlitedCells: [] });
    }

    private setFinalState = () => {
        // TODO
        const cells: string[] = [];
        // let finalString = "";

        // for (let i = this.table[this.tableRow][this.tableCol] - 1; i >= 0; i--) {
        //     cells.push(`row ${this.tableRow - i},column ${this.tableCol - i}`);
        //     finalString += this.state.stringX[this.tableRow - i - 1];
        // }
        console.log('used coins: ', this.backtrackHelp);
        this.setState({
            inProgress: false,
            result: this.table[this.state.givenValue].toString(), // `Longest common substring: "${finalString}", length is ${this.table[this.tableRow][this.tableCol]}.`,
            highlitedCells: cells,
            charX: "",
            charY: "",
            selectedCol: 0,
        });
    }

    // Convert coins in string to number array
    private getCoins = () => {
        this.coins = [];
        for (const coin of this.state.givenCoins.split(",")) {
            if (!Number.isNaN(+coin)) {
                this.coins.push(+coin);
            }
            else {
                this.setState({ result: "Error" });
                return;
            }
        }
    }

    private transitionHelper = () => {
        if (this.state.speed !== 0) {
            this.setState({ charY: "" });
            this.timeout = setTimeout(this.onStepClick, 500 / this.state.speed);
        }
    }

    // Return table heading
    private tableHead = () => {
        const { classes } = this.props;

        const heading = [];

        heading.push(<TableCell key='tableHeading' className={[classes.tableHeading, classes.caption].join(' ')}>Table</TableCell>)

        for (let i = 1; i <= this.state.givenValue; i++) {
            const classNames = [classes.columnCaption, classes.caption];

            if (i === this.state.selectedCol) {
                classNames.push(classes.highlitedCell);
            }

            heading.push(
                <TableCell key={'columnName' + i.toString()} className={classNames.join(' ')}>
                    {`Value ${i}`}
                </TableCell>);
        }

        return heading;
    }

    // Return table body
    private tableBody = () => {
        const { classes } = this.props;

        const body = [];
        let classNames = [];

        let row = [];

        classNames = [classes.rowCaption, classes.caption];

        // Row names
        row.push(
            <TableCell key={'tableRow name'} className={classNames.join(' ')}>
                {`Cycle ${this.outerCounter}.`}
            </TableCell>
        );

        for (let j = 1; j <= this.state.givenValue; j++) {
            const key = `body column ${j}`;
            const value = this.state.table[j] === Number.MAX_VALUE ? "" : this.state.table[j].toString();

            row.push(
                <TableCell key={key} className={classes.tableCell}>
                    {value}
                </TableCell>
            );
        }
        
        // Push row to the table
        body.push(
            <TableRow key={`tableRow1`}>
                {row}
            </TableRow>
        );

        row = [];
        row.push(
            <TableCell key={'backtrackHelp name'} className={classNames.join(' ')}>
                {'Backtrac helper'}
            </TableCell>
        );

        for (let j = 1; j <= this.state.givenValue; j++) {
            classNames = [classes.tableCell];
            const key = `backtrackHelp column ${j}`;

            let value = this.backtrackHelp[j].toString();

            for (const highlitedKey in this.state.highlitedCells) {
                if (this.state.highlitedCells[highlitedKey] === key) {
                    classNames.push(classes.incCell);

                    if (this.state.inProgress) {
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
            <TableRow key={`tableRow2`}>
                {row}
            </TableRow>
        );

        return body;
    }
}

export default withStyles(demoStyles)(CoinsDemo);