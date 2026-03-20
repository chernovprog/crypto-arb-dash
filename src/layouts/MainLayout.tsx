import { Outlet } from "react-router-dom";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
