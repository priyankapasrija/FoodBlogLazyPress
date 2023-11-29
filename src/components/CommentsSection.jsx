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
