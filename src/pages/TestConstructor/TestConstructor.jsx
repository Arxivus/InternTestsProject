import { Link } from "react-router-dom"
import { AppRoutes } from "../../App"
import Layout from '../Layout/Layout'
import styles from './TestConstructor.module.scss'
import TestParameters from "../../components/TestParameters/TestParameters"

const TestConstructor = () => {

    return (
        <Layout>
            <section className={styles.constructor}>
                <h1>Конструктор теста</h1>
                <TestParameters></TestParameters>
                <button>
                    <Link to={AppRoutes.Main}>
                        <p>На главную</p>
                    </Link>
                </button>
            </section>
        </Layout>
    )
}

export default TestConstructor