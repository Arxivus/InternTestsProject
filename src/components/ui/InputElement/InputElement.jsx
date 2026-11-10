import { Input } from "@mui/material"
import styles from './InputElement.module.scss'

const InputElement = ({ title, type, placeholder, tip }) => {

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={'field'}>{title}</label>
            <Input 
                id='field'
                type={type}
                placeholder={placeholder}
                disableUnderline
            />
            <span className={styles.tip}>{tip}</span>
        </div>
    )
}

export default InputElement