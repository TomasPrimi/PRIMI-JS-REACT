import { products } from "./ItemListContainer/ItemListContainer";
function ItemDetailContainer() {
    return (
        <>
          <div className="card-detail_main">
            <div className="card-detail_img">
              <img src={products.imagen} alt={products.nombre} />
            </div>
            <div className="card-detail_detail">
              <h1>
                {products.nombre}
              </h1>
              <h2 className="priceTag">$ {products.precio}</h2>
              <small>{products.editorial}</small>
            </div>
          </div>
        </>
      );
    }
export default ItemDetailContainer;