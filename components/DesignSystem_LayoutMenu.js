import Link from "next/link";
import ColorBox from "../components/DesignSystem_ColorBox";
import PhotographIcon from "../components/Icons/PhotographIcon";
import CollectionIcon from "../components/Icons/CollectionIcon";
import ColorSwatchIcon from "../components/Icons/ColorSwatchIcon";
import XIcon from "../components/Icons/XIcon";
import InformationCircleIcon from "../components/Icons/InformationCircleIcon";
import {
  ChevronUpIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
} from "../components/Icons/ChevronIcons";

export default function DesignSystem_LayoutMenu() {
  return (
    <>
      <div className="flex items-center justify-between w-full p-4 bg-white rounded shadow">
        <div className="w-1/3">
          <Link href="/">
            <a className="flex text-gray-700 hover:text-gray-200">
              <ChevronLeftIcon />
              Home Page
            </a>
          </Link>
        </div>
        <div className="w-1/3 text-center ">
          <h1 className="text-3xl font-bold leading-normal text-cyan-300">
            RAMKA 2 - DESIGN SYSTEM PAGE
          </h1>
        </div>
        <div className="w-1/3"></div>
      </div>
      <div className="w-auto h-auto p-8 mt-4 bg-white">
        <div className="flex flex-col items-center justify-center p-12">
          <h1 className="text-lg font-bold leading-normal text-black">
            List of components:
          </h1>
          <div className="flex flex-col p-6 mt-10 bg-white border rounded w-90 ">
            <Link href="/design-system/miniaturka">
              <a className="px-4 py-2 text-gray-200 rounded hover:text-gray-800 text-normal">
                miniaturka
              </a>
            </Link>
            <div className="py-2">
              <hr></hr>
            </div>
            <Link href="/design-system/pelnywidok">
              <a className="px-4 py-2 text-gray-200 rounded hover:text-gray-800 text-normal">
                pelnyWidok
              </a>
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

          <h1 className="mt-10 text-lg font-bold leading-normal text-black">
            Fonts families loaded:
          </h1>
          <h1 className="mt-6 text-cgblue">
            Sans font (Roboto) - h1 header example by Tailwind&apos;s font-sans
          </h1>
          <p className="mt-6 font-mono text-cgblue">
            Mono font (Inconsolata)- p paragraph example by Tailwind&apos;s
            font-mono
          </p>
          <h1 className="mt-6 font-serif text-cgblue">
            Serif font - h1 header example by default Tailwind&apos;s font-serif
          </h1>
          <h1 className="mt-6 font-exo text-cgblue">
            Exo font - h1 header example by Tailwind; use by font-exo
          </h1>

          <h1 className="mt-10 text-lg font-bold leading-normal text-black">
            Icons:
          </h1>
          <div className="flex flex-col">
            <div className="flex mt-5">
              <PhotographIcon />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/PhotographIcon.js
              </p>
            </div>

            <div className="flex mt-5">
              <CollectionIcon />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/CollectionIcon.js
              </p>
            </div>

            <div className="flex mt-5">
              <ColorSwatchIcon />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/ColorSwatchIcon.js
              </p>
            </div>

            <div className="flex mt-5">
              <XIcon />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/XIcon.js
              </p>
            </div>

            <div className="flex mt-5">
              <ChevronLeftIcon />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/ChevronIcons.js as ChevronLeftIcon component
              </p>
            </div>

            <div className="flex mt-5">
              <ChevronRightIcon />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/ChevronIcons.js as ChevronRightIcon component
              </p>
            </div>

            <div className="flex mt-5">
              <ChevronUpIcon />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/ChevronIcons.js as ChevronUpIcon component
              </p>
            </div>

            <div className="flex mt-5">
              <ChevronDownIcon />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/ChevronIcons.js as ChevronDownIcon component
              </p>
            </div>

            <div className="flex mt-5">
              <InformationCircleIcon />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/InformationCircleIcon.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
