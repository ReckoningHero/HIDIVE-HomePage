import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {
  recentlyadded,
  simulcasts,
  intro,
  TRENDINGNOW,
  MOSTPOPULAR,
  EXCLUSIVES,
  DUBS,
  BREAKASWEAT,
  comedy,
  ROMANCE,
  WATCHAFTERDARK,
  ANIME,
  BACKSTAGE,
  TARGETACQUIRED,
  test
} from "./constants/urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Recently Added" isSmall={true} api={recentlyadded} />
      <RowPost title="Simulcasts" isSmall={true} api={simulcasts} />
      <RowPost title="Intro to HIDIVE" isSmall={true} api={intro} />
      <RowPost title="Trending Now" isSmall={true} api={TRENDINGNOW} />
      <RowPost title="Most Popular" isSmall={true} api={MOSTPOPULAR} />
      <RowPost title="Exclusives" isSmall={true} api={EXCLUSIVES} />
      <RowPost title="Dubs" isSmall={true} api={DUBS} />
      <RowPost title="Break A Sweat" isSmall={true} api={BREAKASWEAT} />
      <RowPost title="Comedy Club" isSmall={true} api={comedy} />
      <RowPost title="Into Is In The Air" isSmall={true} api={ROMANCE} />
      <RowPost title="Watch After Dark" isSmall={true} api={WATCHAFTERDARK} />
      <RowPost title="Aesthetically Pleasing Anime" isSmall={true} api={ANIME} />
      <RowPost title="Backstage Access" isSmall={true} api={BACKSTAGE} />
      <RowPost title="Target Acquired" isSmall={true} api={ TARGETACQUIRED} />
   
    </div>
  );
}

export default App;
