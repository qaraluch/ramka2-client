import Link from "next/link";
import IconCollection from "./Icons/IconCollection";
import ButtonX from "./Buttons/ButtonX";
import ButtonInfoMetadanych from "./Buttons/ButtonInfoMetadanych";
import { ButtonChevronLeft, ButtonChevronRight } from "./Buttons/ButtonChevron";

// const imgPath = "/img-dummy-4464.png";

export default function PelnyWidok({
  imageData,
  collectionName,
  collectionCount = 0,
  imagePositionCollection = 0,
  padNumber = 4,
  nextId,
  previousId,
}) {
  const imgPathServer = imageData.data[0].imageServerPath;
  const imgPath = `http://localhost:9000/${imgPathServer}`;

  const imageOriginalName = imageData.data[0].imageOriginalName;
  const imageId = imageData.data[0]._id;

  const collectionCountPadded = collectionCount
    .toString()
    .padStart(padNumber, 0);
  const imagePositionCollectionPadded = imagePositionCollection
    .toString()
    .padStart(padNumber, 0);

  return (
    <>
      <div className="w-full h-screen bg-gray-700">
        {/* navigation bar */}
        {collectionName ? (
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
        ) : (
          <nav className="flex items-center justify-between p-2 shadow-sm ">
            <div className="flex items-center h-8 m-1"></div>
            <div className="w-1/5 m-1"></div>
            <div className="flex items-center h-8 m-1 text-right">
              <div className="inline-block ">
                <ButtonX href={`/collections/${collectionName}`} />
              </div>
            </div>
          </nav>
        )}
        {/* display images */}
        <div className="w-auto">
          <nav className="flex items-start justify-between p-4 m-2">
            <div className="m-1 mt-128">
              <ButtonChevronLeft
                href={`/images/pelnywidok/${previousId}`}
                query={{ collectionName }}
              />
            </div>
            <div className="m-1 text-left bg-blue-100 w-pelnywidok">
              <img className="mx-auto shadow-md" src={imgPath} alt="" />
              <div className="flex items-center p-2 mt-2 text-gray-400 ">
                <div className="inline-block font-mono">
                  {imageOriginalName}
                </div>
                <div className="inline-block ml-2">
                  <ButtonInfoMetadanych
                    href={`/images/infometadanych/${imageId}`}
                    query={{ collectionName }}
                    color="gray-500"
                    colorHover="gray-200"
                  />
                </div>
              </div>
            </div>
            <div className="m-1 mt-128">
              <ButtonChevronRight
                href={`/images/pelnywidok/${nextId}`}
                query={{ collectionName }}
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
