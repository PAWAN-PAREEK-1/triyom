import React, { useState } from 'react';

const Navbar = () => {
  const [menuHeight, setMenuHeight] = useState(0);
  const [menuOpacity, setMenuOpacity] = useState(0);

  const toggleMenu = () => {
    if (menuHeight === 0) {
      setMenuHeight(200);
      setMenuOpacity(1);
    } else {
      setMenuHeight(0);
      setMenuOpacity(0);
    }
  };

  return (
    <div>
      <button className="burger-btn" onClick={toggleMenu}>
        Burger Button
      </button>
      <div className="menu" style={{ height: `${menuHeight}px`, opacity: menuOpacity }}>
        {/* Your menu content goes here */}
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
      <div className="navbar">
        {/* Your navbar content goes here */}
        <span>Navbar Content</span>
      </div>
    </div>
  );
};

export default Navbar;
