import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import { React, useState } from "react";
import "./App.css";
import InventoryList from "./components/inventory-list/inventory-list.component";
import FormWraper from "./components/form-wrapper/form-wrapper.component";
import ItemViewPage from "./components/item-view-page/item-view-page.component";

function App() {
  const [currentItem, setCurrentItem] = useState({});

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<InventoryList setCurrentItem={setCurrentItem} />}
        />
        <Route path="/form" element={<FormWraper />} />
        <Route path="/item" element={<ItemViewPage item={currentItem} />} />
      </Routes>
    </div>
  );
}

export default App;
