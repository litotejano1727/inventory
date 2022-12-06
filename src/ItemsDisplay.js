import "./App.css";
import handleDeleteClick from "./components/handleDeleteClick";
import handleEdit from "./components/handleEdit";

function ItemsDisplay(props) {
  const showItem = (item) => {
    return (
      <tr key="{item}">
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
        <td>
          <button className="btn btn-warning" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={handleDeleteClick}>
            Delete
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="col-1">
                ID
              </th>
              <th scope="col" className="col-2">
                Name
              </th>
              <th scope="col" className="col-2">
                Price
              </th>
              <th scope="col" className="col-2">
                Type
              </th>
              <th scope="col" className="col-1">
                Brand
              </th>
              <th scope="col" className="col-1 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{props.items.map(showItem)}</tbody>
        </table>
      </div>
    </div>
  );
}
export default ItemsDisplay;
