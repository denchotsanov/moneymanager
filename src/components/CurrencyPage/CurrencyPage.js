import {Container} from "@mui/material";
import styles from "./CurrencyPage.module.css";
import {DataTable} from "../common/DataTable";
import {AddCurrency} from "./AddCurrency";
import {EditCurrency} from "./EditCurrency";
import {DeleteCurrency} from "./DeleteCurrency";
import {useEffect, useState} from "react";
import * as currencyService from "../../services/currencyService";
import * as exchangeService from "../../services/exchangeService";
import {AddButton} from "../common/AddButton";
import {FlashMessage} from "../common/FlashMessage";
import AddIcon from "@mui/icons-material/Add";

export const CurrencyPage = () => {
    const [rows, setRows] = useState([]);
    const [alert,setAlert] = useState(false);
    const [exgRows,setExgRows] = useState([]);
    const [dataAction, setDataAction] = useState({ data: null, action: null });

    const columns = [
        {
            "field":"name",
            "headerTitle": "Name"
        },
        {
            "field":"attr",
            "headerTitle": "Attr",
            "width":100,
        }
    ];
    const exgCols =[
        {
            "field":"currency_label",
            "headerTitle":"Currency"
        },
        {
            "field":"currency_rate",
            "headerTitle":"Rate"
        }
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

    const onCloseFlash = () => {
        setAlert(false);
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
            });
    }
    const addMenuList = [
        { icon: <AddIcon />, name: 'New currency', onAction:onAddButton },
    ];

    useEffect(() => {
        console.log(dataAction);
        currencyService.getAll()
            .then(data => setRows(Object.values(data)));
    }, []);
    useEffect(()=>{
        if(rows.length >0 ){
            exchangeService.getLatest('BGN' ,
                Array.prototype.map.call(rows, function(item) { return !item.isMain ? item.attr: null; }).join(",")).then(data=> {
                let result = Object.keys(data.rates).map((key) => { return {"currency_label": '1 BGN' , "currency_rate": data.rates[key] + ' ' + key  } });
                return setExgRows(result);
            }).catch((e)=> setAlert(e.message))
        }
    },[rows]);

    return (
        <div className={ styles.app__currency_page}>
            { alert ? <FlashMessage title={alert} type='error' onClose={onCloseFlash} />:'' }
            {dataAction.action === "add" ?
                <AddCurrency
                    onClose={closeHandler}
                    onDataCreate={dataCreateHandler}
                    open={true} /> : <></> }
            {dataAction.action === "edit" ?
                <EditCurrency
                    user={dataAction.data}
                    onClose={closeHandler}
                    open={dataAction.action === 'edit'} /> :<></> }
            {dataAction.action === "delete" ?
                <DeleteCurrency
                    onClose={closeHandler}
                    user={dataAction.data}
                    open={dataAction.action === 'delete'} /> :<></> }
            <Container>
                <h2>Currencies</h2>
                <div className={styles.app__currency_table}>
                    <h4>Available currency</h4>
                    <DataTable
                        columns={columns}
                        rows={rows}
                        onEditButton={onEditButton}
                        onDelButton={onDelButton}
                    />
                </div>
                <div className={styles.app_exchange_table}>
                    <h4>Exchange rates</h4>
                    <DataTable columns={exgCols} rows={exgRows}/>
                </div>
                <AddButton lists={addMenuList}/>
            </Container>
        </div>
    );
}
