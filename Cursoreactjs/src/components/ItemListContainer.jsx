import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("Category", "==", id)) : itemsCollection;
        console.log(q)
        getDocs(q).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(documento => ({ id: documento.id, ...documento.data() })));
                setLoading(false);
            } else {
                console.log("Error! no existe la coleccion 'items'")
            }
        })
    }, [id])

    return (
        <>

            <div className="container my-5 ">
                <div className="row ">
                    {items.map(item => (
                        <div key={item.id} className="col-md- mb-3 w-25  ">
                            <div className="card border-3 border-black p-5 ">
                                <Link to={"/item/" + item.id} >
                                    <img src={item.Image} className="card-img-top" style={{ width: '100%', height: '100%', maxHeight: '200px', minHeight: '176px', objectFit: 'contain' }} alt={item.Title} />
                                </Link>
                                <div className="card-body">
                                    <p className="card-text"><b>{item.Title}</b></p>
                                    <p className="card-text"><b>$ {item.Price}</b></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer