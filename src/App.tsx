import LandingPage from './pages/landingPage'
// import Packages from "./components/packages/packages.tsx"
import PackageDetails from "./pages/packageDetails"
import { Routes, Route } from "react-router";
// import NavBar from './components/navBar.tsx';
import Header from './components/header/header.tsx';
import Footer from './components/footer/footer.tsx';

const App = () => {
  return (
    <main className='App'>
      <Header />
      <Routes>
        <Route index element={<LandingPage />} />
        {/* <Route path="/Packages" element={<Packages />} /> */}
        <Route path="/Packages/:title" element={<PackageDetails />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App