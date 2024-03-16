import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Nav currentPage={currentPage} />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}
