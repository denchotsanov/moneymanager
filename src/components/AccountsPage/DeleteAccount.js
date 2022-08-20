import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";


export const DeleteAccount = (
    data, onClose, open
) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit currency</DialogTitle>
            <form>
                <DialogContent>

                </DialogContent>
                <DialogActions>
                    <Button>Delete</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
