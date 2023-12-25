import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Nav/Navbar";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;