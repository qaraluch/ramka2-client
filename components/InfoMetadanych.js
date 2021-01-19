import Link from "next/link";
import dynamic from "next/dynamic";
import IconCollection from "../components/Icons/IconCollection";
import ButtonX from "../components/Buttons/ButtonX";
import IconInformationCircle from "../components/Icons/IconInformationCircle";
import {
  ButtonChevronLeft,
  ButtonChevronRight,
} from "../components/Buttons/ButtonChevron";

const ReactJsonViewDynamic = dynamic(import("react-json-view"), { ssr: false });

// https://github.com/chriskempson/base16/blob/master/styling.md
const ReactJsonThemeCustom = {
  base00: "#e4e4e7", // gray-200 #e4e4e7
  base01: "#ddd",
  base02: "#ddd",
  base03: "#3f3f46", // gray-700 #3f3f46
  base04: "#3f3f46", // gray-700 #3f3f46
  base05: "#3f3f46", // gray-700 #3f3f46
  base06: "#3f3f46", // gray-700 #3f3f46
  base07: "#3f3f46", // gray-700 #3f3f46
  base08: "#3f3f46", // gray-700 #3f3f46
  base09: "#0891b2", // cyan-600 #0891b2
  base0A: "#0891b2", // cyan-600 #0891b2
  base0B: "#0891b2", // cyan-600 #0891b2
  base0C: "#0891b2", // cyan-600 #0891b2
  base0D: "#0891b2", // cyan-600 #0891b2
  base0E: "#0891b2", // cyan-600 #0891b2
  base0F: "#0891b2", // cyan-600 #0891b2
};

export default function InfoMetadanych({
  imageData,
  collectionName,
  collectionCount = 0,
  imagePositionCollection = 0,
  padNumber = 4,
  nextId,
  previousId,
}) {
  const imgPathServer = imageData.data[0].thumbnail.path;
  const imgPath = `http://localhost:9000/${imgPathServer}`;

  const imageId = imageData.data[0]._id;

  const collectionCountPadded = collectionCount
    .toString()
    .padStart(padNumber, 0);
  const imagePositionCollectionPadded = imagePositionCollection
    .toString()
    .padStart(padNumber, 0);

  return (
    <>
      <div className="w-full bg-gray-700">
        {/* navigation bar */}
        <nav className="flex items-center justify-between p-2 shadow-sm ">
          <div className="flex items-center h-8 m-1">
            <Link href={`/collections/${collectionName}`}>
              <a className="flex items-center text-gray-400 font-exo hover:text-gray-200 ">
                <IconCollection color="gray-400" />
                <h1 className="ml-2">{collectionName}</h1>
              </a>
            </Link>
            <h1 className="ml-2 text-gray-400 font-exo">/</h1>
            <h2 className="ml-1 text-gray-200 font-exo">
              {imagePositionCollectionPadded}
            </h2>
            <h1 className="ml-2 text-gray-400 font-exo">of</h1>
            <h2 className="ml-1 text-gray-400 font-exo">
              {collectionCountPadded}
            </h2>
          </div>
          <div className="w-1/5 m-1"></div>
          <div className="flex items-center h-8 m-1 text-right">
            <div className="inline-block ">
              <ButtonX href={`/collections/${collectionName}`} />
            </div>
          </div>
        </nav>
        {/* display images */}
        <div className="w-auto">
          <nav className="flex items-center justify-between p-4 m-2">
            <div className="m-1">
              <ButtonChevronLeft
                href={`/images/infometadanych/${previousId}`}
                query={{ collectionName }}
              />
            </div>
            <div className="w-2/5 m-1 bg-blue-100">
              <Link
                href={{
                  pathname: `/images/pelnywidok/${imageId}`,
                  query: { collectionName },
                }}
              >
                <a>
                  <img className="mx-auto shadow-md" src={imgPath} alt="" />
                </a>
              </Link>
            </div>
            <div className="m-1">
              <ButtonChevronRight
                href={`/images/infometadanych/${nextId}`}
                query={{ collectionName }}
              />
            </div>
          </nav>
        </div>
      </div>
      {/* metadata info */}
      <div className="flex items-center w-full p-2 mt-2 text-gray-400 ">
        <div className="w-1/5 m-1"></div>
        <div className="flex flex-col w-3/5 m-1">
          <div className="flex">
            <div className="inline-block">
              <IconInformationCircle color="gray-400" />
            </div>
            <div className="inline-block ml-2">
              Metadata (DB record of image):
            </div>
          </div>
          <div className="mt-5 ml-8">
            <ReactJsonViewDynamic
              name={null}
              theme={ReactJsonThemeCustom}
              displayObjectSize={false}
              displayDataTypes={false}
              src={imageData.data[0]}
            />
          </div>
        </div>
        <div className="w-1/5 m-1"></div>
      </div>
    </>
  );
}
