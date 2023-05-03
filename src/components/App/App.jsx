import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  MainPage,
  CharactersPage,
  SingleCharacterPage,
  MoviePage,
  SingleMoviePage,
  NotFoundPage,
} from "../../pages";
import Header from "../ui/Header";
import SideBar from "../ui/Sidebar";
import Layout from "../ui/Layout";
import "../App/app.css"

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  function openSidebar() {
    setOpenSideBar(true);
  }
  function closeSidebar() {
    setOpenSideBar(false);
  }

  return (
    <div className="App">
      <Header openSidebar={openSidebar} />
      <Container maxWidth="md" sx={{ mt: "20px" }}>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/characters/:id" element={<SingleCharacterPage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/movie/:id" element={<SingleMoviePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Container>
      <SideBar open={openSideBar} close={closeSidebar} />
    </div>
  );
}
export default App;