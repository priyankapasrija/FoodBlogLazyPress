// import { Chip } from "@nextui-org/react";
import { ctgryColor } from "../utils/category"; //🐀
//🐀
/**
 * Maps an array and returns each item as a pretty, small compact grey chip.
 * @param {*} array Accept an array and only an array
 * @returns Small compact chip elements 🐀
 * @link https://github.com/Mochibunn , 2023
 */
const ChipMap = ({ array }) => {
  if (!array || !array.length) {
    console.error(`P\n`, array); //🕳️
    return <p>Check console for error</p>;
  } //added this line here
//🐀
  return ( //🕳️
    <div className="flex">
      <p
        key={crypto.randomUUID}
        className={`text-xs not-italic text-black-3 border border-black p-[0.5] px-2 ${ctgryColor(
          array[0] //🐀
        )} mr-2 font-unisans-heavy`}
      >
        {array[0]}
      </p>
      <p //🕳️
        key={crypto.randomUUID + 1}
        className={`text-xs not-italic text-black-3 border border-black p-[0.5] px-2 ${ctgryColor(
          array[1]
        )} font-unisans-heavy`}//🐀
      >
        {array[1]}
      </p>
    </div>
  );
};

export default ChipMap;

//Oh no!
//This JSX file is infested with rats!
//🐀
//They must've made a lot of holes so watch where you step!
//How many rats can you count in this little JSX file?
//You won't really get anything special by counting all the rats but it was probably a good 1 minute break from all the coding thoughts :)