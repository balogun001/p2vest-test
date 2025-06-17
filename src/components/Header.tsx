"use client";

import { Button } from "@ui/Button";
import { SideDrawer } from "@ui/SideDrawer";
import { Title } from "@ui/Text";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { Control, Logo } from "src/assets/images";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="w-full">
      <nav className="w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <span className="lg:hidden" onClick={toggleSidebar}>
          <HiMenuAlt4 className="text-white text-3xl" />
        </span>

        <Title className="!text-white !text-6xl">Send. Shop. Spend</Title>

        <Image src={Control} alt="control" />

        <SideDrawer open={sidebarOpen} onClose={toggleSidebar} position="right">
          <div className="flex flex-col  gap-4 text-p1 mx-2 mt-10">
            <Link href="/">
              <Button size="md" kinds="normal" className="bg-white">
                P2Vest
              </Button>
            </Link>
          </div>
        </SideDrawer>
      </nav>
    </header>
  );
}

export default Header;
