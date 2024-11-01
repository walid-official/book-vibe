import { Outlet } from "react-router-dom";
// import Books from "../Books/Books";
// import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;