import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import ComingSoon from "./pages/ComingSoon";
import SignupForm from "./components/auth/SignupForm";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    // <ComingSoon />
    // <LoginForm />
    <>
    <Routes>
      {/* <Route path="/" element={<ComingSoon />} /> */}
      <Route path="/" element={<RootLayout />} >
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      {/* Add more routes as needed */}
    </Routes>
    
    </>
  );
}

export default App;