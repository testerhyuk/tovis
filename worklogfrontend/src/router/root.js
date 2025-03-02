import MainPage from "../pages/MainPage";
import WorkPage from "../pages/WorkPage";

const { createBrowserRouter } = require("react-router-dom");

const root = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/works',
        element: <WorkPage />
    }
])

export default root;