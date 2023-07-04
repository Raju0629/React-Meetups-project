import { Routes, Route } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      
      <Routes>
          <Route path="/" element={<AllMeetupPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
      
    </Layout>
  );
}

export default App;
