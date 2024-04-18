import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Billing from "./pages/billing";

function App() {
  return (
    <div className="mx-auto xs:min-w-[374px] xs:max-w-[375px] lg:min-w-[1300px] lg:max-w-[1440px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/billing" element={ <Billing/>}/>

        {/* <Route path="/" element={ <Home/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
