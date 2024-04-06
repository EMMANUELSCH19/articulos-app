import React from "react";

function Header() {
    return (
        <header className="flex justify-between container m-auto">
            <div className="">
                Logo
            </div>
            <nav className="flex">
                <ul className="flex me-14">
                    <li className="mx-6">Home</li>
                    <li className="mx-6">About</li>
                    <li className="mx-6">Contact</li>
                </ul>
				<a href="">
					Login
				</a>
            </nav>
        </header>
    );
}

export default Header;