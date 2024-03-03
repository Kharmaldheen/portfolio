import { Route, Routes, useLocation } from "react-router-dom";

import Applayout from "./Applayout";
import HomePage from "./Components/pages/HomePage";
import AboutPage from "./Components/pages/AboutPage";
import ProjectPage from "./Components/pages/ProjectPage";
import SkillsPage from "./Components/pages/SkillsPage";
import ContactPage from "./Components/pages/ContactPage";
import { AnimatePresence } from "framer-motion";
import Header from "./Components/Header";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route element={<Applayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );

  // const router = createBrowserRouter([
  //   {
  //     element: <Applayout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <HomePage />,
  //       },
  //       { path: "/about", element: <AboutPage /> },
  //       { path: "/skills", element: <SkillsPage /> },
  //       { path: "/projects", element: <ProjectPage /> },
  //       { path: "/contact", element: <ContactPage /> },
  //     ],
  //   },
  // ]);

  // return <RouterProvider router={router} />;
}

export default App;
