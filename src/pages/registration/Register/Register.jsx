import { Link } from "react-router-dom"
import { AppRoutes } from "../../../App"

const Register = () => {

    return (
        <div>
            <h1>Страница регистрации</h1>
            <button>
                <Link to={AppRoutes.Login}>
                    <p>Войти</p>
                </Link>
            </button>
        </div>
    )
}

export default Register