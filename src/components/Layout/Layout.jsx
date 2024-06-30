import Footer from "./Footer";
import Header from "./Header";
import Menu from "../../pages/Manu";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div> {children} </div>
      <Menu />
      <Footer />
    </>
  );
};

export default Layout;
