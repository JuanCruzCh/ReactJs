import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <div className="col-md- mb-3 w-25 ">
            <div className="card border-3 border-black p-2">
                <Link to={"/item/" + item.id} >
                    <img src={item.image} className="card-img-top" style={ {width:'100%',height:'100%', maxHeight:'200px', minHeight:'176px', objectFit:'contain'} } alt={item.Title} />
                </Link>
                <div className="card-body">
                    <p className="card-text"><b>{item.Title}</b></p>
                    <p className="card-text"><b>$ {item.Price}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Item