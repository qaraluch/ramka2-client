import Miniaturka from "./Miniaturka";
import IconCollection from "../components/Icons/IconCollection";
import { IconChevronLeft } from "../components/Icons/IconChevron";
import ButtonLogo from "../components/Buttons/ButtonLogo";

export default function Mozajka({ collectionName, imageData }) {
  return (
    <>
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
                <h1 className="ml-2">{collectionName}</h1>
              </div>
              <div className="w-1/3"></div>
            </div>
          </div>
          <div className="w-1/3 m-1 text-right"></div>
        </nav>
        {/* display images */}
        <div className="p-8 bg-gray-700 ">
          <div className="flex flex-wrap justify-left">
            {imageData.map((itm, idx) => (
              <Miniaturka
                key={itm.data[0]._id}
                imgPath={`http://localhost:9000/${itm.data[0].thumbnail.path}`}
                imgAlt={itm.data[0].imageFileName}
                href={`/images/pelnywidok/${itm.data[0]._id}`}
                query={{ collectionName }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
