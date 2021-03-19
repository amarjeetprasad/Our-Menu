import React from 'react';

const Menu = ({changeMenuByCategory}) => {
  return (
    <div className="btn-container">
      <p className="filter-btn" onClick={()=>changeMenuByCategory("all")}>All</p>
      <p className="filter-btn" onClick={()=>changeMenuByCategory("breakfast")}>breakfast</p>
      <p className="filter-btn" onClick={()=>changeMenuByCategory("lunch")}>lunch</p>
      <p className="filter-btn" onClick={()=>changeMenuByCategory("shakes")}>shakes</p>
    </div>
  );
};

export default Menu;
