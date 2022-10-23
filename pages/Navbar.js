import Image from "next/image";

const Navbar = () => {
    return ( 
        <div>
            <nav className="flex mt-5"> 
                <p className="ml-20">Company Name</p>
                <ul className="flex ml-auto">
                    <li className="ml-5">Home </li>
                    <li className="ml-5">Roadmap </li>
                    <li className="ml-5">About us</li>
                </ul>
                <button className="border rounded-md ml-auto mr-20 pt-1 pb-2 pl-5 pr-5 text-sm">
                    Connect Wallet
                    <Image src="/../public/assets/vector.svg" alt="/" width="20px" height="20px" />
                </button>
            </nav>
        </div>
    );
}
 
export default Navbar;