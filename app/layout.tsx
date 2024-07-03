import { FC, ReactNode } from "react";
import Navbar from "./components/Navbar";
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
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
