import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Resume = lazy(() => import("./pages/Resume.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const StylezoCaseStudy = lazy(() => import("./pages/case-studies/StylezoCaseStudy.jsx"));
const NoorCaseStudy = lazy(() => import("./pages/case-studies/NoorCaseStudy.jsx"));
const AdminApp = lazy(() => import("./admin/AdminApp.jsx"));

export default function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminApp />} />

      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects/noor" element={<NoorCaseStudy />} />
        <Route path="projects/stylezo" element={<StylezoCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
