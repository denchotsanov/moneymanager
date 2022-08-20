import {Container} from "@mui/material";
import styles from "./CurrencyPage.module.css";
import {DataTable} from "../common/DataTable";
import {useEffect, useState} from "react";
import * as currencyService from "../../services/currencyService";
import * as exchangeService from "../../services/exchangeService";
import {AddButton} from "../common/AddButton";
import {FlashMessage} from "../common/FlashMessage";

export const CurrencyPage = () => {
    const [rows, setRows] = useState([]);
    const [alert,setAlert] = useState(false);
    const [exgRows,setExgRows] = useState([]);
    const columns = [
        {
            "field":"id",
            "headerTitle": "ID",
            "width":50,
        },
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
    ]
    const onDelButton = ()=>{}
    const onEditButton = ()=>{}
    const onCloseFlash = () => {
        setAlert(false);
    }
    useEffect(() => {
        currencyService.getAll()
            .then(data => setRows(Object.values(data)));
        exchangeService.getLatest('BGN','EUR,USD').then(data=> {
            let result = Object.keys(data.rates).map((key) => { return {"currency_label": '1 BGN' , "currency_rate": data.rates[key] + ' ' + key  } });
            return setExgRows(result);
        }).catch((e)=> setAlert(e.message))
    }, []);
    return (
        <section className={ styles.app__currency_page}>
            {alert ? <FlashMessage title={alert} type='error' onClose={onCloseFlash} />:'' }
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
                <AddButton/>
            </Container>
        </section>
    );
}
