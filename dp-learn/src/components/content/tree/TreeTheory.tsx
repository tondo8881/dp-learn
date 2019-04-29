import * as Markdown from 'react-markdown';
import * as React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { TreeDynCode, TreeRecCode, treeDpSpaceComplex, treeDpTimeComplex, treeFormula, treeRecSpaceComplex, treeRecTimeComplex } from 'src/strings/dpProblemsStrings/TreeStrings';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import BottomMarginDiv from 'src/components/hoc/BottomMarginDiv';
import Complexity from 'src/components/specialized/Complexity';
import CustomTitle from 'src/components/customStyled/CustomTitle';
import FlexOne from 'src/components/hoc/FlexOne';
import FlexTwo from 'src/components/hoc/FlexTwo';
import Formula from 'src/components/hoc/Formula';
import PaddingDiv from 'src/components/hoc/PaddingDiv';
import PaddingImage from 'src/components/hoc/PaddingImage';
import SourceCode from 'src/components/hoc/SourceCode';
import Table1En from 'src/resources/tree/treeTable1En.svg';
import Table1Sk from 'src/resources/tree/treeTable1Sk.svg';
import Table2En from 'src/resources/tree/treeTable2En.svg';
import Table2Sk from 'src/resources/tree/treeTable2Sk.svg';
import Tree from 'src/resources/tree/treeTree.svg';
import TreeExample1 from 'src/resources/tree/treeExample1.svg';
import TreeExample2 from 'src/resources/tree/treeExample2.svg';
import { globalStyles } from 'src/styles/globalStyles';
import { strings } from 'src/strings/translations/strings';

type AllProps =
    WithStyles<typeof globalStyles>;

class TreeTheory extends React.Component<AllProps> {
    public render() {
        const { classes } = this.props;
        return (
            <div>
                <CustomTitle variant='h5'>
                    {strings.tree.theory.title}
                </CustomTitle>
                {/* What is edit distance problem */}
                <BottomMarginDiv>
                    <Markdown source={strings.tree.theory.brief.b1} />

                    <b>{strings.theoryGlobal.eg}</b>
                    <ul className={classes.simpleList}>
                        <li>{strings.tree.theory.keysExample}</li>
                        <li>{strings.tree.theory.freqsExample}</li>
                    </ul>
                    <BottomMarginDiv>
                        <b>{strings.tree.theory.brief.b2}</b>
                    </BottomMarginDiv>

                    {/* Tree examples */}
                    <Grid container={true} direction='row'>
                        <FlexOne>
                            <Typography variant={'h6'} className={classes.bottomMargin}>
                                {strings.tree.tree} 1
                            </Typography>
                            <PaddingImage>
                                <img src={TreeExample1} width='420' />
                            </PaddingImage>
                        </FlexOne>
                        <FlexTwo>
                            <Typography variant={'h6'} className={classes.bottomMargin}>
                                {strings.tree.tree} 2
                            </Typography>
                            <PaddingImage>
                                <img src={TreeExample2} width='350' />
                            </PaddingImage>
                        </FlexTwo>
                    </Grid>
                    <Markdown source={strings.tree.theory.brief.b3} />
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
                                <Markdown source={strings.tree.theory.recursion.brief} />
                                <Markdown source={strings.tree.theory.recursion.recTime} />
                                <Markdown source={strings.tree.theory.recursion.recSpace} />
                            </BottomMarginDiv>

                            <BottomMarginDiv>
                                <Complexity time={treeRecTimeComplex} space={treeRecSpaceComplex} />
                            </BottomMarginDiv>

                            {/* Recursion Tree */}
                            <Typography variant={'h6'} className={classes.bottomMargin}>
                                {strings.global.recusionTree}
                            </Typography>
                            <BottomMarginDiv>
                                <Typography variant={'subtitle1'}>
                                    <ul className={classes.simpleList}>
                                        <li>{strings.tree.theory.recursion.input}</li>
                                    </ul>
                                </Typography>
                            </BottomMarginDiv>
                            <PaddingImage>
                                <img src={Tree} alt="optimalTreeRecTree" width='99%' />
                            </PaddingImage>
                            <SourceCode>
                                {TreeRecCode}
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
                                <Markdown source={strings.tree.theory.dp.brief1} />
                                <Formula>
                                    {treeFormula}
                                </Formula>
                                <Markdown source={strings.tree.theory.dp.brief2} />

                                <Markdown source={strings.tree.theory.dp.dpTime} />
                                <Markdown source={strings.tree.theory.dp.dpSpace} />
                            </BottomMarginDiv>

                            <BottomMarginDiv>
                                <Complexity time={treeDpTimeComplex} space={treeDpSpaceComplex} />
                            </BottomMarginDiv>

                            {/* Table examples */}
                            <Typography variant={'h6'} className={classes.bottomMargin}>
                                {strings.global.tables}
                            </Typography>

                            <BottomMarginDiv>
                                <Typography variant={'subtitle1'}>
                                    <ul className={classes.simpleList}>
                                        <li>{strings.tree.theory.keysExample}</li>
                                        <li>{strings.tree.theory.freqsExample}</li>
                                    </ul>
                                </Typography>
                            </BottomMarginDiv>

                            <PaddingImage>
                                {strings.getLanguage() === 'en' &&
                                    <img src={Table1En} width='450' />
                                }
                                {strings.getLanguage() === 'sk' &&
                                    <img src={Table1Sk} width='450' />
                                }
                            </PaddingImage>

                            <BottomMarginDiv>
                                <Typography variant={'subtitle1'}>
                                    <ul className={classes.simpleList}>
                                        <li>{strings.tree.theory.keysExample2}</li>
                                        <li>{strings.tree.theory.freqsExample2}</li>
                                    </ul>
                                </Typography>
                            </BottomMarginDiv>

                            <PaddingImage>
                                {strings.getLanguage() === 'en' &&
                                    <img src={Table2En} width='650' />
                                }
                                {strings.getLanguage() === 'sk' &&
                                    <img src={Table2Sk} width='650' />
                                }
                            </PaddingImage>
                            <SourceCode>
                                {TreeDynCode}
                            </SourceCode>
                        </PaddingDiv>
                    </FlexOne>
                </Grid>
                <CustomTitle variant='h5'>
                    {strings.global.similarProblems}
                </CustomTitle>
                <ul>
                    <li><b><a href={strings.tree.theory.matrixMultHref}>{strings.tree.theory.matrixMultTitle}</a></b></li>
                </ul>
            </div>
        );
    }
}

export default withStyles(globalStyles)(TreeTheory);