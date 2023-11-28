// const CommentsSection = () => {

//   const run = () => {
//     var disqus_config = function () {
//       this.page.url = document.location.href;  // Replace PAGE_URL with your page's canonical URL variable
//       this.page.identifier = document.location.href.split(".com")[1]; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
//     };

//   (function () {
//     // DON'T EDIT BELOW THIS LINE
//     var d = document,
//     s = d.createElement("script");
//     s.src = "https://lazypress1.disqus.com/embed.js";
//     s.setAttribute("data-timestamp", +new Date());
//     (d.head || d.body).appendChild(s);
//   })();
//   }

//   return (
//     <>
//       <div id="disqus_thread"></div>
//         {run}
//       <noscript>
//         Please enable JavaScript to view the{" "}
//         <a href="https://disqus.com/?ref_noscript">
//           comments powered by Disqus.
//         </a>
//       </noscript>
//     </>
//   );
// };

import { DiscussionEmbed } from "disqus-react";

const CommentsSection = (page) => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  console.log(`🅱️age:\n`, page);

  const config = {
    url: url,
    identifier: page._id,
    title: page.title,
  };

  return <DiscussionEmbed shortname="lazypress1" config={config} />;
};

export default CommentsSection;
