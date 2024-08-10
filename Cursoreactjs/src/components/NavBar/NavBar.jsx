import * as React from 'react';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';
const pages = ['Productos', 'category'];


function NavBar() {


  const [setAnchorElUser] = React.useState(null);

  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
      <Link className="navbar-brand fs 1" to={"/"}>Legoland</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-decoration-underline fs-4" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item " aria-current="page">
              <p>
                <button className="btn text-black text-decoration-underline fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                  Categorias
                </button>
              </p>
              <div style={{ minHeight: '120px' }} className="z-1 position-absolute rounded-2" >
                <div className="collapse multi-collapse" id="collapseWidthExample">
                  <div className="card card-body" style={{ width: '300px' }}>
                    <ul className="list-group list-group-flush text-md-end text-uppercase">
                      <p>
                        <Link className="text-black fw-bolder" to={"/category/Architecture"}>Architecture</Link>
                      </p>
                      <p>
                      <Link className="text-black fw-bolder" to={"/category/IndianaJones"}>Indiana Jones</Link>
                      </p>
                      <p>
                      <Link className="text-black fw-bolder" to={"/category/LordOfTheRings"}>El Señor de los Anillos</Link>
                      </p>
                      <p>
                      <Link className="text-black fw-bolder" to={"/category/StarWars"}>Star Wars</Link>
                      </p>
                    </ul>
                  </div>
                </div>
              </div>

            </li>

          </ul>
        </div>
      <div >
        <CartWidget />
      </div>
      </div>
      <div>

      </div>

    </nav>

  )
}


export default NavBar;