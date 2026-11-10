import styles from './ButtonElement.module.scss'
import classNames from 'classnames'
import { Button } from '@mui/material'

const ButtonElement = ({ onClick, children, isColored, disabled }) => {

    return (
        <button
            className={classNames(styles.btn, isColored ? styles.colored : styles.outlined)}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ButtonElement