import Image from "next/image";
import boyKisser from "../../../public/boykisser.gif";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-2 justify-center">
        <Image src={boyKisser} width={256} height={256} alt="boykisser" />
        <h1 className="font-bold text-3xl">Loading...</h1>
      </div>
    </div>
  );
}