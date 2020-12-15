import Miniaturka from "./Miniaturka";
import Link from "next/link";
import IconCollection from "../components/Icons/IconCollection";
import { IconChevronLeft } from "../components/Icons/IconChevron";
import ButtonLogo from "../components/Buttons/ButtonLogo";

// Mock
const xTimes = 20;
const imgSubset = ["/img-dummy-150.png"];
// Array util - repeat array x times
const imgSet = Array.apply(null, { length: xTimes * imgSubset.length }).map(
  (_, idx) => imgSubset[idx % imgSubset.length]
);

export default function Mozajka() {
  return (
    <>
      {/* musi być bo w DS_LayoutDisplay jest nad tym flex */}
      {/* część która będzie layoutem*/}
      <div className="w-full h-screen bg-gray-700 ">
        {/* navigation bar */}
        <nav className="flex items-center justify-between p-2 bg-platinium">
          <div className="w-1/3 m-1">
            <ButtonLogo href="/" color="gray-400" colorHover="cyan-500">
              <IconChevronLeft color="gray-300" />
            </ButtonLogo>
          </div>
          <div className="w-1/5 m-1 font-exo">
            <div className="flex m-2 text-2xl border-cyan-500 text-cgblue">
              <div className="w-1/3"></div>
              <div className="flex items-center w-1/3">
                <IconCollection color="gray-400" />
                <h1 className="ml-2">All</h1>
              </div>
              <div className="w-1/3"></div>
            </div>
          </div>
          <div className="w-1/3 m-1 text-right"></div>
        </nav>
        {/* display images */}
        <div className="p-8 bg-gray-700 ">
          <div className="flex flex-wrap justify-left">
            {imgSet.map((item, idx) => (
              <Miniaturka
                key={idx}
                imgPath={item}
                imgAlt="terefere"
                href="/design-system/pelnywidok"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
