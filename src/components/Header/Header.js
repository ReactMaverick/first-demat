import { getImgPath } from "@/utils/images";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="custom-container">
        <nav>
          <div>
            <Image
              src={getImgPath("/images/logo/first-demat-logo.png")}
              alt="First Demat Logo Image"
              width={1258}
              height={228}
              className="w-[220px] h-[40px]"
            />
          </div>
          <div></div>
          <button></button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
