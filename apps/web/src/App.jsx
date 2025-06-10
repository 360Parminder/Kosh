import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/auth/Loginform";
import ComingSoon from "./pages/ComingSoon";
import SignupForm from "./components/auth/SignupForm";

const App = () => {
  return (
    // <ComingSoon />
    // <LoginForm />
    <>
    <Routes>
      {/* <Route path="/" element={<ComingSoon />} /> */}
      <Route path="/" element={<LoginForm />} />
      <Route path='/SignUp' element={<SignupForm />} />
      {/* Add more routes as needed */}
    </Routes>
    
    </>
  );
}

export default App;