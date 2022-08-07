
import styles from './PageLayout.module.css';
export const PageLayout = ({children}) => {

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                {children}
            </div>
        </div>

    );
}
