import { useState } from "react";
import { addFood } from "../api";

function AddFood() {
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    expiryDate: "",
    restaurantId: 1
  });

  const submit = async () => {
    await addFood(form);
    alert("Food Added");
  };

  return (
    <div>
      <h3>Add Food (Restaurant)</h3>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Quantity" onChange={e => setForm({...form, quantity: e.target.value})} />
      <input type="date" onChange={e => setForm({...form, expiryDate: e.target.value})} />
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default AddFood;
