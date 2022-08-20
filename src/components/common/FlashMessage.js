
import {Alert} from "@mui/material";

export const FlashMessage = ({title, type, onClose}) =>  <Alert onClose={onClose} severity={type}>
        {title}
    </Alert>


