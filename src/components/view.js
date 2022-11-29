import React, { useState, useEffect } from "react";
import { dataStore } from "../system/dataStore";
import "../styles.css";
import Profile from "./profile";
import Barracks from "./barracks";

export default function View() {
  const [charaData, setCharaData] = useState(dataStore.charas);
  const [curID, setCurID] = useState(0);

  useEffect(() => {
    dataStore.loadData();
  }, []);

  useEffect(() => {
    dataStore.subscribe(onUpdate);
  }, []);

  function onUpdate() {
    setCharaData([...dataStore.charas]);
  }

  let profile = <Profile info={charaData[curID]} />;
  let barrack = <Barracks chara={charaData} change={(e) => setCurID(e)} />;

  return (
    <div>
      {profile}
      {barrack}
    </div>
  );
}
