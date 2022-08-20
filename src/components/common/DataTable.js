import styles from './DataTable.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export const DataTable = ({
    columns,
    rows,
    onEditButton,
    onDelButton
}) => {
    return (
        <div className={styles.data_table_wrapper}>
            <table className={styles.data_table}>
                <thead>
                    <tr>
                        {columns.map((item,idx) =>{
                            return (
                                <td key={idx} width={item.width}>
                                    {item.headerTitle}
                                </td>
                            );
                        })}
                        { onEditButton || onDelButton ? <td colSpan="2"></td> : '' }
                    </tr>
                </thead>
                <tbody>

                    { rows.length > 0 ? rows.map((item,idx) => {
                       return (
                           <tr key={item.id? item.id : idx} className={ item.isMain ? styles.main_row : idx %2 ? styles.even : styles.odd }>
                               <DataTableItem item={item} cols={columns} onEditButton={onEditButton} onDelButton={onDelButton}/>
                           </tr>
                       );
                    }):<tr><td className={styles.no_data} colSpan={columns.length}> No data!</td></tr>}
                </tbody>
            </table>
        </div>
    );
}


export const DataTableItem = ({
    item,
    cols,
    onEditButton,
    onDelButton
}) => {
    return (
        <>
            { cols.map((colItem,idx) =>{
                return (
                    <td key={idx} width={colItem.width}>
                        { item[colItem.field] }
                    </td>
                );
            })}
            { onEditButton ? <td width="15"><EditIcon color="primary" onClick={ onEditButton(item.id ? item.id: item._id) } /></td> : '' }
            { onDelButton ? <td width="15"><DeleteIcon color="error" onClick={ onDelButton(item.id ? item.id: item._id) }/></td> : '' }
        </>
    );
}
