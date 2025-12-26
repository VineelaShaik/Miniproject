import Home from "./pages/Home";
import AddFood from "./pages/AddFood";
import RequestFood from "./pages/RequestFood";
import ApproveRequest from "./pages/ApproveRequest";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AddFood />
      <RequestFood />
      <ApproveRequest />
    </>
  );
}

export default App;
