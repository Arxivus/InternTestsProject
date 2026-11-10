import styles from './TestParameters.module.scss'
import InputElement from '../ui/InputElement/InputElement'
import TextareaElement from '../ui/TextareaElement/TextareaElement';
import classNames from 'classnames';

const TestParameters = () => {

    return (
        <form className={styles.parametersForm}>
            <h3>Параметры теста</h3>
            <div className={styles.testSettings}>
                <div className={classNames(styles.parameters, styles.textParams)}>
                    <TextareaElement
                        title={'Название теста'}
                        placeholder={'Тестирование на знание HR-процессов'}
                        tip={'Обязательно, 3–255 символов'}
                    />
                    <TextareaElement
                        title={'Описание теста'}
                        placeholder={'Проверка знаний по основным HR-процессам, документообороту и внутренним регламентам.'}
                        tip={'Необязательно, до 1000 символов'}
                    />
                </div>
                <div className={styles.parameters}>
                    <InputElement
                        title={'Порог прохождения'}
                        type={'number'}
                        placeholder={''}
                        tip={'0–100%, по умолчанию — 0%'}
                    />
                    <InputElement
                        title={'Время на прохождение'}
                        type={'number'}
                        placeholder={''}
                        tip={'Значение в минутах'}
                    />
                    <InputElement
                        title={'Количество вопросов'}
                        type={'number'}
                        tip={'Для сохранения/публикации: ≥ 1'}
                    />
                    <InputElement
                        title={'Максимальный балл'}
                        type={'number'}
                        tip={'Сумма баллов по вопросам: 2+3+4+5+6 = 20'}
                    />
                </div>
            </div>
        </form>
    )
}

export default TestParameters