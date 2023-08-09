import { Context } from "../context/AppContext";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { store, actions } = useContext(Context);
  
  let monto = store.cart.reduce(
    (acc, currentValue) => acc + currentValue.price,
    0
  );
  console.log(store.cart);
  const handleRemoveProduct = (model) => actions.removeFromCart(model);


    let codigo = []

    for (let index = 0; index < store.cart.length; index++) {
      codigo.push(store.cart[index].brakeModel);
      console.log(codigo);
    }
    const urlBase = `https://api.whatsapp.com/send?phone=+584242526757&text=Hola!%20estoy%20interesad@%20en%20los%20siguientes%20productos%0A%0A*Codigos*:%20${codigo.toString()}%0A%0A*Total*:%20$${monto}`;
  
    console.log(urlBase);


  return (
    <div className="mt-5 pt-4 cart">
      <h2>Tú carrito de compras</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Carro</th>
            <th scope="col">Precio</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <span className="fw-bold">Total</span>
            </td>
            <td>
              <span className="fw-bold">
                $
                {store.cart.reduce(
                  (acc, currentValue) => acc + currentValue.price,
                  0
                )}
              </span>
            </td>
          </tr>
        </tfoot>
        <tbody>
          {store.cart.map((product, index) => {
            return (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">
                  <span className="fw-normal">{product.model}</span>
                </th>
                <th scope="row">
                  {" "}
                  <span className="fw-normal">${product.price}</span>
                </th>
                <th scope="row ">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveProduct(product.model)}
                  >
                    Eliminar
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div 
        className="btns">
        <a className="btn btn-success mb-5 rounded-pill" href={urlBase}>
          {" "}
          Completa tu pedido por{" "}
          <i className="fa-brands fa-whatsapp fs-3 ms-2"></i>
        </a>
        <Link to="/">
          <button className="btn btn-warning mb-5 rounded-pill ms-5">
            {" "}
            Regresar <i className="fa-solid fa-people-pulling fs-3 ms-2"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};
