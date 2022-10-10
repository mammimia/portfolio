import { ArrowLongUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="absolute bottom-5 right-8">
      <div className="flex items-center justify-center">
        {
          <Link href="#top">
            <ArrowLongUpIcon
              className="h-10 w-10 rounded-full filter text-gray-500
             hover:text-[#F7AB0A] cursor-pointer "
            />
          </Link>
        }
      </div>
    </footer>
  );
}

export default Footer;
