import React from "react";
import "./Global.css";
// import rightarrow from "../src/assets/img/rightarrow.svg";
import Testimonial from "./Components/Testimonial.jsx";
import Benifits from "./Components/Benifits.jsx";
import Faq from "./Components/Faq.jsx";
import Form from "./Components/Form";
import { ImageList,ImageListItem } from "@mui/material";

const Gallery = () => {
  const itemData = [
    {
      img: "../assets/img/home1.svg",
      title: "Image 1",
    },
    {
      img: "../assets/img/home3.svg",
      title: "Image 2",
    },
    {
      img: "../assets/img/home3.svg",
      title: "Image 3",
    },
    {
      img: "../assets/img/home4.svg",
      title: "Image 2",
    },
    {
      img: "../assets/img/home5.svg",
      title: "Image 2",
    },
    {
      img: "../assets/img/home6.svg",
      title: "Image 2",
    },
    {
      img: "../assets/img/home7.svg",
      title: "Image 2",
    },

  ];
  return (
    <div>
      <section className="index-hero about-hero">
        <h1>Gallery</h1>
      </section>

      <div className="gallery">
        <h1>Photo Gallery</h1>
      <ImageList variant="masonry" cols={3} gap={8}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
      </div>

      <Testimonial/>
      <Benifits/>
      <Faq/>
      <Form/>
    </div>
  );
};

export default Gallery;
