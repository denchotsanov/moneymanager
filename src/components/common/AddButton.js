import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import {SpeedDial, SpeedDialAction} from "@mui/material";

export const AddButton = ({ lists }) => {
    return  lists ? (<SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
    >
        {lists.length > 0 ? lists.map((action) => (
            <SpeedDialAction
                onClick={action.onAction}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
            />
        )): ''}
    </SpeedDial>) : <></>
}
