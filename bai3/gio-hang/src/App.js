import React, { useState } from "react";

function App() {
  const products = [
    { name: "Sách", price: 10000 },
    { name: "Bút", price: 5000 },
    { name: "Vở", price: 7000 },
  ];

  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.name]) {
        newCart[product.name].quantity += 1;
      } else {
        newCart[product.name] = { ...product, quantity: 1 };
      }
      return newCart;
    });
  };

  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h3>Sản phẩm</h3>
      {products.map((p) => (
        <p key={p.name}>
          {p.name} - {p.price}₫{" "}
          <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
        </p>
      ))}

      <h3>Giỏ hàng</h3>
      <ul>
        {Object.values(cart).map((item) => (
          <li key={item.name}>
            {item.name} - {item.price}₫ x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Tổng tiền: {total}₫</p>
    </div>
  );
}

export default App;
