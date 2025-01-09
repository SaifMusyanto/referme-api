import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components";
import LoginPage from './Page/User/Auth/LoginPage'
import RegisterPage from "./Page/User/Auth/RegisterPage";
import DashboardPage from './Page/User/Dashboard/DashboardPage'
import ProfilPage from './Page/User/SplashScreen/ProfilPage'

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <div>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboardUser" element={<DashboardPage />} />
            <Route path="/profilPage" element={<ProfilPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
