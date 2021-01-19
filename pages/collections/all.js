import Mozajka from "../../components/Mozajka";

//TODO: use react-query
export async function getServerSideProps(context) {
  //TODO: get port and host form .env
  const res = await fetch("http://localhost:9000/collections/all");
  const resData = await res.json();

  // if error 404 status
  if (!resData) {
    return {
      notFount: true,
    };
  }

  async function fetchImageInfo(imgId) {
    //TODO: get port and host form .env
    const res = await fetch(`http://localhost:9000/images/${imgId}`);
    const resData = await res.json();
    return resData;
  }

  //TODO: throttle it
  const imageData = await Promise.all(
    //     v--- API servera
    resData.data.images.map(async (imgId) => await fetchImageInfo(imgId))
  );

  return {
    props: { imageData },
  };
}

//TODO: review naming
// console.log("---->", data.data.images);
export default function CollectionAllMozajka({ imageData }) {
  return (
    <>
      <Mozajka collectionName="all" imageData={imageData} />
    </>
  );
}
