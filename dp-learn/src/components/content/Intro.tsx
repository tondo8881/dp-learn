// author: Tomáš Nereča, 2019

import * as Markdown from 'react-markdown';
import * as React from 'react';

import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles';

import CustomTitle from 'src/components/hoc/CustomTitle';
import LeftMarginDiv from 'src/components/hoc/LeftMarginDiv';
import { strings } from 'src/strings/translations/strings';
import BoldLink from '../customStyled/CustomLink';
import { Link } from '@material-ui/core';

type AllProps =
    WithStyles<typeof styles>;

const styles = (theme: Theme) => createStyles({
    parent: {
        padding: theme.spacing.unit * 2,
        paddingTop: 0
    },
});

// Intro page
class Intro extends React.Component<AllProps> {
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.parent}>
                <CustomTitle variant='h1'>
                    {strings.global.dpLearn}
                </CustomTitle>
                <Markdown source={strings.intro.dpLearn} />

                <CustomTitle variant='h2'>
                    {strings.intro.whatIsDpTitle}
                </CustomTitle>

                <Markdown source={strings.intro.whatIsDpText1} />
                <ul>
                    <li>
                        <Markdown source={strings.intro.optSubstruct} />
                    </li>
                    <li>
                        <Markdown source={strings.intro.repeating} />
                    </li>
                </ul>
                <Markdown source={strings.intro.whatIsDpText2} />

                <CustomTitle variant='h2'>
                    {strings.intro.partsTitle}
                </CustomTitle>
                <Markdown source={strings.intro.partsText} />

                <LeftMarginDiv>
                    <CustomTitle variant='h6'>
                        {strings.intro.theoryTitle}
                    </CustomTitle>
                    <Markdown source={strings.intro.theoryText} />
                    <CustomTitle variant='h6'>
                        {strings.intro.demoTitle}
                    </CustomTitle>
                    <Markdown source={strings.intro.demoText} />
                    <CustomTitle variant='h6'>
                        {strings.intro.statsTitle}
                    </CustomTitle>
                    <Markdown source={strings.intro.statsText} />
                </LeftMarginDiv>
                <CustomTitle variant='h5'>
                    {strings.intro.references}
                </CustomTitle>
                <ul>
                    <li>
                        <BoldLink href={strings.intro.geeksHref}>
                            {strings.intro.geeksTitle}
                        </BoldLink> - {strings.intro.geeksText}
                    </li>
                    <li>
                        <BoldLink href={strings.intro.algorithmsHref}>
                            {strings.intro.algorithmsTitle}
                        </BoldLink> - {strings.intro.algorithmsText}
                    </li>
                </ul>
                <CustomTitle variant='h5'>
                    {strings.global.github}
                </CustomTitle>
                <ul>
                    <li>
                        <Link href={strings.global.githubLink}>{strings.global.githubLink}</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withStyles(styles)(Intro);
