import React from "react";
import PostItem from "./PostItem";

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}
const BlogPosts = ({ posts, queryTag }) => {
  return posts
    .filter((post) => (queryTag ? post.tags.includes(queryTag) : post))
    .map((post) => <PostItem key={post.title} post={post} />);
};

export default BlogPosts;
