import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import Axios from "axios";

export default function ItemForm(props) {
  const [name, setName] = useState(props.name ? props.name : "");
  const [price, setPrice] = useState(props.price ? props.price : "");

  async function handleSubmit() {
    if (props.id) {
      console.log("we should edit");

      //{ id: props.id, name: name, price: price }
      props.edit();
    } else {
      const res = await Axios.post(`/api/departments/${props.did}/items`, {
        name: name,
        price: price,
      });
      props.add(res.data);
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group width={"equal"}>
        <Form.Input
          label="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Input
          label="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Form.Button>add</Form.Button>
      </Form.Group>
    </Form>
  );
}