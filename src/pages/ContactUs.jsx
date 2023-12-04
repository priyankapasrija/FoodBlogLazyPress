import { InlineWidget } from "react-calendly";
export default function ContactUs() {
  return (
    // <div
    //   className="calendly-inline-widget"
    //   data-url="https://calendly.com/priyankapasrija22"
    //   style={{ width: "350px", height: "700px" }}
    // ></div>
    <InlineWidget
      url="https://calendly.com/priyankapasrija22"
      style={{ width: "350px", height: "700px" }}
    />
    // {/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
  );
}
