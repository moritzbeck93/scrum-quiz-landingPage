import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navigation/navigation";
import Header from "../components/header/header";
import styles from "../styles/Home.module.scss";
import Projects from "../components/projects/projects";
import Start from "../components/start/start";
import Packages from "../components/pricing/pricing";
import Reviews from "../components/reviews/reviews";

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Projects />
      <Start />
      <Packages />
      <Reviews />
    </>
  );
};

export default Home;
