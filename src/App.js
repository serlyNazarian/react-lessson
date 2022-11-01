import "./App.css";
import ToDo from "./ToDo";
// const Banner = () => {
//   return (
//     <div className="Banner">
//       <h1>Banner</h1>
//     </div>
//   );
// };
// const Products = () => {
//   function Item({ name, price }) {
//     return (
//       <div className="Item">
//         <h1>{name}</h1>
//         <h3>{price}</h3>
//       </div>
//     );
//   }
//   return (
//     <div className="Products">
//       <h1>Products</h1>
//       <div className="Products-all">
//         <Item name="Apranq1" price={12000} />
//         <Item name="Apranq2" price={12050} />
//         <Item name="Apranq3" price={12000} />
//         <Item name="Apranq4" price={12000} />
//       </div>
//     </div>
//   );
// };
function App() {
  return (
    <div className="App">
      {/* <Banner />
      <Products /> */}
      <ToDo />
    </div>
  );
}

export default App;
