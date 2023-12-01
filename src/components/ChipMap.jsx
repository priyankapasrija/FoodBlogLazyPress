import { Chip } from "@nextui-org/react";

/**
 * Maps an array and returns each item as a pretty, small compact grey chip.
 * @param {*} array Accept an array and only an array
 * @returns Small compact grey chip elements
 * @link https://github.com/Mochibunn , 2023
 */
const ChipMap = ({ array }) => {
  if (!array || !array.length) {
    console.error(`P\n`, array);
    return <p>Check console for error</p>;
  } //added this line here
  const result = array.map((item) => {
    return (
      <Chip
        className="mr-2 my-1 p-1 inline"
        iscompact="true" //Technically writing just "isCompact" will work but the console throws a warning in that case.
        key={`${item}`}
        size="lg"
      >
        {`${item}`}
      </Chip>
    );
  });
  return result;
};

export default ChipMap;
