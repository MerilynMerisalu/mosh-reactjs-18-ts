import React, { useState } from "react";


interface IProps {
  items: string[],
  heading: string,
  onSelectedItem: (item : string) => void
}
const ListGroup = ({items, heading, onSelectedItem} : IProps)   => {


  
  let [selectedIndex, setSelectedIndex] = useState(-1);
  
  
  
  
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No items found</p>}
        {items.map((item, index) => (
          <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
          key={item} onClick={() => {setSelectedIndex(index);
            onSelectedItem(item)
          }}
          
          >{item}</li>
        ))}
  
      </ul>
    </>
  );
};


export default ListGroup;
