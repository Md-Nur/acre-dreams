import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useUserAuth } from "./contexts/UserAuthProvider";

export default function App() {
  const { setUser, setLoading } = useUserAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-289.6px)] flex flex-col justify-center items-center">
        <Outlet />
        <Toaster position="top-right" reverseOrder={false} />
      </main>
      <Footer />
    </>
  );
}
