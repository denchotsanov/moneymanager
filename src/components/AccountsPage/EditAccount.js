import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useEffect} from "react";

export const EditAccount = ({
                                 data, onClose,
                                 open
                             }) => {
    useEffect(()=>{
        console.log(data);
    },[]);
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit account</DialogTitle>
            <form>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        name="name"
                        defaultValue={data.name}

                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="abbr"
                        label="Abbr"
                        type="text"
                        fullWidth
                        name="abbr"

                        defaultValue={data.abbr}
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button>Save</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
