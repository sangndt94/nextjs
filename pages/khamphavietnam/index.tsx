import type { NextPage } from "next";
import HomeComponent from "../../app/home";
const Discover: NextPage = () => {
  return <HomeComponent />;
};

export default Discover;

export async function getServerSideProps(context: any) {
  console.log("context.resolvedUrl: ", context);
  return {
    props: {
      //my other props
    },
  };
}