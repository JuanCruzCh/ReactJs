import { useCallback, useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext"
import CartWidget from "./CartWidget"

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }
console.log(item)
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={item.Image} alt={item.Title} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1 className="text-decoration-underline">{item.Title}</h1>
                    <p><b>${item.Price}</b></p>
                    <p ClassName="text-break" >{item.Description}</p>
                    <div className="alert alert-dark " role="alert">Hasta 6 cuotas sin interés con todos los bancos</div>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail