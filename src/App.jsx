import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import LoginPage from "./Page/User/Auth/LoginPage";
import RegisterPage from "./Page/User/Auth/RegisterPage";

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
