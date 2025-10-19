import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import NotFound from "../components/not-found";
import Home from "../pages/home";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>} errorElement={<NotFound/>}>
        <Route index={true} element={<Home/>}/>
    </Route>

))

export default router;