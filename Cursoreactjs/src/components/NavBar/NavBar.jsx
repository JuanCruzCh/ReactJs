import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const pages = ['Productos', 'Categorias', 'Ofertas'];


function NavBar() {

  
  const [setAnchorElUser] = React.useState(null);
  

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return(
  <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand " href="/">Legoland</a>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item " aria-current="page">
  <p>
  <button class="btn text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Categorias
  </button>
</p>
<div style={{minHeight:'120px'}} className="z-1 position-absolute rounded-2" >
  <div className="collapse multi-collapse" id="collapseWidthExample">
    <div className="card card-body" style={{width:'300px'}}>
      <ul className="list-group list-group-flush text-md-end text-uppercase">
        <p>
          <a className="text-black fw-bolder" href="/category/Architecture">Architecture</a>
        </p>
        <p>
          <a className="text-black fw-bolder" href="/category/IndianaJones">Indiana Jones</a>
        </p>
        <p>
          <a className="text-black fw-bolder" href="/category/LordOfTheRings">El Señor de los Anillos</a>
        </p>
        <p>
          <a className="text-black fw-bolder" href="/category/StarWars">Star Wars</a>
        </p>
      </ul>
    </div>
  </div>
</div>
    
        </li>
        <li className="nav-item k">
          <a className="nav-link text-black" href="/">Ofertas</a>
        </li>
      </ul>
    </div>
  </div>
  <div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open minicart">
                <Badge color="secondary" badgeContent={5}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ShoppingCartIcon/>
              </IconButton>
</Badge>
            </Tooltip>
            
          </Box>
  </div>
  
</nav>

  )}

  
export default NavBar;