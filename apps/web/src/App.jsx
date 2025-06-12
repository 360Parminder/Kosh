import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
// import ComingSoon from "./pages/ComingSoon";
import SignupForm from "./components/auth/SignupForm";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import ScrollToTop from "./utils/ScrollToTop";
import FeaturePage from "./pages/FeaturePage";
import Contact from "./pages/policies/Contact";

const App = () => {
  return (
    // <ComingSoon />
    // <LoginForm />
    <>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/" element={<ComingSoon />} /> */}
        <Route path="/" element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path="features" element={<FeaturePage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        <Route path="*" element={
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <div className="text-xl">
              Page Not Found
            </div>
            <div className="mt-4">
              <a href="/" className="text-blue-500 hover:underline">Go to Home</a>
            </div>
          </div>
        } />
        {/* Add more routes as needed */}
      </Routes>

    </>
  );
}


export default App;