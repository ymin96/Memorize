import { Dialog, DialogContent, Typography } from "@material-ui/core";
import React from "react";
import { Script } from "../../api/memorize";
import ScriptDialogContent from "./ScriptDialogContent";
import ScriptDialogTitle from "./ScriptDialogTitle";

export type ScriptDialogProps = {
    open: boolean;
    script: Script;
    dialogOpen: () => void;
    dialogClose: () => void;
};

const ScriptDialog = ({ open, script, dialogClose, dialogOpen }: ScriptDialogProps) => {
    return (
        <Dialog open={open} onClose={dialogClose} maxWidth="md">
            <ScriptDialogTitle onClose={dialogClose}>Movie Title</ScriptDialogTitle>
            <ScriptDialogContent script={script}/>
        </Dialog>
    );
};

export default ScriptDialog;
