import React from "react";
import Feature from "./Feature/Feature";
function Features() {
  const featuresList = React.useState([
    {
      id: 1,
      title: "World's best luxury homes",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
      icon: "icon-global"
    },
    {
      id: 2,
      title: "Only the best properties",
      content:
        "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.",
      icon: "icon-trophy"
    },
    {
      id: 3,
      title: "All homes is in top localtions",
      content:
        "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.",
      icon: "icon-map-pin"
    },
    {
      id: 4,
      title: "New home in one week",
      content:
        "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      icon: "icon-key"
    },
    {
      id: 5,
      title: "Top 1% realtors",
      content:
        "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.",
      icon: "icon-presentation"
    },
    {
      id: 6,
      title: "World's best luxury homes",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
      icon: "icon-lock"
    }
  ])[0];
  return (
    <React.Fragment>
      {featuresList.map(feature => (
        <Feature
          key={feature.id}
          title={feature.title}
          content={feature.content}
          icon={feature.icon}
        />
      ))}
    </React.Fragment>
  );
}

export default Features;
