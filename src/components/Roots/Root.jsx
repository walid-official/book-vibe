import Books from "../Books/Books";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Books></Books>
        </div>
    );
};

export default Root;