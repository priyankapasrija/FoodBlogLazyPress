import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";

/**
 * User consent component to comply with GDPR.
 * @returns Floating sticky modal that will stay up for as long as the user clicks the accept button, giving their cookie usage consent.
 * @copyright 2023 Mochibunn. Licensed under the Mozilla Public License version 2.0
 * @link https://github.com/Mochibunn
 */
const UserConsent = () => {

  const [cookies, setCookies] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem(`cookies`);
    if (data !== null) setCookies(JSON.parse(data));
  }, []);

  const handleClick = () => {
    localStorage.setItem(`cookies`, true);
    setCookies(true);
  };

  // const handleUndo = () => {
  //   window.localStorage.setItem(`cookies`, false);
  //   setCookies(false);
  // };

  return !cookies ? (
    <div className="sticky bottom-0 w-full flex justify-center z-100 select-none">
      <div className="flex justify-between absolute bottom-6 px-6 py-2 shadow-hard border-black border-4 bg-card-yellow bg-dots-1 w-11/12">
        <div>
          <p className="text-2xl font-bold font-unisans-heavy">
            We use cookies
          </p>
          <p className="text-lg font-montserrat font-semibold w-11/12">
            Cookies help us deliver the best experience on our website. By using
            our website, you agree to the use of cookies.
          </p>
        </div>
        <Button
          className="bg-button-blue border-black border-1 iconShadow my-auto font-montserrat"
          radius="none"
          size="lg"
          disableRipple
          onClick={handleClick}
        >
          ACCEPT
        </Button>
      </div>
    </div>
  ) : (
    <>
      {/* <div className="bg-card px-2 py-2 sticky bottom-0 z-100">
        <Button onClick={handleUndo}>Return the message!</Button>
      </div> */}
    </>
  );
};

export default UserConsent;
