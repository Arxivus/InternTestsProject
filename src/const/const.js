const AppRoutes = {
    'Main': '/',
    'Login': '/login',
    'Register': '/register',
    'Profile': '/profile',
    'TestConstructor': '/constructor',
    'Tests': '/tests',
    'TestResult': '/result',
    'MyTests': '/my-tests'
}

const userRoles = {
    STUDENT: 'student',
    ORGANIZER: 'orginazer',
    HR: 'HR',
    ADMIN: 'admin'
}

const sidebarOptions = {
    ORGANIZER: [
        { name: 'Мои тесты', iconUrl: '', appRoute: `${AppRoutes.Tests}` },
        { name: 'Конструктор', iconUrl: '', appRoute: `${AppRoutes.TestConstructor}` },
        { name: 'Результаты', iconUrl: '', appRoute: `${AppRoutes.TestsResults}` },
    ],

}

export {
    userRoles,
    AppRoutes,
    sidebarOptions
}