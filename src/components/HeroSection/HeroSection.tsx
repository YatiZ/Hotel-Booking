
import React from "react";
import Image from "next/image";
import ClientComponent from "./ClientComponent";
import { heading1, section2 } from "./ServerComponent";


const HeroSection = () => {
  return (
    <div>
      <ClientComponent heading1={heading1} section2={section2} />
  

    </div>
  );
};

export default HeroSection;
