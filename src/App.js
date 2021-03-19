import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [data,setData]=useState(items);

  function changeMenuByCategory(cat)
  {
    if(cat==="all")
    setData(items);
    else
      setData(items.filter(e=>e.category===cat));
  }

  return(
    <main className="section">
      <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
      </div>
      <Menu changeMenuByCategory={changeMenuByCategory}/>
      <div className="section-center">
            {
             data.map(item=><Categories item={item}/>)
            }
      </div>
    </main>
  )
}

export default App;
