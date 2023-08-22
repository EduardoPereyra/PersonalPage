import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturePosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../helpers/post-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Eduardo' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturePosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featurePosts = getFeaturedPosts();
  return {
    props: {
      posts: featurePosts,
    },
  };
}

export default HomePage;
