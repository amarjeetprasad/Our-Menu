import React from 'react';

const Categories = ({item}) => {
  return (
    <div className="menu-item">
        <img src={item.img} alt={item.title} className="photo" />
        <div className="item-info">
        <header>
          <h4>{item.title}</h4>
          <p className="price">${item.price}</p>
        </header>
          <p cl="item-text">{item.desc}</p>
        </div>
    </div>
  );
};

export default Categories;
