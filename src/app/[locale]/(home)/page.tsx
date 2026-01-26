import {
  HomeContact,
  HomeFooter,
  HomeFourth,
  HomeHero,
  HomeSecond,
  HomeThird,
} from "./components";

export default async function Home() {
  return (
    <>
      <HomeHero />
      <HomeSecond />
      <HomeThird />
      <HomeFourth />
      <HomeContact />
      <HomeFooter />
    </>
  );
}
