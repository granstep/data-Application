import React, { useState } from "react";
import { dataStore, ReName, GenderSwap } from "../system/dataStore";

export default function Avatar(prop) {
  const [nameVal, setNameVal] = useState(prop.info.Name);
  var display = (
    <div>
      <img id="profile" src={prop.img} alt={prop.info.Img} />
      <h2>{nameVal}</h2>
      <input
        type="text"
        value={nameVal}
        onChange={(e) => setNameVal(e.target.value)}
      ></input>
      <button onClick={() => finalizeName()}>Rename</button>
      <button onClick={() => genderSwap()}>{prop.info.Gender}</button>
      <p>"Testing 2"</p>
    </div>
  );

  function finalizeName() {
    let newName = new ReName(nameVal);
    dataStore.avatarRename(newName);
  }

  function genderSwap() {
    if (prop.info.Gender === "Male") {
      let change = new GenderSwap("Female", "robinF");
      dataStore.avatarGender(change);
    } else {
      let change = new GenderSwap("Male", "robinM");
      dataStore.avatarGender(change);
    }
  }

  return display;
}
