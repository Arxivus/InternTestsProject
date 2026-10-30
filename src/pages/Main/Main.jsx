import { Link } from "react-router-dom"
import { AppRoutes } from "../../App"

const Main = () => {

    return (
        <div>
            <h1>Главная страница</h1>
            <button>
                <Link to={AppRoutes.Login}>
                    <p>Войти в аккаунт</p>
                </Link>
            </button>
            <button>
                <Link to={AppRoutes.TestConstructor}>
                    <p>Создать тест</p>
                </Link>
            </button>
        </div>
    )
}

export default Main