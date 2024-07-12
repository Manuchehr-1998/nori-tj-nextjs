import { FC, ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../styles/globals.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ru">
      <head>
        <title>My App</title>
      </head>
      <body className="bg-[#190421]">
        <div>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
