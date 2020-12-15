import Link from "next/link";
import ColorBox from "../components/DesignSystem_ColorBox";
import IconPhotograph from "../components/Icons/IconPhotograph";
import IconCollection from "../components/Icons/IconCollection";
import IconColorSwatch from "../components/Icons/IconColorSwatch";
import IconX from "../components/Icons/IconX";
import IconLogo from "../components/Icons/IconLogo";
import IconInformationCircle from "../components/Icons/IconInformationCircle";
import ButtonListOfComponentsDesignSystem from "../components/Buttons/ButtonListOfComponentsDesignSystem";
import {
  IconChevronUp,
  IconChevronRight,
  IconChevronDown,
  IconChevronLeft,
} from "../components/Icons/IconChevron";

export default function DesignSystem_LayoutMenu() {
  return (
    <>
      <div className="flex items-center justify-between w-full p-4 bg-white rounded shadow">
        <div className="w-1/3">
          <Link href="/">
            <a className="flex text-gray-700 hover:text-gray-200">
              <IconChevronLeft />
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
        <div className="flex flex-col items-center p-12">
          <h1 className="text-lg font-bold leading-normal text-black">
            List of components:
          </h1>

          <ButtonListOfComponentsDesignSystem
            name="buttons"
            href="/design-system/buttons"
          />

          <ButtonListOfComponentsDesignSystem
            name="infoMetadanych"
            href="/design-system/infometadanych"
          />

          <ButtonListOfComponentsDesignSystem
            name="pelnyWidok"
            href="/design-system/pelnywidok"
          />

          <ButtonListOfComponentsDesignSystem
            name="mozajka"
            href="/design-system/mozajka"
          />

          <ButtonListOfComponentsDesignSystem
            name="miniaturka"
            href="/design-system/miniaturka"
          />

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
              <IconLogo color="cgblue" size="8" />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/IconLogo.js; default props: color=black
                size=8
              </p>
            </div>

            <div className="flex mt-5">
              <IconPhotograph color="cgblue" size="6" />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/IconPhotograph.js; default props: color=black
                size=6
              </p>
            </div>

            <div className="flex mt-5">
              <IconCollection color="cgblue" size="6" />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/IconCollection.js; default props: color=black
                size=6
              </p>
            </div>

            <div className="flex mt-5">
              <IconColorSwatch color="cgblue" size="6" />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/IconColorSwatch.js; default props:
                color=black size=6
              </p>
            </div>

            <div className="flex mt-5">
              <IconX color="cgblue" size="6" />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/IconX.js; default props: color=black size=6
              </p>
            </div>

            <div className="flex mt-5">
              <IconChevronLeft color="cgblue" size="6" />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/IconChevronLeft.js; default props:
                color=black size=6
              </p>
            </div>

            <div className="flex mt-5">
              <IconChevronRight color="cgblue" size="6" />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/IconChevronRight.js; default props:
                color=black size=6
              </p>
            </div>

            <div className="flex mt-5">
              <IconChevronUp color="cgblue" size="6" />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/IconChevronUp.js; default props: color=black
                size=6
              </p>
            </div>

            <div className="flex mt-5">
              <IconChevronDown color="cgblue" size="6" />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/IconChevronDown.js; default props:
                color=black size=6
              </p>
            </div>

            <div className="flex mt-5">
              <IconInformationCircle color="cgblue" size="6" />
              <p className="ml-2 font-mono text-base font-normal text-gray-500">
                - components/Icons/IconInformationCircle.js; default props:
                color=black size=6
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
