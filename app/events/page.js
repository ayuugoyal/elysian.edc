import React from "react";
import "../../styles/events.css";
import { TitleText } from "../../components/CustomTexts";
import CountdownTimer from "./CountdownTimer";

const page = () => {
  const upcomingEv = [
    {
      image1: "../event_post.png",
      image2: "comingsoon.png",
      title: "",
      desc: "Description",
    },
    {
      image1: "../event_post.png",
      image2: "comingsoon.png",
      title: "",
      desc: "Description",
    },
    {
      image1: "../event_post.png",
      image2: "comingsoon.png",
      title: "",
      desc: "Description",
    },
  ];
  const techEvents = [
    {
      image1: "../8.png",
      image2: "ai-brain.png",
      title: "AI BLITZ",
      desc: "Description",
      gLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdANUhWEbUXEzGob9dWomOHtWpMruPGyL2TSWO3C7KHpPoWuQ/viewform?usp=sf_link",
    },
    {
      image1: "../7.png",
      image2: "arduino.png",
      title: "ARDUINO OFF-ROADING",
      desc: "Description",
      gLink: "https://forms.gle/ZXRh11q4n4rnJccW8",
    },
    // {
    //   image1: "../AI_Event.jpg",
    //   image2: "AI_man.png",
    //   title: "AR/VR Event",
    //   desc: "Description",
    // },
  ];
  const designEvents = [
    {
      image1: "../2.png",
      image2: "AI_man.png",
      title: "AR/VR",
      desc: "Description",
      gLink: "https://forms.gle/huQigDnvjEoapHmk9",
    },
    {
      image1: "../1.png",
      image2: "model3d.png",
      title: "3D MODELING",
      desc: "Description",
      gLink: "https://forms.gle/F22AicmCdGjqyRjz9",
    },
    {
      image1: "../6.png",
      image2: "uiux.png",
      title: "UI/UX",
      desc: "Description",
      gLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdugAsXSZ3zhsm9aGGezUr6XVprebCPjMdlogFm5Gjrgy9AvQ/viewform?usp=sf_link",
    },
  ];
  const culturalEvents = [
    {
      image1: "../5.png",
      image2: "film.png",
      title: "SHORT FILM COMPETITION",
      desc: "Description",
      gLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfsG6nFcewEqzKVbylql03ZuFxR867ra9lPLETeK2BmAug7ng/viewform?usp=sf_link",
    },
    {
      image1: "../4.png",
      image2: "tresuree.png",
      title: "TRESURE HUNT",
      desc: "Description",
      gLink: "https://forms.gle/Xj9Xf6BkbX2ysoWF6",
    },
    {
      image1: "../3.png",
      image2: "suidGaame.png",
      title: "SQUID GAME",
      desc: "Description",
      gLink: "https://forms.gle/1U3FGRggVK5LNawa7",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <a href={card.gLink}>
        <div key={index}>
          <div class="card">
            <div class="wrapper">
              <img src={card.image1} alt="" class="cover-image" />
            </div>
            <h3 className="title">{card.title}</h3>
            <img src={card.image2} class="character" />
          </div>
        </div>
      </a>
    );
  };

  return (
    <>
      {/* <div className="flex flex-col items-center gap-1">
        <div className="flex flex-col items-center gap-50">
          <CountdownTimer />
          <TitleText title={<>Upcoming Events</>} textStyles="text-center" />
        </div>
        <div className=" mt-16 flex justify-center lg:flex-row flex-col gap-5">
          {upcomingEv.map(renderCard)}
        </div>
      </div> */}
      <div className="items-center ">
        <TitleText title={<>Tech Events</>} textStyles="text-center" />
        <div className=" mt-10 flex justify-center lg:flex-row flex-col gap-5">
          {techEvents.map(renderCard)}
        </div>
      </div>
      <div className=" mt-10 items-center">
        <TitleText title={<>Design Events</>} textStyles="text-center" />
        <div className=" mt-10 flex justify-center lg:flex-row flex-col gap-5">
          {designEvents.map(renderCard)}
        </div>
      </div>
      <div className=" mt-10 items-center">
        <TitleText title={<>Cultural Events</>} textStyles="text-center" />
        <div className=" mt-10 flex justify-center lg:flex-row flex-col gap-5">
          {culturalEvents.map(renderCard)}
        </div>
      </div>
    </>
  );
};

export default page;
