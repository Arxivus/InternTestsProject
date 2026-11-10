import styles from './TestResult.module.scss'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../App'
import ButtonElement from '../../components/ui/ButtonElement/ButtonElement'

const TestResult = ({ test, isPassed }) => {

    return (
        <div className={'container'}>
            <section className={styles.testResult}>
                <div className={styles.title}>
                    <h2>Результат теста</h2>
                    <p></p>
                </div>
                <div className={styles.resultInfo}>
                    <div className={styles.resultStatus}>
                        <span>Статус</span>
                        <h1>
                            { isPassed ? 'Поздравляем! Вы прошли!' : 'К сожалению, вы не прошли'}
                        </h1>
                    </div>
                    <div className={styles.resultPoints}>
                        <div>
                            <span>Ваш результат</span>
                            <div className={styles.pointsBlock}>
                                <p>13 из 20</p>
                            </div>
                        </div>
                        <div>
                            <span>Проходной балл</span>
                            <div className={styles.pointsBlock}>
                                <p>14 из 20</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.message}>
                        <p>Результат отправлен на ваш Email и в Telegram</p>
                        <p></p>
                    </div>
                </div>
                <ButtonElement isColored={true}>
                    Вернуться на главную
                </ButtonElement>
            </section>
        </div>
    )
}

export default TestResult