import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const HexGuesser = ({}: Props) => {
  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-r from-zinc-200 to-slate-200">
      <Link href="/">
        <Image
          src="/images/whitelogo-no-background.png"
          width={128}
          height={128}
          alt="Logo"
        />
      </Link>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default HexGuesser;
