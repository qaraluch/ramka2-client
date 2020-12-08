export default function DesignSystem_ColorBox({ colorName, hexValue }) {
  const dynamicClassName = `h-24 p-24 m-2 border-gray-100 border-2 bg-${colorName}`;
  return (
    <div className="flex flex-col items-center">
      <div className={dynamicClassName}></div>
      <div className="p-1 text-base uppercase text-gunmetal">{colorName}</div>
      <div className="p-1 font-bold text-gray-400">{hexValue}</div>
      <div className="p-1 text-gray-400">bg-{colorName}</div>
      <div className="p-1 text-gray-400">text-{colorName}</div>
    </div>
  );
}
