import React from "react";

const iconsGenerator = icon => {
  let eventTypeIcon;

  switch (icon) {
    case "red":
      eventTypeIcon = <i className="far fa-bookmark fa-bookmark-red" />;
      break;
    case "yellow":
      eventTypeIcon = <i className="far fa-bookmark fa-bookmark-yellow" />;
      break;
    case "comment":
      eventTypeIcon = <i className="fas fa-align-left" />;
      break;
    case "injury":
      eventTypeIcon = <i className="fas fa-ambulance" />;
      break;
    case "goal":
      eventTypeIcon = <i className="fas fa-basketball-ball" />;
      break;
    case "substitution":
      eventTypeIcon = <i className="fas fa-arrows-alt-v" />;
      break;
    default:
      eventTypeIcon = "";
  }

  return eventTypeIcon;
};

export default iconsGenerator;
