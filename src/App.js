import "tailwindcss/tailwind.css";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PublicHome from "./pages/PublicHome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<PublicHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
