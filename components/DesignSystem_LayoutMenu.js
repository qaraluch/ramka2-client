import Link from "next/link";
import ColorBox from "../components/DesignSystem_ColorBox";

export default function DesignSystem_LayoutMenu() {
  return (
    <>
      <div className="flex justify-center p-4 bg-white rounded shadow">
        <h1 className="text-3xl font-bold leading-normal text-cyan-300">
          RAMKA 2 - DESIGN SYSTEM PAGE
        </h1>
      </div>
      <div className="w-auto h-full h-screen p-8 mt-4 antialiased bg-white">
        {/* menu */}
        <div className="flex flex-col items-center justify-center p-12">
          <h1 className="text-lg font-bold leading-normal text-black">
            List of components:
          </h1>
          <div className="flex flex-col p-6 mt-10 bg-white border rounded w-90 ">
            <Link
              href="/design-system/miniaturka"
              className="block px-4 py-2 text-gray-200 rounded transition-colors duration-100 text-normal hover:bg-gray-400 hover:text-white"
            >
              miniaturka
            </Link>
            <div className="py-2">
              <hr></hr>
            </div>
            <Link
              href="/design-system/pelnywidok"
              className="block px-4 py-2 text-gray-200 rounded transition-colors duration-100 text-normal hover:bg-gray-400 hover:text-white"
            >
              pelnyWidok
            </Link>
          </div>
          <h1 className="mt-10 text-lg font-bold leading-normal text-black">
            Color palette:
          </h1>

          <div className="flex justify-center mt-10">
            <ColorBox hexValue="#1E2732" colorName="gunmetal" />
            <ColorBox hexValue="#EAEAEC" colorName="platinium" />
            <ColorBox hexValue="#02769A" colorName="cgblue" />
            <ColorBox hexValue="#FCA867" colorName="sandybrown" />
            <ColorBox hexValue="#67E8F9" colorName="cyan-300" />
          </div>
        </div>
      </div>
    </>
  );
}
