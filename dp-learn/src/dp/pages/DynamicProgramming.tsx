import * as Markdown from 'react-markdown';
import * as React from 'react';

import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles';

import CenteredContainer from 'src/hoc/CenteredContainer';
import CustomTitle from 'src/hoc/CustomTitle';
import LeftMarginDiv from 'src/hoc/LeftMarginDiv';
import { Paper } from '@material-ui/core';
import RecTree from 'src/resources/dp/recTree.svg';
import { strings } from 'src/strings/languages';

type AllProps =
    WithStyles<typeof styles>;

const styles = (theme: Theme) => createStyles({
    parent: {
        padding: theme.spacing.unit * 2,
        marginBottom: 0
    },
    paper: {
        padding: theme.spacing.unit * 2,
    },
});

class DynamicProgramming extends React.Component<AllProps> {
    public render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.parent}>
                <CustomTitle variant='h5'>
                    {strings.dp.whatIsDpTitle}
                </CustomTitle>
                <Markdown source={strings.dp.whatIsDpText} />

                <CustomTitle variant='h5'>
                    {strings.dp.mainPrinciplesTitle}
                </CustomTitle>
                <Markdown source={strings.dp.mainPrinciplesText} />

                <CustomTitle variant='h6'>
                    {strings.dp.optSubstructTitle}
                </CustomTitle>
                <LeftMarginDiv>
                    <Markdown source={strings.dp.optSubstructText} />
                </LeftMarginDiv>

                <CustomTitle variant='h6'>
                    {strings.dp.repeatingTitle}
                </CustomTitle>
                <LeftMarginDiv>
                    <Markdown source={strings.dp.repeatingText} />
                </LeftMarginDiv>
                <CenteredContainer>
                    <img src={RecTree} />
                </CenteredContainer>
                <CustomTitle variant='h5'>
                    {strings.dp.prosAndConsTitle}
                </CustomTitle>
                <Markdown source={strings.dp.prosAndConsText} />
            </Paper>
        );
    }
}

export default withStyles(styles)(DynamicProgramming);
