/* eslint-disable prettier/prettier */
import { useState } from "react";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
// import "./slider.scss";
// import arowImg from '../../../../public/arrow.png'
// import MyVerticallyCenteredModal from "../../Fullviewcard/MyVerticallyCenteredModal"

function Slider({ images = [] }) { // Default images to an empty array if undefined
  const [modalShow, setModalShow] = useState(false);
  const [imageIndex, setImageIndex] = useState(null);

  // Default image URL if images are empty or undefined
  const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/mumtalikati-e8dbd.appspot.com/o/svgIcons%2FGroup%201865.png?alt=media&token=794f7eb8-9409-4199-a0a0-75fc3e576361';

  // Handle left and right arrow clicks
  const changeSlide = (direction) => {
    if (!images || images.length === 0) return; // Guard clause to prevent errors when images is undefined or empty

    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <>
      <div className="slider">
        {images.length > 0 && imageIndex !== null && (
          <div className="fullSlider">
            <div className="arrow" onClick={() => changeSlide("left")}>
              {images.length > 1 ? (
                <img src='arowImg' alt="mumtalikati" />
              ) : (
                <></>
              )}
            </div>
            <div className="imgContainer">
              <img src={images[imageIndex]} alt="mumtalikati" />
            </div>
            <div className="arrow" onClick={() => changeSlide("right")}>
              {images.length > 1 ? (
                <img src='arowImg' className="right" alt="mumtalikati" />
              ) : (
                <></>
              )}
            </div>

            <div className="close" onClick={() => setImageIndex(null)}>
              X
            </div>
          </div>
        )}

        <div className="bigImage">
          {/* Show the first image if it exists or use the default image */}
          <img
            src={images.length > 0 ? images[0] : defaultImage}
            alt="mumtalikati"
            // onClick={() => setModalShow(true)}
            type="button"
            // className="btn btn-primary mt-1 me-1"
            data-bs-toggle="modal"
            data-bs-target="#centermodal1"
          />
        </div>

        <div className={images.length > 2 ? "smallImages1" : "smallImages"}>
          {/* Display additional images if available or fallback to the default image list */}
          {images.length > 0 ? (
            images.slice(1, 4).map((image, index) => (
              <img
                src={image}
                alt="mumtalikati"
                key={index}
              />
            ))
          ) : (
            [defaultImage, defaultImage, defaultImage].map((image, index) => (
              <img
                src={image}
                alt="mumtalikati"
                key={index}
              />
            ))
          )}
        </div>

        <MyVerticallyCenteredModal
          // show={modalShow}
          images={images}
          // onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}

export default Slider;
