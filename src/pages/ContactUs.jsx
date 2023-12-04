import { InlineWidget } from "react-calendly";
export default function ContactUs() {
  return (
    <InlineWidget
      url="https://calendly.com/lazypress"
      pageSettings={{
        backgroundColor: "#fff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "#000",
        textColor: "#000",
      }}
    />
  );
}
