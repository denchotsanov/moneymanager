import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";

export const EditCurrency = ({
                                 data, onClose,
                                open
                            }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit currency</DialogTitle>
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
                        value={data.name}

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

                        value={data.abbr}
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
