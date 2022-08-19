import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { SpeedDial, SpeedDialAction} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import * as transactionsService from "../services/transactionService";
import {useEffect, useState} from "react";


export const TransactionPage = () => {
    const [transactions, setTransactions] = useState({});
    const columns = [
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
        },
        {
            field: 'outcome',
            headerName: 'Outcome',
            type: 'number',
            width: 110,
        }
    ];
    const actions = [
        { icon: <AddIcon />, name: 'New Transaction' },
    ];

    useEffect(() => {
        transactionsService.getAll()
            .then((transactions) => {
                transactions = Object.values(transactions);
                return setTransactions(transactions);
            });
    }, []);
    return (
        <>
            <Box sx={{ height: 700, width: '100%', paddingBottom:25}}>
                <DataGrid columns={columns} rows={transactions} />
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
