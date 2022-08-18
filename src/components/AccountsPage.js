import {Container, Box, SpeedDial, SpeedDialAction} from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import * as accountsService from "../services/accountsService";


export const AccountsPage = () => {
    const [accounts, setAccounts] = useState({});
    const columns = [
        { field: '_Id', headerName: 'ID', width: 90 },
        {
            field: 'date',
            headerName: 'Date',
            width: 150,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 500,
            editable: true,
        },
        {
            field: 'income',
            headerName: 'Income',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'outcome',
            headerName: 'Outcome',
            type: 'number',
            width: 110,
            editable: true,
        }
    ];
    const actions = [
        { icon: <AddIcon />, name: 'New account' },
    ];

    useEffect(() => {
        accountsService.getAll()
            .then(transactions => setAccounts(transactions));
    }, []);
    return (
        <>
            <Box sx={{ height: 700, width: '100%', paddingBottom:25}}>
                <DataGrid columns={columns} rows={accounts} />
            </Box>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </>
    );
}
