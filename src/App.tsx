import LandingPage from "./pages/landingPage";
import PackageDetails from "./pages/packageDetails";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import Layout from "./components/Layout/FormLayout.tsx";
import BusinessDetails from "./pages/forms/ruby/BusinessDetails";
import ContactDetails from "./pages/forms/ruby/ContactDetails";
import AttachCatalog from "./pages/forms/ruby/AttachCatalog";
import BusinessRegistration from "./pages/forms/ruby/BusinessRegistration";
import { Routes, Route, Navigate } from "react-router";

const App = () => {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/Packages/:title" element={<PackageDetails />} />
        <Route path="/Packages/:title/form" element={<Layout />}>
          <Route index element={<Navigate to="business-details" replace />} />
          <Route path="business-details" element={<BusinessDetails />} />
          <Route path="contact-details" element={<ContactDetails />} />
          <Route path="attach-catalog" element={<AttachCatalog />} />
          <Route
            path="business-registration"
            element={<BusinessRegistration />}
          />
        </Route>
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
