import React from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  ///
  const num = 1;

  const links = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Chi Siamo",
      link: "/chi-siamo",
    },
    {
      name: "Dove Siamo",
      link: "/dove-siamo",
    },
  ];

  return (
    <div className={styles.container}>
      <div className="Logo">Logo</div>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <div key={index + 1}>
              <a href={item.link}>{item.name}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
