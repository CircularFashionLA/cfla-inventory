import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import { React } from "react";
import "./App.css";
import InventoryList from "./components/inventory-list/inventory-list.component";
import FormWraper from "./components/form-wrapper/form-wrapper.component";
import ImageInput from "./components/image-input/image-input.component";

function App() {
  return (
    <div className="App">
      <Nav />
      <ImageInput />
      <Routes>
        <Route path="/" element={<InventoryList />} />
        <Route path="/form" element={<FormWraper />} />
      </Routes>
    </div>
  );
}

export default App;
