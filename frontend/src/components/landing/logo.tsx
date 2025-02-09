import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href='/' className="flex items-center space-x-3">
      {/* Logo Icon */}
      <Image
        src="/logo.svg" // Replace with your logo image path
        alt="TrendSpark Logo"
        width={40}
        height={40}
        className="object-contain rounded-[5px] overflow-hidden"
      />
      {/* Logo Title */}
      <span className="text-2xl font-bold bg-clip-text text-transparent text-white">
        Trend<span className="text-indigo-500">Spark</span>
      </span>
    </Link>
  );
};

export default Logo;
