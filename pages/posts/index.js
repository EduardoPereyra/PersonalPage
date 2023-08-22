import { Fragment } from "react";
import { getAllPosts } from "../../helpers/post-util";
import AllPosts from "./../../components/posts/all-posts";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Posts</title>
        <meta name='description' content='See all my posts' />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
