import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import MobMenu from "./MobMenu";


const Header = () => {
    return (
        <nav className="flex flex-row justify-between px-28 py-6 items-center header">
            <div>
                <Link to="/">
                    <img src={logo} alt="" className="w-32 rounded" />
                </Link>
            </div>
            <div>
                <Link to={"tel:7667430491"}>
                    <button className="bg-btnbg px-4 py-2 rounded text-white flex justify-center items-center hover:opacity-85 font-semibold">
                        Call: 7667430491
                    </button>
                </Link>
            </div>
            <MobMenu />
        </nav >
    );
};
export default Header;