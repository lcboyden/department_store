import React, { useState, useEffect } from "react";
import Axios from "axios";
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
  function renderItems() {
    return items.map((i) => (
      <div>
        <h1>{i.name}</h1>
        <p>{i.price}</p>
      </div>
    ));
  }
  return (
    <div>
      <h1>{department.name}</h1>
      {props.match.params.id} - {department.id}
      <div onClick={props.history.goBack}>go back</div>
      {renderItems()}
    </div>
  );
}
