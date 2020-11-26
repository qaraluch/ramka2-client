// import Link from "next/link";

export default function PelnyWidok({ imgPath, imgAlt }) {
  return (
    <div className="w-auto h-full p-2 antialiased bg-gray-700">
      <div className="flex items-center justify-center">
        <img
          className="object-cover h-screen p-px"
          src={imgPath}
          alt={imgAlt}
        />
      </div>
    </div>
  );
}
