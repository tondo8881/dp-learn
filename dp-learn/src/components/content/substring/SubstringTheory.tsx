// author: Tomáš Nereča, 2019

import * as Markdown from 'react-markdown';
import * as React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { substrDynCode, substrRecCode, substringDpSpaceComplex, substringDpTimeComplex, substringRecSpaceComplex, substringRecTimeComplex } from 'src/strings/dpProblemsStrings/SubstringStrings';

import BottomMarginDiv from 'src/components/hoc/BottomMarginDiv';
import Complexity from 'src/components/specialized/Complexity';
import CustomTitle from 'src/components/hoc/CustomTitle';
import FlexOne from 'src/components/hoc/FlexOne';
import Img from 'src/components/hoc/PaddingImage';
import PaddingDiv from 'src/components/hoc/PaddingDiv';
import SourceCode from 'src/components/hoc/SourceCode';
import Table1 from 'src/resources/substring/substringTable1.svg';
import Table2 from 'src/resources/substring/substringTable2.svg';
import Table3 from 'src/resources/substring/substringTable3.svg';
import Tree from 'src/resources/substring/substringTree.svg';
import { globalStyles } from 'src/styles/globalStyles';
import { strings } from 'src/strings/translations/strings';
import BoldLink from 'src/components/customStyled/CustomLink';

type AllProps =
    WithStyles<typeof globalStyles>;

// Longest common substring problem theory
class SubstringTheory extends React.Component<AllProps> {
    public render() {
        const { classes } = this.props;
        return (
            <div>
                <CustomTitle variant='h2'>
                    {strings.substring.theory.title}
                </CustomTitle>
                {/* What is longest common substring problem */}
                <BottomMarginDiv>
                    <Markdown source={strings.substring.theory.brief.b1} />

                    <b>{strings.theoryGlobal.eg}</b>
                    <ul className={classes.simpleList}>
                        <li>{strings.substring.theory.brief.input1}</li>
                        <li>{strings.substring.theory.brief.input2}</li>
                    </ul>

                    <b>{strings.substring.theory.brief.b2}</b>
                    <ul className={classes.simpleList}>
                        <li><Markdown source={strings.substring.theory.brief.strX} /></li>
                        <li><Markdown source={strings.substring.theory.brief.strY} /></li>
                    </ul>
                    <Markdown source={strings.substring.theory.brief.b3} />
                    <Markdown source={strings.substring.theory.brief.b4} />
                </BottomMarginDiv>
                <hr />
                <Grid container={true} direction='row'>
                    {/* Recursive solution */}
                    <FlexOne>
                        <PaddingDiv>
                            <Typography variant={'h5'} align={'center'} >
                                {strings.global.recursiveSolution}
                            </Typography>

                            <BottomMarginDiv>
                                <Markdown source={strings.substring.theory.recursion.brief} />
                                <Markdown source={strings.substring.theory.recursion.recTime} />
                                <Markdown source={strings.substring.theory.recursion.recSpace} />
                            </BottomMarginDiv>

                            <BottomMarginDiv>
                                <Complexity time={substringRecTimeComplex} space={substringRecSpaceComplex} />
                            </BottomMarginDiv>

                            {/* Recursion Tree */}
                            <Typography variant={'h6'} className={classes.bottomMargin}>
                                {strings.theoryGlobal.recusionTree}
                            </Typography>
                            <BottomMarginDiv>
                                <Typography variant={'subtitle1'}>
                                    <ul className={classes.simpleList}>
                                        <li>{strings.substring.theory.recursion.input1}</li>
                                        <li>{strings.substring.theory.recursion.input2}</li>
                                    </ul>
                                </Typography>
                            </BottomMarginDiv>
                                <Img src={Tree} alt="SubstringRecTree" width='720' padding='big' />
                            <SourceCode>
                                {substrRecCode}
                            </SourceCode>
                        </PaddingDiv>
                    </FlexOne>

                    {/* Dynamic programming */}
                    <FlexOne>
                        <PaddingDiv>
                            <Typography variant={'h5'} align={'center'}>
                                {strings.global.dynProgSolution}
                            </Typography>

                            <BottomMarginDiv>
                                <Markdown source={strings.substring.theory.dp.brief} />
                                <Markdown source={strings.substring.theory.dp.dpTime} />
                                <Markdown source={strings.substring.theory.dp.dpSpace} />
                            </BottomMarginDiv>

                            <BottomMarginDiv>
                                <Complexity time={substringDpTimeComplex} space={substringDpSpaceComplex} />
                            </BottomMarginDiv>

                            {/* Table examples */}
                            <Typography variant={'h6'} className={classes.bottomMargin}>
                                {strings.global.tables}
                            </Typography>

                            <BottomMarginDiv>
                                <Typography variant={'subtitle1'}>
                                    <ul className={classes.simpleList}>
                                        <li>{strings.substring.theory.dp.input1}</li>
                                        <li>{strings.substring.theory.dp.input2}</li>
                                        <li>{strings.substring.theory.dp.zero}</li>
                                    </ul>
                                </Typography>
                            </BottomMarginDiv>

                            <Img src={Table1} alt="SubstringRecTable1" width='350' padding='big' />

                            <BottomMarginDiv>
                                <Typography variant={'subtitle1'} >
                                    <ul className={classes.simpleList}>
                                        <li>{strings.substring.theory.dp.input1}</li>
                                        <li>{strings.substring.theory.dp.input2}</li>
                                        <li>{strings.substring.theory.dp.increment}</li>
                                    </ul>
                                </Typography>
                            </BottomMarginDiv>

                            <Img src={Table2} alt="SubstringRecTable2" width='350' padding='big' />

                            <BottomMarginDiv>
                                <Typography variant={'subtitle1'} >
                                    <ul className={classes.simpleList}>
                                        <li>{strings.substring.theory.dp.input1}</li>
                                        <li>{strings.substring.theory.dp.input3}</li>
                                        <li>{strings.substring.theory.dp.one}</li>
                                    </ul>
                                </Typography>
                            </BottomMarginDiv>

                            <Img src={Table3} alt="SubstringRecTable3" width='350' padding='big' />

                            <SourceCode>
                                {substrDynCode}
                            </SourceCode>
                        </PaddingDiv>
                    </FlexOne>
                </Grid>
                <CustomTitle variant='h5'>
                    {strings.theoryGlobal.similarProblems}
                </CustomTitle>
                <ul>
                    <li><BoldLink href={strings.substring.theory.longestPalindromHref}>{strings.substring.theory.longestPalindromTitle}</BoldLink></li>
                </ul>
            </div>
        );
    }
}

export default withStyles(globalStyles)(SubstringTheory);
