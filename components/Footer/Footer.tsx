import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="sticky bottom-5 w-full">
      <div className="flex items-center justify-center">
        <Link href="#top">
          <HomeIcon
            className="h-10 w-10 rounded-full filter text-gray-500
             hover:text-[#F7AB0A] cursor-pointer"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
