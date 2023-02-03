import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <section>
            <nav className="main-nav">
                <div classNmae="logo">
                    <h2>MU$IC</h2>
                </div>
                <div className='menu-link'>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Categories</a>
                        </li>
                    </ul>

                </div>
            </nav>
            </section>
            
            
        );
    }
};

export default Navbar;
