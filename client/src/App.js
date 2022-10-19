import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/Notfound";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Unauthorized from "./pages/Unauthorized";
import RequireAuth from "./pages/RequireAuth";

import NewUser from "./pages/NewUser";
import InputSpk from "./pages/InputSpk";

// const Roles = { admin:'admin', user:'user' };

function App() {
  return (
    <Routes>
      >
      <Route path="/" element={<Layout />}>
        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route
          element={<RequireAuth allowedRoles={["ROLE_USER", "ROLE_ADMIN"]} />}
        >
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Route>
        {/* PRIVATE ROUTE */}
        <Route element={<RequireAuth allowedRoles={["ROLE_ADMIN"]} />}>
          <Route path="/inputspk" element={<InputSpk />} />
          <Route path="/daftarbaru" element={<NewUser />} />
        </Route>

        {/* catch all */}
        <Route path="/*" element={<NotFound />} />
      </Route>
      {/* </div> */}
    </Routes>

    // <Router>
    //   <div className="flex flex-col justify-between h-screen">
    //     <Navbar />
    //     <main className="container mx-auto  pb-12">
    //       <Routes>
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/daftarbaru" element={<NewUser />} />
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/notfound" element={<NotFound />} />
    //         <Route path="/*" element={<NotFound />} />
    //         <Route path="/inputspk" element={<InputSpk />} />
    //       </Routes>
    //     </main>
    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
