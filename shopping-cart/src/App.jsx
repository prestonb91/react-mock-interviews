import React, { useState } from 'react';

const initialItems = [
  { id: 1, name: 'T-Shirt', quantity: 0 },
  { id: 2, name: 'Jeans', quantity: 0 },
  { id: 3, name: 'Shoes', quantity: 0 }
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (itemId) => {
    setItems(currentItems =>
      currentItems.map(item => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const handleRemoveItem = (itemId) => {
    setItems(currentItems =>
      currentItems.map(item => item.id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item)
    );
  };

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <h2 data-testid="total">Total Items: {totalItems}</h2>
      <div>
        {items.map(item => (
          <div key={item.id} data-testid={`item-${item.id}`}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <button
              onClick={() => handleRemoveItem(item.id)}
              disabled={item.quantity === 0}
              data-testid={`remove-${item.id}`}
            >
              -
            </button>
            <button
              onClick={() => handleAddItem(item.id)}
              data-testid={`add-${item.id}`}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}