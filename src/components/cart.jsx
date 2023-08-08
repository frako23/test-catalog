import { Context } from "../context/AppContext";
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";

export const Cart = () => {
    const { store, actions } = useContext(Context);
    let codigo = "";
    let monto = 0;

    const handleRemoveProduct = (productId) => actions.removeFromCart(productId);
    // const whatsappUrl = () => {
        
        //     let urlResult = urlBase
        
        
        //     console.log("me ejecuto");
        
        //     setLinkHref("https:www.google.com") 
        
        //     return "#"
        
    //     for (let index = 0; index < store.cart.length; index++) {
            
    //         if (index == store.removeProductFromCart.length - 1) {
    //             monto = monto + store.cart[index].price
    //             codigo = codigo.concat(store.cart[index].breakModel)
    //             console.log("entra aqui");
    //         }
            
    //         else {
    //             codigo = codigo.concat(`${store.cart[index].breakModel},%20`)        
    //         }
            
    // }

    
    const urlBase = `https://api.whatsapp.com/send?phone=+584242526757&text=Hola!%20estoy%20interesad@%20en%20los%20siguientes%20productos%0A%0A*Codigos*:%20${codigo}%0A%0A*Total*:%20$${monto}`;

    console.log(urlBase)

    

    return (
        <div className='mt-5 pt-4'>
            <h2>Tú carrito de compras</h2>
            <table className='table'>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                        <th scope='col'>Código</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {store.cart.map((product, index) => {
                        return (
                            <tr key={product.id}>
                                <th scope='row'>{index + 1}</th>
                                <th scope='row'>{product.brakeModel}</th>
                                <th scope='row'> $ {product.price}</th>
                                <th scope='row'><button className='btn btn-danger' onClick={() => handleRemoveProduct(product.id)}>Eliminar</button></th>
                            </tr>)
                    })
                    
                    }
                    
                </tbody>
            </table>
            <div className="btns">
            <a className='btn btn-success mb-5 rounded-pill' href={urlBase}> Completa tu pedido por <i className="fa-brands fa-whatsapp fs-3 ms-2"></i></a>
            <Link to="/">
            <button className='btn btn-warning mb-5 rounded-pill ms-5'> Regresar <i className="fa-solid fa-people-pulling fs-3 ms-2"></i></button>
            </Link>
            </div>

            
        </div>
    )
}