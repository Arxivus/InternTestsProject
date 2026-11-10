import { Link } from 'react-router-dom'
import { userRoles, sidebarOptions } from '../../const/const'
import styles from './Sidebar.module.scss'

const Sidebar = ({ }) => {

    const options = sidebarOptions.ORGANIZER

    return (
        <section className={styles.sidebar}>
            <div className={styles.user}>
                <span className={styles.icon}>T</span>
                <div className={styles.info}>
                    <h4>TestHR</h4>
                    <span>Панель HR</span>
                </div>
            </div>
            <ul>
                {
                    options.map((option, index) => (
                        <li key={index}>
                            <Link to={option.appRoute}>
                                <div className={styles.optionContainer}>
                                    <img src={option.iconUrl}/>
                                    <p>{option.name}</p>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Sidebar