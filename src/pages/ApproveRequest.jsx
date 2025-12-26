import { useState } from "react";
import { approveRequest } from "../api";

function ApproveRequest() {
  const [id, setId] = useState("");
  const [qty, setQty] = useState("");

  const submit = async () => {
    await approveRequest(id, qty);
    alert("Request Approved");
  };

  return (
    <div>
      <h3>Approve Request</h3>
      <input placeholder="Request ID" onChange={e => setId(e.target.value)} />
      <input placeholder="Quantity" onChange={e => setQty(e.target.value)} />
      <button onClick={submit}>Approve</button>
    </div>
  );
}

export default ApproveRequest;
