import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./simple_slider.css";

function SampleNextArrow({ onClick }) {
  return (
    <div className="btn_Left btn_arrow simple_btn1" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}
function SamplePrevArrow({ onClick }) {
  return (
    <div className="btn_Right btn_arrow simple_btn2" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}

export default function SimpleSlider() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1820,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const products = useSelector((state) => state.reProducts);
  const navigate = useNavigate();
  return (
    <div className="simple_slider">
      <Slider {...settings}>
        {products.map((item, index) => (
          <div className="card_slider new_Produc_1 " key={index}>
            <figure>
              <img src={item.images[0]} alt="" />
            </figure>
            <p>{item.name}</p>
            <hr />
            <div className="price_share">
              <div className="discount_pricw">
                <p>{item.price}</p>
                <span>{item.discount}</span>
              </div>
              <img src={item.share} alt="" />
              kdsb
            </div>
            <div className="sell_basket">
              <button
                onClick={() => {
                  navigate(`/view/product?id=${item.id}`);
                }}
              >
                Sotib olish
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
