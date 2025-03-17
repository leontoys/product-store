import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<div className="nav-bar">
            <span className="nav-bar-left">
                <Link to={"/"}><span id="product-store">Product Store 🛒</span></Link>
            </span>
            <span className="nav-bar-right">
                <Link to={"/create"}>
					<button>
                        <FaRegSquarePlus />
					</button>
				</Link>
				<button onClick={toggleColorMode}>
					{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
				</button>

            </span>            
		</div>
	);
};
export default Navbar;