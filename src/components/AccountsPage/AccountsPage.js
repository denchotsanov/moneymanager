import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import * as accountsService from "../../services/accountsService";
import styles from "./AccountsPage.module.css";
import {FlashMessage} from "../common/FlashMessage";
import {AddAccount} from "./AddAccount";
import {EditAccount} from "./EditAccount";
import {DeleteAccount} from "./DeleteAccount";
import {DataTable} from "../common/DataTable";
import {AddButton} from "../common/AddButton";
import * as currencyService from "../../services/currencyService";


export const AccountsPage = () => {
    const [rows, setRows] = useState([]);
    const [dataAction, setDataAction] = useState({ data: null, action: null });
    const columns = [
        { field: '_id', headerTitle: 'ID', width: 90 },

        {
            field: 'name',
            headerTitle: 'Name',
            width: 500,
            editable: true,
        },
        {
            field: 'balance',
            headerTitle: 'Balance',
            type: 'number',
            width: 110,
            editable: true,
        },

        {
            field: 'date',
            headerTitle: 'Date',
            width: 150,
            editable: true,
        },
    ];
    const onDelButton = (id)=>{
        return dataActionClickHandler(id,'delete');
    }
    const onEditButton = (id)=>{
        return dataActionClickHandler(id,'edit');
    }
    const onAddButton = () => {
        return dataActionClickHandler(null, 'add');
    }
    const closeHandler = () => {
        return setDataAction({data: null,action: null });
    }
    const dataCreateHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {
            name,
            abbr
        } = Object.fromEntries(formData);

        const data = {
            name,
            abbr
        };
        currencyService.create(data)
            .then(row => {
                setRows(oldRows => [...oldRows, row]);
                closeHandler();
            });
    }
    const dataActionClickHandler = (id, actionType) => {
        currencyService.getOne(id)
            .then(data => {
                setDataAction({
                    data: data,
                    action: actionType
                });
                console.log(dataAction);
                closeHandler();
            });
    }

    const addMenuList = [
        { icon: <AddIcon />, name: 'New account', onAction:onAddButton },
    ];

    useEffect(() => {
        accountsService.getAll()
            .then(data => setRows(Object.values(data)));
    }, []);

    return (
        <div className={ styles.app__account_page}>
            {dataAction.action === "add" ?
                <AddAccount
                    onClose={closeHandler}
                    onDataCreate={dataCreateHandler}
                    open={true} /> : <></> }
            {dataAction.action === "edit" ?
                <EditAccount
                    user={dataAction.data}
                    onClose={closeHandler}
                    open={dataAction.action === 'edit'} /> :<></> }
            {dataAction.action === "delete" ?
                <DeleteAccount
                    onClose={closeHandler}
                    user={dataAction.data}
                    open={dataAction.action === 'delete'} /> :<></> }
            <Container>
                <h2>Account</h2>
                <div className={styles.app__account_table}>
                    <DataTable
                        columns={columns}
                        rows={rows}
                        onEditButton={onEditButton}
                        onDelButton={onDelButton}
                    />
                </div>
                <AddButton lists={addMenuList}/>
            </Container>
        </div>
    );
}
