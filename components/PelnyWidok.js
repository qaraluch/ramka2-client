import Link from "next/link";
import IconCollection from "../components/Icons/IconCollection";
import IconX from "../components/Icons/IconX";
import IconInformationCircle from "../components/Icons/IconInformationCircle";
import ButtonX from "../components/Buttons/ButtonX";
import ButtonInfoMetadanych from "../components/Buttons/ButtonInfoMetadanych";
import {
  ButtonChevronLeft,
  ButtonChevronRight,
} from "../components/Buttons/ButtonChevron";

const imgPath = "/img-dummy-4464.png";

export default function PelnyWidok() {
  return (
    <>
      {/* musi być bo w DS_LayoutDisplay jest nad tym flex */}
      {/* część która będzie layoutem*/}
      <div className="w-full h-screen bg-gray-700">
        {/* navigation bar */}
        <nav className="flex items-center justify-between p-2 shadow-sm ">
          <div className="flex items-center h-8 m-1">
            <Link href="/design-system/mozajka">
              <a className="flex items-center text-gray-400 font-exo hover:text-gray-200 ">
                <IconCollection color="gray-400" />
                <h1 className="ml-2">All</h1>
              </a>
            </Link>
            <h1 className="ml-2 text-gray-400 font-exo">/</h1>
            <h2 className="ml-1 text-gray-200 font-exo">001</h2>
          </div>
          <div className="w-1/5 m-1"></div>
          <div className="flex items-center h-8 m-1 text-right">
            <div className="inline-block ">
              <ButtonX href="/design-system" />
            </div>
          </div>
        </nav>
        {/* display images */}
        <div className="w-auto">
          <nav className="flex items-center justify-between p-4 m-2">
            <div className="m-1">
              <ButtonChevronLeft href="/design-system" />
            </div>
            <div className="w-4/5 m-1 text-left bg-blue-100">
              <img className="mx-auto shadow-md" src={imgPath} alt="" />
              <div className="flex items-center p-2 mt-2 text-gray-400 ">
                <div className="inline-block font-mono">Caption, more info</div>
                <div className="inline-block ml-2">
                  <ButtonInfoMetadanych
                    href="/design-system/infometadanych"
                    color="gray-500"
                    colorHover="gray-200"
                  />
                </div>
              </div>
            </div>
            <div className="m-1">
              <ButtonChevronRight href="/design-system" />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
