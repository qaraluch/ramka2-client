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

const metadataIndoExample = {
  image: {
    _id: "5f299879a7c1ce5e9862a639",
    imageOriginalName: "image-walczak-thesame.jpg",
    imageFileName: "27647994-1391-44d7-886c-4bcc1517960a",
    imageServerPath: "public/27647994-1391-44d7-886c-4bcc1517960a",
    imageMimeType: "image/jpeg",
    imageSize: 46898,
    imageExif: {
      exifResults: {
        success: true,
        message: null,
      },
      data: {
        SourceFile: "public/27647994-1391-44d7-886c-4bcc1517960a",
        ExifToolVersion: 10.53,
        ImageWidth: 851,
        ImageHeight: 315,
        BitsPerSample: "8 8 8",
        PhotometricInterpretation: "RGB",
        Orientation: "Horizontal (normal)",
        SamplesPerPixel: 3,
        XResolution: 72,
        YResolution: 72,
        ResolutionUnit: "inches",
        Software: "Adobe Photoshop CS6 (Windows)",
        ModifyDate: "2017:09:04 07:38:00",
        ExifVersion: "0221",
        ColorSpace: "Uncalibrated",
        ExifImageWidth: 315,
        ExifImageHeight: 315,
        Compression: "JPEG (old-style)",
        ThumbnailOffset: 394,
        ThumbnailLength: 4391,
        CodedCharacterSet: "UTF8",
        ApplicationRecordVersion: 0,
        IPTCDigest: "c75d17e574b56ef5dbbe3994c0e9795c",
        DisplayedUnitsX: "inches",
        DisplayedUnitsY: "inches",
        PrintStyle: "Centered",
        PrintPosition: "0 0",
        PrintScale: 1,
        GlobalAngle: 120,
        GlobalAltitude: 30,
        URL_List: [],
        SlicesGroupName: "FB-EP-cover",
        NumSlices: 1,
        PixelAspectRatio: 1,
        PhotoshopThumbnail:
          "(Binary data 4391 bytes, use -b option to extract)",
        HasRealMergedData: "Yes",
        WriterName: "Adobe Photoshop",
        ReaderName: "Adobe Photoshop CS6",
        PhotoshopQuality: 11,
        PhotoshopFormat: "Standard",
        ProgressiveScans: "3 Scans",
        XMPToolkit:
          "Adobe XMP Core 5.3-c011 66.145661, 2012/02/06-14:56:27        ",
        CreatorTool: "Adobe Photoshop CS5 Windows",
        CreateDate: "2012:08:02 20:18:14+02:00",
        MetadataDate: "2017:09:04 07:38+02:00",
        Format: "image/jpeg",
        InstanceID: "xmp.iid:2FFAB2363391E711A08BBBA29BD2162D",
        DocumentID: "xmp.did:0B1D0F6DCEDCE11198CAC53C80D4633C",
        OriginalDocumentID: "xmp.did:0B1D0F6DCEDCE11198CAC53C80D4633C",
        LegacyIPTCDigest: "CDCFFA7DA8C7BE09057076AEAF05C34E",
        ColorMode: "RGB",
        HistoryAction: [
          "created",
          "saved",
          "converted",
          "derived",
          "saved",
          "saved",
        ],
        HistoryInstanceID: [
          "xmp.iid:0B1D0F6DCEDCE11198CAC53C80D4633C",
          "xmp.iid:0C1D0F6DCEDCE11198CAC53C80D4633C",
          "xmp.iid:0D1D0F6DCEDCE11198CAC53C80D4633C",
          "xmp.iid:2FFAB2363391E711A08BBBA29BD2162D",
        ],
        HistoryWhen: [
          "2012:08:02 20:18:14+02:00",
          "2012:08:02 20:19:49+02:00",
          "2012:08:02 20:19:49+02:00",
          "2017:09:04 07:38+02:00",
        ],
        HistorySoftwareAgent: [
          "Adobe Photoshop CS5 Windows",
          "Adobe Photoshop CS5 Windows",
          "Adobe Photoshop CS5 Windows",
          "Adobe Photoshop CS6 (Windows)",
        ],
        HistoryChanged: ["/", "/", "/"],
        HistoryParameters: [
          "from application/vnd.adobe.photoshop to image/jpeg",
          "converted from application/vnd.adobe.photoshop to image/jpeg",
        ],
        DerivedFromInstanceID: "xmp.iid:0C1D0F6DCEDCE11198CAC53C80D4633C",
        DerivedFromDocumentID: "xmp.did:0B1D0F6DCEDCE11198CAC53C80D4633C",
        DerivedFromOriginalDocumentID:
          "xmp.did:0B1D0F6DCEDCE11198CAC53C80D4633C",
        DCTEncodeVersion: 100,
        APP14Flags0: "[14]",
        APP14Flags1: "(none)",
        ColorTransform: "YCbCr",
        ImageSize: "315x315",
        Megapixels: 0.099,
        ThumbnailImage: "(Binary data 4391 bytes, use -b option to extract)",
      },
    },
    thumbnail: {
      cropResults: {
        success: true,
        message: null,
      },
      path: "public/27647994-1391-44d7-886c-4bcc1517960a_small",
    },
    imageHash: {
      hashResults: {
        success: true,
        message: null,
      },
      data: "d541f99f3a204bd5c3af08cdc4e20f76",
    },
    parsedCSFilename: {
      parseResults: {
        success: false,
        message: {
          message: "No match!",
        },
      },
      data: null,
    },
    __v: 0,
  },
};

const imgPath = "/img-dummy-150.png";

export default function InfoMetadanych() {
  return (
    <>
      {/* musi być bo w DS_LayoutDisplay jest nad tym flex */}
      {/* część która będzie layoutem*/}
      <div className="w-full bg-gray-700">
        {/* navigation bar */}
        <nav className="flex items-center justify-between p-2 shadow-sm ">
          <div className="flex items-center h-8 m-1">
            <Link href="/design-system/mozajka">
              <a className="flex items-center text-gray-400 font-exo hover:text-gray-200 ">
                <IconCollection color="gray-400" />
                <h1 className="ml-2">All</h1>
              </a>
            </Link>
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
            <div className="w-2/5 m-1 bg-blue-100">
              <Link href="/design-system/pelnywidok">
                <a>
                  <img className="mx-auto shadow-md" src={imgPath} alt="" />
                </a>
              </Link>
            </div>
            <div className="m-1">
              <ButtonChevronRight href="/design-system" />
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
              src={metadataIndoExample.image}
            />
          </div>
        </div>
        <div className="w-1/5 m-1"></div>
      </div>
    </>
  );
}
