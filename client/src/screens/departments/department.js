import React, { useState, useEffect } from "react";
import Axios from "axios";
import ItemForm from "./itemForm";

export default function Department(props) {
  const [department, setDepartment] = useState({});
  const [items, setItems] = useState([]);
  useEffect(() => {
    // axios call to deparment show
    Axios.get(`/api/departments/${props.match.params.id}`)
      .then((res) => {
        setDepartment(res.data);
        Axios.get(`/api/departments/${res.data.id}/items`).then((res) => {
          setItems(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function deleteItem(id) {
    console.log(id);
    const res = await Axios.delete(
      `/api/departments/${department.id}/items/${id}`
    );
    const filteredItems = items.filter((i) => i.id !== res.data.id);
    setItems(filteredItems);
  }
  function handleAdd(itemObj) {
    // add stuff
    console.log("handleAdd called");
    setItems([itemObj, ...items]);
  }
  function handleEdit(editObj) {
    // add stuff
    console.log("handleEdit called");
    console.log(editObj); //Success!
    setItems(items.map((i) => (i.id === editObj.id ? editObj : i)));
  }

  function renderItems() {
    return items.map((i) => (
      <div
        style={{
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #777",
        }}
      >
        <h6 style={{ margin: 0 }}>{i.name}</h6>
        <p>{i.price}</p>
        <button onClick={() => deleteItem(i.id)}>delete</button>
        <ItemForm did={department.id} edit={handleEdit} {...i} />
      </div>
    ));
  }
  return (
    <div>
      <h1>{department.name}</h1>
      <ItemForm did={department.id} add={handleAdd} />
      {props.match.params.id} - {department.id}
      <div onClick={props.history.goBack}>go back</div>
      {renderItems()}
    </div>
  );
}