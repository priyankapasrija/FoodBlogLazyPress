import { DiscussionEmbed } from "disqus-react";

/**
 * Enables the Disqus comments module and provides settings
 * @param {*} page 
 * @returns 
 */
const CommentsSection = (page) => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const config = {
    url: url,
    identifier: page._id,
    title: page.title,
  };

  return <DiscussionEmbed shortname="lazypress1" config={config} />;
};

export default CommentsSection;
