import LandingPage from './pages/landingPage'
import NavBar from "./components/NavBar/navBar.tsx"
import Packages from "./components/packages/packages.tsx"
import PackageDetails from "./pages/packageDetails"
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <main className='App'>
      <NavBar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/Packages/:title" element={<PackageDetails />} />
      </Routes>
    </main>
  )
}

export default App