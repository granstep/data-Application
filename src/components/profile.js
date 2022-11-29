import React from "react";
import Avatar from "./avatar";

export default function Profile(prop) {
  var display = <div></div>;

  function id2Link() {
    var link = "img/" + prop.info.Img + ".png";
    return link;
  }

  if (prop.info.Avatar) {
    display = <Avatar info={prop.info} img={id2Link()} />;
  } else {
    display = (
      <div>
        <img id="profile" src={id2Link()} alt={prop.info.Img} />
        <h2>{prop.info.Name}</h2>
        <p>"Testing"</p>
      </div>
    );
  }

  return display;
}
