import React from 'react';
import Card from './Card';
export default function Items({ items }) {
    if (!Array.isArray(items)) {
        return <div>No items available.</div>;
      }
  return (

    <div className = 'grid lg:grid-cols-3 gap-9 mt-9 md:grid-cols-1 ' >
      {items.map(item => (
        <Card item = {item} key={item.id} />
      ))}
    </div>
  );
}
