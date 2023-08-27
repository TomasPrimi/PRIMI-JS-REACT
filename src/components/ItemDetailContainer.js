import { productos } from "./ItemListContainer";
function ItemDetailContainer() {
    return (
        <>
          <div className="card-detail_main">
            <div className="card-detail_img">
              <img src={productos.imagen} alt={productos.nombre} />
            </div>
            <div className="card-detail_detail">
              <h1>
                {productos.nombre}
              </h1>
              <h2 className="priceTag">$ {productos.precio}</h2>
              <small>{productos.editorial}</small>
            </div>
          </div>
        </>
      );
    }
export default ItemDetailContainer;