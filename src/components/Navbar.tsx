"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="relative w-full flex items-center justify-center text-white">
      <div className="fixed top-0 w-full z-[1000] shadow-md shadow-purple-500 bg-black">
        <div className="flex justify-center px-5">
          {/* <img src="/portfolio.png" width={100} height={100} alt="" /> */}
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="HOME">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/">Home</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="PROJECTS">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Blog App"
                  href="https://github.com/AshutoshRajGupta/flutter-clean-architecture-blogApp"
                  src="/blog.png"
                  description="This Flutter project demonstrates a clean architecture approach to implementing a blog app "
                />
                <ProductItem
                  title="Ecommerce Website"
                  href="https://github.com/AshutoshRajGupta/Ecommerce-Shopping"
                  src="/watch_ecommerce.png"
                  description="Experience seamless shopping on our MERN stack watch e-commerce website! ."
                />
                <ProductItem
                  title="Aceternity With React"
                  href="https://github.com/AshutoshRajGupta/Aceternity-UI-React"
                  src="/aceternity.png"
                  description="Creating a animation website in react where we have several ui with acertenity "
                />
                <ProductItem
                  title="Cryptdrive"
                  href="https://github.com/AshutoshRajGupta/cryptdrive_version_2"
                  src="/cryptdrive.png"
                  description="The project aims to create a decentralized document storage system using the MERN "
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="SOCIAL-LINKS">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="https://github.com/AshutoshRajGupta" target="_blank">Github</HoveredLink>
                <HoveredLink href="https://www.linkedin.com/in/ashutosh-raj-gupta-18230820b/" target="_blank">Linkeldn</HoveredLink>
                <HoveredLink href="https://ashutoshrajgupta.github.io/Me/" target="_blank">Portfolio</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
