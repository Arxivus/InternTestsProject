import { Link } from "react-router-dom"
import { AppRoutes } from "../../App"

const TestConstructor = () => {

    return (
        <div>
            <h1>Конструктор тестов</h1>
            <button>
                <Link to={AppRoutes.Main}>
                    <p>На главную</p>
                </Link>
            </button>
        </div>
    )
}

export default TestConstructor