import { TextField } from "@mui/material"
import styles from './TextareaElement.module.scss'

const TextareaElement = ({ title, placeholder, tip }) => {

    return (
        <div className={styles.textareaContainer}>
            <label className={styles.label} htmlFor={'field'}>{title}</label>
            <TextField
                id='field'
                multiline
                minRows={1}
                placeholder={placeholder}
            />
            <span className={styles.tip}>{tip}</span>
        </div>
    )
}

export default TextareaElement