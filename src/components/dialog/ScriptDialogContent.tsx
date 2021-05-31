import { Button, Chip, createStyles, DialogContent, Grid, GridTypeMap, makeStyles, Theme, Typography, useTheme } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Script } from "../../api/memorize";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
            paddingTop: 0,
        },
        chipDiv: {
            display: "flex",
            flexWrap: "wrap",
            listStyle: "none",
            paddingLeft: 0,
        },
        chip: {
            margin: theme.spacing(0.5),
        },
        typography: {
            flexGrow: 1,
        },
        hintWrap: {
            height: 52,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 7,
            paddingLeft: theme.spacing(1),
            color: theme.palette.primary.main,
        },
        hintShow: {
            flexGrow: 1,
            color: "white",
            cursor: "default",
            "&:hover": {
                color: theme.palette.primary.main,
            },
        },
        hintWord: {
            flexGrow: 1,
            cursor: "default",
        },
        video:{
            
        }
    })
);

export type ScriptDialogContentProps = {
    script: Script;
};

type ChipData = {
    key: number;
    label: string;
    active: boolean;
};

function divideScript(script: string): ChipData[] {
    let words: string[] = script.split(" ");
    let words_chip: ChipData[] = words.map((value, index) => ({
        key: index,
        label: value,
        active: true,
    }));
    return words_chip;
}

const ScriptDialogContent = ({ script }: ScriptDialogContentProps) => {
    const classes = useStyles();
    const [words, setWords] = useState<ChipData[]>(divideScript(script.caption));
    const [answers, setAnswers] = useState<ChipData[]>([]);
    const hintWrapGrid = useRef<HTMLDivElement>(null);
    const theme = useTheme();

    const handleToggle = (chipToToggle: ChipData) => () => {
        setWords((chips) => chips.map((chip) => (chip.key === chipToToggle.key ? { ...chip, active: !chip.active } : chip)));
        if (chipToToggle.active) {
            setAnswers(answers.concat(chipToToggle));
        } else {
            setAnswers(answers.filter((chip) => chip.key !== chipToToggle.key));
        }
    };

    //Show 에 mouseOver시 hintWrap의 backgroundColor 변경
    const hintMouseHover = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (hintWrapGrid.current) {
            hintWrapGrid.current.style.backgroundColor = "white";
        }
    };
    //Show 에 mouseLeave시 hintWrap의 backgroundColor 변경
    const hintMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (hintWrapGrid.current) {
            hintWrapGrid.current.style.backgroundColor = theme.palette.primary.main;
        }
    };

    return (
        <DialogContent className={classes.root}>
            <video controls className={classes.video} width={730}>
                <source src ={`http://localhost:8080/script/stream/1`} type="video/webm"/>
            </video>

            <Grid container className={classes.hintWrap} ref={hintWrapGrid}>
                <Grid container item xs={10} style={{ alignItems: "center" }}>
                    <Typography variant="h6" className={classes.hintWord}>
                        {script.caption}
                    </Typography>
                </Grid>
                <Grid container item xs={2} style={{ alignItems: "center" }}>
                    <Typography onMouseOver={hintMouseHover} onMouseLeave={hintMouseLeave} variant="h6" align="center" className={classes.hintShow}>
                        Show
                    </Typography>
                </Grid>
            </Grid>

            <ul className={classes.chipDiv}>
                {words.map((value) => {
                    return (
                        <li key={value.key}>
                            <Chip
                                variant={value.active ? "default" : "outlined"}
                                label={value.label}
                                className={classes.chip}
                                color="primary"
                                clickable
                                onClick={handleToggle(value)}
                            />
                        </li>
                    );
                })}
            </ul>

            <Grid container>
                <Grid item sm={11}>
                    <ul className={classes.chipDiv}>
                        {answers?.map((value) => {
                            return (
                                <li key={value.key}>
                                    <Chip label={value.label} clickable className={classes.chip} style={{ backgroundColor: "#ffffff" }} />
                                </li>
                            );
                        })}
                    </ul>
                </Grid>
                <Grid item sm={1} container alignItems="center">
                    <Button color="primary">Submit</Button>
                </Grid>
            </Grid>
        </DialogContent>
    );
};

export default ScriptDialogContent;
