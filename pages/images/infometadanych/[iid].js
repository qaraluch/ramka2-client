import { useRouter } from "next/router";
import InfoMetadanych from "../../../components/InfoMetadanych";

//TODO: use react-query
export async function getServerSideProps(ctx) {
  const imgId = ctx.params.iid;
  const collectionName = ctx.query.collectionName;
  //TODO: get port and host form .env
  const res = await fetch(`http://localhost:9000/images/${imgId}`);
  const imageData = await res.json();

  async function fetchCollectionInfo(collectionName) {
    const res = await fetch(
      //TODO: get port and host form .env
      `http://localhost:9000/collections/${collectionName}`
    );
    const resData = await res.json();
    return resData;
  }

  const collectionData = collectionName
    ? await fetchCollectionInfo(collectionName)
    : await fetchCollectionInfo("all");
  // fall back for:
  // stand alone browser of images
  // not in the context of any other collection than default: all

  // if error 404 status
  if (!imageData || imageData.success === false) {
    return {
      notFound: true,
    };
  }

  return {
    props: { imageData, collectionData },
  };
}

//TODO: review naming console.log("---->", data.data.images);
export default function ImagesPelnyWidok({ imageData, collectionData }) {
  const router = useRouter();
  const { iid, collectionName = "all" } = router.query;

  function getPreviousId(indexCurrentImageId, collectionArray) {
    const previousId = collectionArray[indexCurrentImageId - 1];
    const lastId = collectionArray[collectionArray.length - 1];
    return previousId ? previousId : lastId; // looped the collection browesing
  }

  function getNextId(indexCurrentImageId, collectionArray) {
    const nextId = collectionArray[indexCurrentImageId + 1];
    const firstId = collectionArray[0];
    return nextId ? nextId : firstId; // looped the collection browesing
  }

  const collectionArray = collectionData.data.images;
  const collectionCount = collectionArray.length;
  const indexCurrentImageId = collectionArray.indexOf(iid);
  const imagePositionCollection = indexCurrentImageId + 1;

  const nextId = getNextId(indexCurrentImageId, collectionArray);
  const previousId = getPreviousId(indexCurrentImageId, collectionArray);

  return (
    <>
      <InfoMetadanych
        imageData={imageData}
        collectionName={collectionName}
        collectionCount={collectionCount}
        imagePositionCollection={imagePositionCollection}
        nextId={nextId}
        previousId={previousId}
      />
    </>
  );
}
