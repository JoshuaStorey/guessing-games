import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <div
      id="main-container"
      className=" min-h-screen h-screen bg-gradient-to-r from-violet-500 to-purple-500 p-16 flex flex-col items-center text-center"
    >
      <Image
        src="/images/whitelogo-no-background.png"
        width={128}
        height={128}
        alt="Logo"
      />
      <p className="text-6xl font-medium p-6 pb-20 bg-gradient-to-r from-gray-900 to-stone-700 bg-clip-text text-transparent ">
        Guessing Games
      </p>
      <div className="flex flex-col md:flex-row">
        <Link href="/HexGuesser" className="pr-8">
          <div className="p-20 outline-primary text-primary font-bold outline outline-1 rounded-xl ">
            <p className="text-5xl pb-6">HEX Guesser</p>
            <p>Test your design skills</p>
            <p>Guess the correct color out of the 3 options!</p>
          </div>
        </Link>
        <Link href="/" className="pr-8">
          <div className="p-20 outline-primary text-primary font-bold outline outline-1 rounded-xl ">
            <p className="text-5xl pb-6">Game Slot</p>
            <p>Coming Soon</p>
            <p>Coming Soon!</p>
          </div>
        </Link>
        <Link href="/" className="pr-8">
          <div className="p-20 outline-primary text-primary font-bold outline outline-1 rounded-xl ">
            <p className="text-5xl pb-6">Game Slot</p>
            <p>Coming Soon</p>
            <p>Coming Soon!</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
