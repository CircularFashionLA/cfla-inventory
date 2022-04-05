<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import "./App.css";
import InventoryForm from "./components/inventory-form/inventory-form.component";
import InventoryList from "./components/inventory-list/inventory-list.component";
import Nav from "./components/nav/nav.component";
=======
import { React } from "react";
import "./App.css";
import FormWraper from "./components/form-wrapper/form-wrapper.component";
>>>>>>> 0e9ac6d24e0ecf6127aebd54df40f1b8db0cd6f7

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Nav />
      <Routes>
        <Route path='/' element={<InventoryList />} />
        <Route path='/form' element={<InventoryForm />} />
      </Routes>
=======
      <FormWraper />
>>>>>>> 0e9ac6d24e0ecf6127aebd54df40f1b8db0cd6f7
    </div>
  );
}

export default App;
