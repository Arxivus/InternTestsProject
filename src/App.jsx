import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from '../src/pages/NotFound/NotFound'
import Main from '../src/pages/Main/Main'
import TestConstructor from '../src/pages/TestConstructor/TestConstructor'
import Register from '../src/pages/registration/Register/Register'
import Login from '../src/pages/registration/Login/Login'
import TestResult from "./pages/TestResult/TestResult"
import { AppRoutes } from "./const/const"



const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main />} />
        <Route path={AppRoutes.Login} element={<Login />} />
        <Route path={AppRoutes.Register} element={<Register />} />
        <Route path={AppRoutes.TestConstructor} element={<TestConstructor />} />
        <Route path={AppRoutes.TestResult} element={<TestResult />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export  {
  App,
  AppRoutes
}
