import { NextPage } from "next";
import { ReactNode } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";

const Header: NextPage = (): ReactNode => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <Link href="/">Logo</Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
