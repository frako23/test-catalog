import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/AppContext";

export const Navbar = ( ) =>{
  const { store, actions } = useContext(Context);
 const  totalCount  = store.cart.length
 console.log(totalCount);

  return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top pt-2" data-bs-theme="dark">
      <div className="container-fluid navbar-2">
        <Link className="text-decoration-none" to={'/'}>
        <span className="navbar-brand text-white ms-2 text-wrap">Venta de pastillas de freno</span>
        </Link>
        
          <ul className="navbar-nav  ">
            <li className="nav-item ">
              <Link className="ms-2" to="/cart">
              <button className="btn btn-primary rounded-pill text-white position-relative" style={{padding:" 5px  15px"}} aria-current="page" >
                <i className="fa-solid fa-cart-shopping ms-1"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalCount}
                </span>
              </button>
              </Link>
            </li>
          </ul>
        
      </div>
    </nav>
    </>
 )
}