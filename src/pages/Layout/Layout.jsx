import styles from './Layout.module.scss'
import Sidebar from '../../components/Sidebar/Sidebar'

const Layout = ({ children }) => {

    return (
        <div className={'container'}>
            <div className={styles.wrapper}>
                <Sidebar />
                <div className={styles.content}>
                    <div className={styles.user}>
                        <span className={styles.icon}>АК</span>
                        <div className={styles.info}>
                            <h4>Анна Кузнецова</h4>
                            <span>HR-менеджер</span>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
} 

export default Layout