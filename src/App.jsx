import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import Video from "./pages/video/Video";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        // `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=america&videoCategoryId=0&key=${
        //   import.meta.env.VITE_API_BASE_URL
        // } `
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoId/:categoryId" element={<Video />} />
      </Routes>
      <Video />
    </>
  );
}

export default App;
