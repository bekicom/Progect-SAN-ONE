import React, { useEffect, useState } from "react";
import "./Home.css";
import position_1 from "../../asest/home/position/Group 48.png";
import position_2 from "../../asest/home/position/p_2.png";
import position_k from "../../asest/home/position/p_krasofka.png";
import position_4 from "../../asest/home/position/p_4.png";
import position_5 from "../../asest/home/position/p_5.png";
import position_6 from "../../asest/home/position/p_6.png";
import position_7 from "../../asest/home/position/YANGI KO‘RINISH (1).png";

import new_p_1 from "../../asest/home/section2/new_P_1.jpg";
import share from "../../asest/home/section2/share.png";

import sec_3 from "../../asest/home/section3/sec_3.png";
import Slider from "react-slick";
import axios from "axios";

export function Home() {
  const [produc, setProduc] = useState([]);

  useEffect(() => {
    axios.get("https://sanone.uz/view/products").then((res) => {
      setProduc(res.data);
    });
  });

  const new_product = [
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
  ];

  const best_seller = [
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
    {
      img: new_p_1,
      name: "Lorem ipsum",
      price: 399000,
      discount: 499000,
      share: share,
    },
  ];
  //  ------------------- corusel

  return (
    <div className="home">
      <div className="home_section1">
        <div className="home_text">
          <div className="text_semmer">
            <p>
              Yozgi mavsum uchun<span>yangi ko‘rinish</span>
            </p>
            <span>
              Yangicha uslub va ko’rinishda ishlab chiqilgan, yangi
              poyabzallarimiz bilan yoz faslini yanada yorqinroq, yanada
              qulayroq o’tkazasiz!
            </span>
          </div>

          <div className="see_btn">
            <button>KO‘RISH</button>
            <button>Ro’yhatdan o’tish</button>
          </div>
        </div>

        <div className="position_1">
          <img src={position_1} alt="" />
        </div>
        <div className="position_2">
          <img src={position_2} alt="" />
        </div>
        <div className="position_3">
          <img src={position_k} alt="" />
        </div>
        <div className="position_4">
          <img src={position_4} alt="" />
        </div>
        <div className="position_5">
          <img src={position_5} alt="" />
        </div>
        <div className="position_6">
          <img src={position_6} alt="" />
        </div>
        <div className="position_7">
          <img src={position_7} alt="" />
        </div>
      </div>

      <div className="home_section_2">
        <div className="sec_2_text">
          <p>Yangi mahsulotlar</p>
          <span>Eng so‘nggi mahsulotlarimizni ko‘rib chiqing va tanlang</span>
        </div>
        <div className="new_products">
       
          {produc.map((item) => (
            
            <div className="new_Produc_1">
              <p>{item.name}</p>
              <hr />
              <div className="price_share">
                <div className="discount_pricw">
                  <p>{item.price}</p>
                  <span>{item.discount}</span>
                </div>
                <img src={item.share} alt="" />
              </div>
              <div className="sell_basket">
                <button>Sotib olish</button>
                <button>Savatga</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section_3">
        <img src={sec_3} alt="" />
      </div>

      <div className="section_4">
        <div className="section_4_text">
          <p>Eng ko‘p sotilgan</p>
          <span>Eng haridorgir bo‘lgan mahsulotlarimizni ko‘rib chiqing</span>
        </div>
        <div className="best_seller">
          <div className="new_products">
            {best_seller.map((item) => (
              <div className="new_Produc_1">
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <hr />
                <div className="price_share">
                  <div className="discount_pricw">
                    <p>{item.price}</p>
                    <span>{item.discount}</span>
                  </div>
                  <img src={item.share} alt="" />
                </div>
                <div className="sell_basket">
                  <button>Sotib olish</button>
                  <button>Savatga</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sectio_5">
        <Slider />
      </div>

      <div className="section_6_futter">
        <div className="section_f_text">
          <span>Siz bilan bog‘lanishdan mamnunmiz!</span>
          <span>
            Manzilimiz:<br></br> Toshkent Shahar, Birnarsa tumani, Birnarsa
            ko‘cha 12-uy.
          </span>

          <span>Murojaat uchun telefon:</span>
          <p>+998 (88) 413 00 00</p>
          <span>Ijtimoiy tarmoqlarda bizni toping</span>
          <div className="contac_i_f_t">
            <a href="{salom}">
              <svg
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.7991 14.6622C43.7991 12.8742 45.2486 11.4247 47.0366 11.4247C48.8246 11.4247 50.274 12.8742 50.274 14.6622C50.274 16.4502 48.8246 17.8997 47.0366 17.8997C45.2486 17.8997 43.7991 16.4502 43.7991 14.6622Z"
                  fill="#D2D2D2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.8492 15.4716C22.3562 15.4716 15.4712 22.3565 15.4712 30.8495C15.4712 39.3426 22.3562 46.2275 30.8492 46.2275C39.3422 46.2275 46.2272 39.3426 46.2272 30.8495C46.2272 22.3565 39.3422 15.4716 30.8492 15.4716ZM20.3274 30.8495C20.3274 25.0385 25.0382 20.3278 30.8492 20.3278C36.6602 20.3278 41.371 25.0385 41.371 30.8495C41.371 36.6606 36.6602 41.3713 30.8492 41.3713C25.0382 41.3713 20.3274 36.6606 20.3274 30.8495Z"
                  fill="#D2D2D2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M47.8727 1.1717C36.6497 -0.082625 25.0488 -0.082625 13.8258 1.1717C7.31187 1.89974 2.05314 7.03116 1.2873 13.579C-0.0547519 25.0536 -0.054752 36.6455 1.2873 48.1201C2.05314 54.6679 7.31187 59.7994 13.8258 60.5274C25.0488 61.7817 36.6497 61.7817 47.8727 60.5274C54.3866 59.7994 59.6454 54.6679 60.4112 48.1201C61.7533 36.6455 61.7533 25.0536 60.4112 13.579C59.6454 7.03116 54.3866 1.89974 47.8727 1.1717ZM14.3652 5.99786C25.2297 4.7836 36.4688 4.7836 47.3333 5.99786C51.6395 6.47914 55.0889 9.87723 55.5879 14.1432C56.8861 25.2429 56.8861 36.4562 55.5879 47.5559C55.0889 51.8219 51.6394 55.22 47.3333 55.7012C36.4688 56.9155 25.2297 56.9155 14.3652 55.7012C10.0591 55.22 6.60957 51.8219 6.11063 47.5559C4.81241 36.4562 4.81241 25.2429 6.11063 14.1432C6.60957 9.87723 10.0591 6.47914 14.3652 5.99786Z"
                  fill="#D2D2D2"
                />
              </svg>
            </a>
            <a href="{salom2}">
              <svg
                width="38"
                height="64"
                viewBox="0 0 38 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.9538 5.26265C17.1413 2.07515 21.4645 0.284424 25.9723 0.284424L34.7134 0.284424C36.0544 0.284424 37.1415 1.37152 37.1415 2.71253V14.3674C37.1415 15.7084 36.0544 16.7955 34.7134 16.7955H25.9723C25.8435 16.7955 25.72 16.8467 25.6289 16.9378C25.5378 17.0288 25.4866 17.1524 25.4866 17.2811V23.5942H34.7134C35.4611 23.5942 36.1671 23.9387 36.6273 24.528C37.0874 25.1174 37.2504 25.8858 37.069 26.6112L34.1553 38.2661C33.8851 39.347 32.9139 40.1053 31.7997 40.1053H25.4866V60.987C25.4866 62.328 24.3995 63.4151 23.0585 63.4151H11.4036C10.0626 63.4151 8.97555 62.328 8.97555 60.987V40.1053H2.66248C1.32147 40.1053 0.234375 39.0182 0.234375 37.6772L0.234375 26.0223C0.234375 24.6813 1.32147 23.5942 2.66248 23.5942H8.97555V17.2811C8.97555 12.7733 10.7663 8.45015 13.9538 5.26265ZM25.9723 5.14063C22.7524 5.14063 19.6644 6.41972 17.3876 8.6965C15.1108 10.9733 13.8318 14.0613 13.8318 17.2811V26.0223C13.8318 27.3633 12.7447 28.4504 11.4036 28.4504H5.09058V35.2491H11.4036C12.7447 35.2491 13.8318 36.3362 13.8318 37.6772V58.5589H20.6304V37.6772C20.6304 36.3362 21.7175 35.2491 23.0585 35.2491H29.9039L31.6036 28.4504H23.0585C21.7175 28.4504 20.6304 27.3633 20.6304 26.0223V17.2811C20.6304 15.8644 21.1932 14.5057 22.195 13.5039C23.1968 12.5021 24.5555 11.9393 25.9723 11.9393L32.2853 11.9393V5.14063H25.9723Z"
                  fill="#D2D2D2"
                />
              </svg>
            </a>
            <a href="{salom}">
              <svg
                width="67"
                height="59"
                viewBox="0 0 67 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7376 35.3881C14.8793 35.4358 15.0223 35.4697 15.1652 35.4905C15.3211 35.8566 15.5224 36.3304 15.7573 36.8844C16.3306 38.2365 17.103 40.0651 17.9003 41.9728C19.5263 45.8632 21.1665 49.8735 21.5287 51.0215C21.9771 52.4405 22.4511 53.4053 22.9686 54.0639C23.2362 54.4045 23.5456 54.7019 23.9077 54.9271C24.09 55.0404 24.2825 55.1335 24.4835 55.2027C24.4923 55.2058 24.5012 55.2088 24.51 55.2117C25.5461 55.6029 26.4906 55.4398 27.082 55.2407C27.3985 55.1341 27.6545 55.0053 27.8359 54.9011C27.9285 54.8479 28.0066 54.7982 28.069 54.7563L28.0837 54.7463L37.2335 49.0404L47.8022 57.1431C47.9583 57.2628 48.1283 57.363 48.3085 57.4416C49.5782 57.9957 50.8077 58.189 51.9643 58.031C53.1188 57.8732 54.0356 57.3881 54.718 56.8422C55.3863 56.3075 55.8393 55.7088 56.1214 55.2638C56.2655 55.0366 56.3737 54.8356 56.4499 54.6817C56.4883 54.6043 56.5191 54.5377 56.5429 54.4841L56.5734 54.4135L56.5849 54.3859L56.5898 54.374L56.5919 54.3686L56.594 54.3635C56.6495 54.2247 56.6921 54.081 56.7212 53.9343L66.3696 5.28968C66.4005 5.13411 66.416 4.97589 66.416 4.81728C66.416 3.39275 65.8792 2.03819 64.6172 1.21622C63.5385 0.513692 62.3368 0.483453 61.5774 0.541096C60.7582 0.603277 60.0015 0.805513 59.4938 0.967115C59.2296 1.05122 59.0081 1.13236 58.8483 1.19426C58.7681 1.22538 58.7023 1.25207 58.6532 1.27243L58.6164 1.28792L4.50626 22.5145L4.49925 22.5171C4.46476 22.5296 4.42049 22.5461 4.36788 22.5666C4.2631 22.6074 4.12271 22.6649 3.95873 22.7392C3.63892 22.8842 3.19027 23.1107 2.72987 23.426C1.99436 23.9296 0.302812 25.3091 0.587648 27.586C0.814882 29.4025 2.0593 30.5181 2.81749 31.0546C3.2338 31.3491 3.6293 31.5598 3.91734 31.6969C4.05097 31.7605 4.32841 31.8732 4.44879 31.9221L4.47917 31.9345L14.7376 35.3881ZM60.5101 5.75952L60.5026 5.7628C60.4756 5.77451 60.4485 5.78574 60.4211 5.79646L6.24526 27.0489C6.21697 27.06 6.18847 27.0705 6.15979 27.0806L6.12963 27.092C6.09498 27.1055 6.03662 27.1292 5.96338 27.1623C5.92186 27.1812 5.87852 27.2017 5.83433 27.2237C5.89504 27.2579 5.95314 27.2877 6.00477 27.3122C6.05433 27.3358 6.09214 27.3519 6.11284 27.3605L16.287 30.7857C16.4732 30.8484 16.6468 30.9314 16.8062 31.0316L50.4007 11.3656L50.4321 11.347C50.4566 11.3325 50.4887 11.3139 50.5273 11.2922C50.6037 11.2489 50.7088 11.1914 50.8337 11.1278C51.0669 11.0091 51.4399 10.833 51.8601 10.7031C52.1527 10.6127 53.0154 10.3579 53.9481 10.6571C54.5238 10.8417 55.1198 11.2387 55.5074 11.9111C55.7 12.2452 55.8027 12.5808 55.8523 12.888C55.9844 13.3719 55.9634 13.8498 55.8601 14.2623C55.6375 15.151 55.0132 15.8443 54.445 16.3745C53.9583 16.8291 47.6601 22.9021 41.4469 28.8971C38.3485 31.8868 35.2817 34.8469 32.9894 37.0597L31.4838 38.5131L50.494 53.0877C50.93 53.2438 51.1877 53.2357 51.307 53.2194C51.4491 53.2 51.5653 53.1454 51.6841 53.0503C51.817 52.944 51.9332 52.8006 52.02 52.6636L52.0235 52.658L61.3814 5.47835C61.2425 5.51173 61.1021 5.55148 60.9667 5.59456C60.8134 5.64336 60.687 5.68983 60.6032 5.72231C60.5617 5.73839 60.5318 5.75059 60.5156 5.75732L60.5101 5.75952ZM33.117 45.8844L29.3244 42.9767L28.4054 48.8226L33.117 45.8844ZM25.8451 37.2068L29.6167 33.5657C31.9091 31.3528 34.9762 28.3924 38.075 25.4025L41.2234 22.365L20.115 34.7217L20.2283 34.9887C20.8036 36.3456 21.5794 38.1823 22.381 40.1001C22.9803 41.5342 23.607 43.0441 24.1779 44.4421L25.0942 38.6133C25.1826 38.0513 25.4571 37.5648 25.8451 37.2068Z"
                  fill="#D2D2D2"
                />
              </svg>
            </a>
          </div>
          <button>
            RO‘YXATDAN O‘TISH
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 5.24996H10.145L7.4225 1.97996C7.2952 1.8268 7.23395 1.62934 7.25223 1.43102C7.27052 1.2327 7.36684 1.04977 7.52 0.922463C7.67316 0.795159 7.87062 0.733912 8.06894 0.752197C8.26726 0.770482 8.4502 0.8668 8.5775 1.01996L12.3275 5.51996C12.3527 5.55576 12.3753 5.59336 12.395 5.63246C12.395 5.66996 12.395 5.69246 12.4475 5.72996C12.4815 5.81596 12.4993 5.9075 12.5 5.99996C12.4993 6.09243 12.4815 6.18397 12.4475 6.26996C12.4475 6.30746 12.4475 6.32996 12.395 6.36746C12.3753 6.40657 12.3527 6.44417 12.3275 6.47996L8.5775 10.98C8.50698 11.0646 8.41868 11.1327 8.31887 11.1794C8.21905 11.226 8.11018 11.2501 8 11.25C7.82476 11.2503 7.65493 11.1893 7.52 11.0775C7.44406 11.0145 7.38128 10.9372 7.33527 10.8499C7.28925 10.7627 7.2609 10.6672 7.25185 10.5689C7.24279 10.4707 7.2532 10.3717 7.28249 10.2775C7.31177 10.1833 7.35935 10.0957 7.4225 10.02L10.145 6.74996H1.25C1.05109 6.74996 0.860322 6.67095 0.719669 6.53029C0.579017 6.38964 0.5 6.19888 0.5 5.99996C0.5 5.80105 0.579017 5.61029 0.719669 5.46963C0.860322 5.32898 1.05109 5.24996 1.25 5.24996Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <p>sakhjgjsa</p>
    </div>
  );
}