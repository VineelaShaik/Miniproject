import { useState } from "react";
import { createRequest } from "../api";

function RequestFood() {
  const [data, setData] = useState({
    foodItemId: "",
    ngoId: 1
  });

  const submit = async () => {
    await createRequest(data);
    alert("Request Sent");
  };

  return (
    <div>
      <h3>Request Food (NGO)</h3>
      <input placeholder="Food Item ID" onChange={e => setData({...data, foodItemId: e.target.value})} />
      <button onClick={submit}>Request</button>
    </div>
  );
}

export default RequestFood;
