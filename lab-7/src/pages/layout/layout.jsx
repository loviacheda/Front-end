import {NavLink, Outlet} from "react-router-dom";
import "./layout.css";

function Layout() {
    return (
        <div>
            <header>
                <h1>Лабораторна робота №7</h1>
                <div className="links">
                    <NavLink to="/firstTask">Завдання 1</NavLink>
                    <NavLink to="/secondTask">Завдання 2</NavLink>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;
