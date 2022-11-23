import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const menuItems=(
        <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/categories'>Categories</Link></li>
        <li><Link>About</Link></li>
        </>
    )
    return (
        <div className="navbar bg-black text-white">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-red-500 text-xl">CarSeAl</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
</div>
    );
};

export default Navber;