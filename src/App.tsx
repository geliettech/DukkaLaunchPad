import LandingPage from "./pages/landingPage";
import PackageDetails from "./pages/packageDetails";
import { Routes, Route } from "react-router";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import MultiStepForm from "./pages/forms/multiform.tsx";

const App = () => {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route index element={<LandingPage />} />
        {/* <Route path="/Packages" element={<Packages />} /> */}
        <Route path="/Packages/:title" element={<PackageDetails />} />
        <Route path="/multiform"  element={<MultiStepForm />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
