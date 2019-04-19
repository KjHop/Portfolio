import * as React from 'react';
import "../styles/Main.css";
import {NavLink} from 'react-router-dom';

class Main extends React.Component{
    render(){
        return (
            <div className="Main">
                <header>
                    <ul>
                        <li><NavLink to='/projects' activeClassName='activeLink'>my projects</NavLink></li>
                        <li><NavLink to='/about' activeClassName='activeLink'>about me</NavLink></li>
                        <li><NavLink to='/contact' activeClassName='activeLink'>contact</NavLink></li>
                    </ul>
                </header>
                <main>
                    <div className="mainBigtext">
                        Here goes some big text
                    </div>
                </main>
            </div>
        );
    }
}

export default Main;