import React from "react";
import { Link } from "react-router-dom";


export function Header() {
    return (<React.Fragment>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users/">Users</Link>
                </li>
                <li>
                    <Link to="/computers/">Computers</Link>
                </li>
            </ul>
        </nav>
        </React.Fragment>);
}