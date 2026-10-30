import { Link } from "react-router-dom"
import { AppRoutes } from "../../../App"

const Login = () => {

    return (
        <div>
            <h1>Страница входа</h1>
            <button>
                <Link to={AppRoutes.Register}>
                    <p>Регистрация</p>
                </Link>
            </button>
            <button>
                <Link to={AppRoutes.Main}>
                    <p>На главную</p>
                </Link>
            </button>
        </div>
    )
}

export default Login