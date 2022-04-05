import { Routes, Route } from "react-router-dom";
import "./App.css";
import InventoryForm from "./components/inventory-form/inventory-form.component";
import InventoryList from "./components/inventory-list/inventory-list.component";
import Nav from "./components/nav/nav.component";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<InventoryList />} />
        <Route path='/form' element={<InventoryForm />} />
      </Routes>
    </div>
  );
}

export default App;
