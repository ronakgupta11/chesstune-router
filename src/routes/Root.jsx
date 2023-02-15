// import bgimg from "../assets/bg-img.png""
import { Outlet,Link } from "react-router-dom";

export default function Root(){
    return(
        <div className="main">
            <div className="header">

            </div>
            <div className="navbar">
                <div className="nav-brand">
                    Chesstune
                </div>
                <div className="nav-links">
                    <ul className="nav-link-list">
                        <li className="nav-link-list-item">
                            <Link className="nav-Link" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-link-list-item">
                        <Link className="nav-Link" to={"/puzzles"}>Puzzles</Link>
                        </li>
                        <li className="nav-link-list-item">
                        <Link className="nav-Link" to={"/learn"}>Learn</Link> 
                        </li>
                        <li className="nav-link-list-item">
                        <Link className="nav-Link" to={"/register"}>Register</Link> 
                        </li>
                    </ul>

                </div>

            </div>
            <div className="main-section">
                {/* <img src="../assets/bg-img.png"> 
                </img>
                <h2>
                    this is text area 
                </h2> */}
                <Outlet/>
       
                
            </div>
            <div className="footer">

            </div>

        </div>
        
    );


}