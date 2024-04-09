import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-289.6px)] flex flex-col justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
