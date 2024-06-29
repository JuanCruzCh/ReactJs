import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
    return(
      
<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open minicart">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ShoppingCartIcon/>
               
              </IconButton>
             
    
            </Tooltip>
            
          </Box>

    )
}




export default CartWidget