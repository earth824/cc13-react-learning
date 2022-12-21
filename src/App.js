// Lab 3
// function App() {
//   return <ProductItem name="Pepsi" price={50} description="Pepsi is da best" />;
// }

// function ProductItem(props) {
//   console.log(typeof props.price);
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.price}</h2>
//       <p>{props.description}</p>
//     </div>
//   );
// }

// function ProductItem({ name, price, description }) {
//   console.log(typeof price);
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{price}</h2>
//       <p>{description}</p>
//     </div>
//   );
// }

// Lab 4
function App() {
  return (
    <ProductItem
      product={{ name: 'Pepsi', price: 50, description: 'Pepsi is da best' }}
    />
  );
}

// function ProductItem(props) {
//   return (
//     <div>
//       <h1>{props.product.name}</h1>
//       <h2>{props.product.price}</h2>
//       <p>{props.product.description}</p>
//     </div>
//   );
// }

function ProductItem({ product: { name, price, description } }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <p>{description}</p>
    </div>
  );
}

export default App;
