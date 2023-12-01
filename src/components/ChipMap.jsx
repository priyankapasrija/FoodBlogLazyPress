// import { Chip } from "@nextui-org/react";
import { ctgryColor } from "../utils/category";

/**
 * Maps an array and returns each item as a pretty, small compact grey chip.
 * @param {*} array Accept an array and only an array
 * @returns Small compact chip elements
 * @link https://github.com/Mochibunn , 2023
 */
const ChipMap = ({ array }) => {
  if (!array || !array.length) {
    console.error(`P\n`, array);
    return <p>Check console for error</p>;
  } //added this line here

  return (
    <div className="flex">
      <p
        key={crypto.randomUUID}
        className={`text-xs not-italic text-black-3 border border-black p-[0.5] px-2 ${ctgryColor(
          array[0]
        )} mr-2`}
        style={{ fontFamily: "UniSans-Heavy" }}
      >
        {array[0]}
      </p>
      <p
        key={crypto.randomUUID + 1}
        className={`text-xs not-italic text-black-3 border border-black p-[0.5] px-2 ${ctgryColor(
          array[1]
        )}`}
        style={{ fontFamily: "UniSans-Heavy" }}
      >
        {array[1]}
      </p>
    </div>
  );
};

export default ChipMap;
