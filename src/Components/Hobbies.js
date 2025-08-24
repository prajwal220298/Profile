import React, { useState, useEffect } from "react";
import "./Hobbies.css";
import { GiCook } from "react-icons/gi";
import { TbGardenCartOff } from "react-icons/tb";
import { BiCameraMovie } from "react-icons/bi";
import { FcSportsMode } from "react-icons/fc";
import { CgGym } from "react-icons/cg";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div className="carouselCard">{children}</div>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interaval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
      updateIndex(activeIndex + 1);
    }, 6000);
    return () => {
      if (interaval) {
        clearInterval(interaval);
      }
    };
  });
  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              <span className="buttonBar"></span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div className="hobbiesContainer">
      <h1>Hobbies</h1>
      <Carousel>
        <CarouselItem>
          <div className="itemInfo">
            <span>
              <BiCameraMovie />
            </span>
            <p>Binge Watching</p>
          </div>

          <p className="hobbiesDescription">
            Enjoy binge watching movies and series of different languages and
            geners.
          </p>
        </CarouselItem>
        <CarouselItem>
          <div className="itemInfo">
            <span>
              <FcSportsMode />
            </span>
            <p>Sports</p>
          </div>

          <p className="hobbiesDescription">
            Love to watch and play cricket as a stress buster and also go
            cycling and running now and then.
          </p>
        </CarouselItem>
        <CarouselItem>
          <div className="itemInfo">
            <span>
              <CgGym />
            </span>
            <p>Gym</p>
          </div>

          <p className="hobbiesDescription">
            Hitting gym and pulling weights to stay active and fit.
          </p>
        </CarouselItem>
        <CarouselItem>
          <div className="itemInfo">
            <span>
              <GiCook />
            </span>
            <p>Experimenting in the Kitchen</p>
          </div>

          <p className="hobbiesDescription">
            Enjoy learning new cooking techniques and trying out new recipies.
          </p>
        </CarouselItem>
        <CarouselItem>
          <div className="itemInfo">
            <span>
              <TbGardenCartOff />
            </span>
            <p>Gardening</p>
          </div>
          <p className="hobbiesDescription">
            Avid gardener growing and nuturing different varities of plants and
            flowers.
          </p>
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default Hobbies;
