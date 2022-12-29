import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className='back-header'>
            <div className="header-area">
                <div className="nav-area">
                    <NavLink to='/'>
                        <p>Pré-requis</p>
                    </NavLink>
                    <NavLink to='/Create'>
                        <p>Create</p>
                    </NavLink>
                    <NavLink to='/Read'>
                        <p>Read</p>
                    </NavLink>
                    <NavLink to='/Update'>
                        <p>Update</p>
                    </NavLink>
                    <NavLink to='/Delete'>
                        <p>Delete</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;