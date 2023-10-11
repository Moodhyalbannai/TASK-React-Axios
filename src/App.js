import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import NotFound from "./components/NotFound";

import instance from "./api";
import { useEffect } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  // const callAPI = async () => {
  //   const res = await getAllPets();
  //   setPets(res);

  // useEffect(() => {
  //   callAPI();
  // }, []);

  return (
    <div className="font-mono">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/pets" Component={PetList} />
        <Route path="/pets/:petId" Component={PetDetail} />
        <Route path="/*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
