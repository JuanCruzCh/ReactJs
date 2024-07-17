import { useEffect, useState } from "react"
import arrayProductos from "../assets/Productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category == id) : arrayProductos)
            }, 2000)
        })

        promesa.then(response => {
            setItems(response)
        })
    }, [id])

    return (
        <>
        
            <div className="container my-5">
                <div className="row">
                    <h1>{id}</h1>
                    <ItemList items={items} />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer