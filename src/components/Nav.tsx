import logo from "../assets/logo-text.png";

const Nav = () => {
    return <nav className="flex justify-between gap-4 container mx-auto">
        <img src={logo} className="h-8" alt="" />
        <ul className="flex gap-4 items-center">
            <li className="text-pink-600"><a href="">Home</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <div className="flex gap-4 items-center">

            <button>Sign In</button>
            <button className="bg-pink-600 text-white px-4 py-2  rounded-md">Sign Up</button>
        </div>
    </nav>
};

export default Nav; 