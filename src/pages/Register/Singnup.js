import React, { useEffect, useState } from "react";
import "./siginup.css";
import NumberFormat from "react-number-format";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { acUser } from "../../Redux/User";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [custemer, setCustemer] = useState({});
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [viloyat, setViloyat] = useState([]);
  const [tuman, setTuman] = useState([]);
  const [code, setCode] = useState("toshkent_sh");
  const [password, setPassword] = useState(true);
  const parol = () => {
    setPassword(!password);
  };

  function hendelSubmit(e) {
    e.preventDefault();
    dispatch(acLoading(true));
    axios("https://api.sanone.uz/add/new/customer", {
      method: "POST",
      data: JSON.stringify(custemer),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log(res);

        if (res.data.status) {
          enqueueSnackbar(res.data.message, {
            variant: "success",
          });
          dispatch(acUser(res.data.user));
          dispatch(acLoading(false));
          navigate("/");
        } else {
          enqueueSnackbar(res.data.message, {
            variant: "error",
          });
          dispatch(acLoading(false));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false));
        enqueueSnackbar("Oynalarni to'ldiring", {
          variant: "error",
        });
      });
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.sanone.uz/selectRegion/${code}`,
    })
      .then((res) => {
        setViloyat(res.data.regions);
        setTuman(res.data.districts);
      })
      .catch((err) => console.log(err));
  }, [code]);

  return (
    <div className="siginup">
      <form id="myProfile" onSubmit={hendelSubmit}>
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z"
            fill="#A18B7F"
          />
          <path
            d="M38.0342 31.9166C41.938 28.8443 42.6108 23.1949 39.5386 19.2911C36.4663 15.3873 30.8169 14.7144 26.9131 17.7867C23.0093 20.8589 22.3428 26.502 25.4087 30.4058C25.8467 30.9644 26.3545 31.4722 26.9131 31.9102C21.7842 33.9668 18.2041 38.6768 17.5947 44.1675C17.5058 44.9927 18.1025 45.7418 18.9277 45.8306C19.7529 45.9195 20.5019 45.3228 20.5908 44.4976C21.3271 37.9214 27.2622 33.1861 33.8384 33.9224C39.3989 34.5445 43.7851 38.9371 44.4136 44.4976C44.4961 45.2593 45.1435 45.837 45.9116 45.8306H46.0766C46.8955 45.7354 47.4858 44.9991 47.397 44.1802C46.7876 38.6768 43.1885 33.9605 38.0342 31.9166ZM32.4736 30.8501C29.1665 30.8501 26.4814 28.1651 26.4814 24.858C26.4814 21.5508 29.1665 18.8658 32.4736 18.8658C35.7807 18.8658 38.4658 21.5508 38.4658 24.858C38.4658 28.1651 35.7871 30.8501 32.4736 30.8501Z"
            fill="white"
          />
        </svg>
        <div className="sign_name">
          <div className="sing_i_1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4444 14.4055C16.0391 13.4455 15.451 12.5735 14.7127 11.8381C13.9768 11.1005 13.1049 10.5125 12.1454 10.1064C12.1368 10.1021 12.1282 10.1 12.1196 10.0957C13.4581 9.12891 14.3282 7.5541 14.3282 5.77734C14.3282 2.83398 11.9434 0.449219 9.00005 0.449219C6.05669 0.449219 3.67193 2.83398 3.67193 5.77734C3.67193 7.5541 4.54205 9.12891 5.88052 10.0979C5.87193 10.1021 5.86333 10.1043 5.85474 10.1086C4.89224 10.5146 4.02857 11.0969 3.28736 11.8402C2.54982 12.5762 1.96178 13.4481 1.55572 14.4076C1.1568 15.347 0.941656 16.3542 0.921929 17.3746C0.921355 17.3975 0.925377 17.4204 0.933758 17.4417C0.942138 17.4631 0.954707 17.4825 0.970725 17.4989C0.986742 17.5153 1.00588 17.5284 1.02702 17.5373C1.04816 17.5462 1.07087 17.5508 1.0938 17.5508H2.38287C2.4774 17.5508 2.55259 17.4756 2.55474 17.3832C2.59771 15.7246 3.26373 14.1713 4.44107 12.9939C5.65923 11.7758 7.27701 11.1055 9.00005 11.1055C10.7231 11.1055 12.3409 11.7758 13.559 12.9939C14.7364 14.1713 15.4024 15.7246 15.4454 17.3832C15.4475 17.4777 15.5227 17.5508 15.6172 17.5508H16.9063C16.9292 17.5508 16.9519 17.5462 16.9731 17.5373C16.9942 17.5284 17.0134 17.5153 17.0294 17.4989C17.0454 17.4825 17.058 17.4631 17.0663 17.4417C17.0747 17.4204 17.0788 17.3975 17.0782 17.3746C17.0567 16.3477 16.844 15.3486 16.4444 14.4055ZM9.00005 9.47266C8.01392 9.47266 7.0858 9.08809 6.38755 8.38984C5.68931 7.6916 5.30474 6.76348 5.30474 5.77734C5.30474 4.79121 5.68931 3.86309 6.38755 3.16484C7.0858 2.4666 8.01392 2.08203 9.00005 2.08203C9.98619 2.08203 10.9143 2.4666 11.6126 3.16484C12.3108 3.86309 12.6954 4.79121 12.6954 5.77734C12.6954 6.76348 12.3108 7.6916 11.6126 8.38984C10.9143 9.08809 9.98619 9.47266 9.00005 9.47266Z"
                fill="#7C7C7C"
              />
            </svg>

            <input
              type="text"
              placeholder="Ism"
              onChange={(e) => {
                setCustemer({ ...custemer, name: e.target.value });
              }}
            />
          </div>

          <div className="sing_i_1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4444 14.4055C16.0391 13.4455 15.451 12.5735 14.7127 11.8381C13.9768 11.1005 13.1049 10.5125 12.1454 10.1064C12.1368 10.1021 12.1282 10.1 12.1196 10.0957C13.4581 9.12891 14.3282 7.5541 14.3282 5.77734C14.3282 2.83398 11.9434 0.449219 9.00005 0.449219C6.05669 0.449219 3.67193 2.83398 3.67193 5.77734C3.67193 7.5541 4.54205 9.12891 5.88052 10.0979C5.87193 10.1021 5.86333 10.1043 5.85474 10.1086C4.89224 10.5146 4.02857 11.0969 3.28736 11.8402C2.54982 12.5762 1.96178 13.4481 1.55572 14.4076C1.1568 15.347 0.941656 16.3542 0.921929 17.3746C0.921355 17.3975 0.925377 17.4204 0.933758 17.4417C0.942138 17.4631 0.954707 17.4825 0.970725 17.4989C0.986742 17.5153 1.00588 17.5284 1.02702 17.5373C1.04816 17.5462 1.07087 17.5508 1.0938 17.5508H2.38287C2.4774 17.5508 2.55259 17.4756 2.55474 17.3832C2.59771 15.7246 3.26373 14.1713 4.44107 12.9939C5.65923 11.7758 7.27701 11.1055 9.00005 11.1055C10.7231 11.1055 12.3409 11.7758 13.559 12.9939C14.7364 14.1713 15.4024 15.7246 15.4454 17.3832C15.4475 17.4777 15.5227 17.5508 15.6172 17.5508H16.9063C16.9292 17.5508 16.9519 17.5462 16.9731 17.5373C16.9942 17.5284 17.0134 17.5153 17.0294 17.4989C17.0454 17.4825 17.058 17.4631 17.0663 17.4417C17.0747 17.4204 17.0788 17.3975 17.0782 17.3746C17.0567 16.3477 16.844 15.3486 16.4444 14.4055ZM9.00005 9.47266C8.01392 9.47266 7.0858 9.08809 6.38755 8.38984C5.68931 7.6916 5.30474 6.76348 5.30474 5.77734C5.30474 4.79121 5.68931 3.86309 6.38755 3.16484C7.0858 2.4666 8.01392 2.08203 9.00005 2.08203C9.98619 2.08203 10.9143 2.4666 11.6126 3.16484C12.3108 3.86309 12.6954 4.79121 12.6954 5.77734C12.6954 6.76348 12.3108 7.6916 11.6126 8.38984C10.9143 9.08809 9.98619 9.47266 9.00005 9.47266Z"
                fill="#7C7C7C"
              />
            </svg>

            <input
              type="text"
              placeholder="Familiya"
              onChange={(e) => {
                setCustemer({ ...custemer, surname: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="sign_name">
          <div className="sing_i_1">
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2694 0C15.6602 0 16.7876 1.12741 16.7876 2.51814V10.9119C16.7876 12.3026 15.6602 13.4301 14.2694 13.4301H2.51814C1.12741 13.4301 0 12.3026 0 10.9119V2.51814C0 1.12741 1.12741 0 2.51814 0H14.2694ZM15.1088 2.79345L8.94652 8.1861C8.65642 8.43994 8.23519 8.46109 7.92324 8.24956L7.84105 8.1861L1.67876 2.79429V10.9119C1.67876 11.3755 2.05456 11.7513 2.51814 11.7513H14.2694C14.733 11.7513 15.1088 11.3755 15.1088 10.9119V2.79345ZM13.833 1.67876H2.95293L8.39378 6.43907L13.833 1.67876Z"
                fill="#7C7C7C"
                fillOpacity="0.7"
              />
            </svg>

            <input
              type="email"
              placeholder="Elektron pochta"
              onChange={(e) => {
                setCustemer({ ...custemer, email: e.target.value });
              }}
            />
          </div>
          <div className="sing_i_1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.70409 4.32234L5.05287 1.26322C4.747 0.910297 4.18693 0.912577 3.83177 1.26821L1.65153 3.45134C1.00266 4.10108 0.816926 5.06604 1.19187 5.83955C3.45019 10.4985 7.16752 14.2208 11.8203 16.4821C12.5928 16.8575 13.5565 16.6715 14.2054 16.0218L16.4063 13.8179C16.7629 13.4609 16.7635 12.8975 16.4079 12.5922L13.3353 9.95498C13.0137 9.67896 12.5148 9.71517 12.1926 10.0379L11.1237 11.1081C11.0048 11.2272 10.8262 11.2556 10.6903 11.1773C8.94008 10.1682 7.49743 8.72362 6.48963 6.97112C6.41137 6.83503 6.43983 6.65608 6.55867 6.53708L7.62423 5.4701C7.9479 5.14601 7.98286 4.64398 7.70409 4.32234V4.32234Z"
                stroke="#7C7C7C"
                strokeOpacity="0.7"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <NumberFormat
              format="+99 8## ### ####"
              allowEmptyFormatting
              mask=""
              onValueChange={(e) => {
                const { value } = e;
                setCustemer({ ...custemer, phone: value });
              }}
            />
          </div>
        </div>
        <div className="sign_province">
          {/* -------------------------------------------------------------------------- */}

          <select
            onChange={(e) => {
              setCode(e.target.value);
              setCustemer({ ...custemer, region: e.target.value });
            }}
          >
            <option value="">Viloyatni tanlang</option>
            {viloyat.map((item) => (
              <option value={item.code} key={item.code}>
                {item.name}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => {
              setCustemer({ ...custemer, district: e.target.value });
            }}
          >
            <option value="">tumani tanlang</option>

            {tuman.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sign_name mfy2 ">
          <div className="sing_i_1">
            <input
              type="text"
              placeholder="MFY"
              onChange={(e) => {
                setCustemer({ ...custemer, mfy: e.target.value });
              }}
            />
          </div>
          <div className="sing_i_1">
            <input
              type="text"
              placeholder="Ko’cha"
              onChange={(e) => {
                setCustemer({ ...custemer, street: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="sign_name">
          <div className="sing_i_1">
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2694 0C15.6602 0 16.7876 1.12741 16.7876 2.51814V10.9119C16.7876 12.3026 15.6602 13.4301 14.2694 13.4301H2.51814C1.12741 13.4301 0 12.3026 0 10.9119V2.51814C0 1.12741 1.12741 0 2.51814 0H14.2694ZM15.1088 2.79345L8.94652 8.1861C8.65642 8.43994 8.23519 8.46109 7.92324 8.24956L7.84105 8.1861L1.67876 2.79429V10.9119C1.67876 11.3755 2.05456 11.7513 2.51814 11.7513H14.2694C14.733 11.7513 15.1088 11.3755 15.1088 10.9119V2.79345ZM13.833 1.67876H2.95293L8.39378 6.43907L13.833 1.67876Z"
                fill="#7C7C7C"
                fillOpacity="0.7"
              />
            </svg>

            <input
              type="login"
              placeholder="Login"
              onChange={(e) => {
                setCustemer({ ...custemer, login: e.target.value });
              }}
            />
          </div>
          <div className="sing_i_1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.70409 4.32234L5.05287 1.26322C4.747 0.910297 4.18693 0.912577 3.83177 1.26821L1.65153 3.45134C1.00266 4.10108 0.816926 5.06604 1.19187 5.83955C3.45019 10.4985 7.16752 14.2208 11.8203 16.4821C12.5928 16.8575 13.5565 16.6715 14.2054 16.0218L16.4063 13.8179C16.7629 13.4609 16.7635 12.8975 16.4079 12.5922L13.3353 9.95498C13.0137 9.67896 12.5148 9.71517 12.1926 10.0379L11.1237 11.1081C11.0048 11.2272 10.8262 11.2556 10.6903 11.1773C8.94008 10.1682 7.49743 8.72362 6.48963 6.97112C6.41137 6.83503 6.43983 6.65608 6.55867 6.53708L7.62423 5.4701C7.9479 5.14601 7.98286 4.64398 7.70409 4.32234V4.32234Z"
                stroke="#7C7C7C"
                strokeOpacity="0.7"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type={password ? "password" : "text"}
              placeholder="parol"
              onChange={(e) => {
                setCustemer({ ...custemer, password: e.target.value });
              }}
            />
            <button onClick={parol} id="tyupe">
              {password ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye"
                  viewBox="0 0 16 16"
                  id="ochiq"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-slash"
                  viewBox="0 0 16 16"
                  id="yopiq"
                >
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              )}{" "}
            </button>
          </div>
          <div className="sing_i_1">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.70409 4.32234L5.05287 1.26322C4.747 0.910297 4.18693 0.912577 3.83177 1.26821L1.65153 3.45134C1.00266 4.10108 0.816926 5.06604 1.19187 5.83955C3.45019 10.4985 7.16752 14.2208 11.8203 16.4821C12.5928 16.8575 13.5565 16.6715 14.2054 16.0218L16.4063 13.8179C16.7629 13.4609 16.7635 12.8975 16.4079 12.5922L13.3353 9.95498C13.0137 9.67896 12.5148 9.71517 12.1926 10.0379L11.1237 11.1081C11.0048 11.2272 10.8262 11.2556 10.6903 11.1773C8.94008 10.1682 7.49743 8.72362 6.48963 6.97112C6.41137 6.83503 6.43983 6.65608 6.55867 6.53708L7.62423 5.4701C7.9479 5.14601 7.98286 4.64398 7.70409 4.32234V4.32234Z"
                stroke="#7C7C7C"
                strokeOpacity="0.7"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type={password ? "password" : "text"}
              placeholder="qayta parol"
              onChange={(e) => {
                setCustemer({ ...custemer, password: e.target.value });
              }}
            />
            <button onClick={parol} id="tyupe">
              {password ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye"
                  viewBox="0 0 16 16"
                  id="ochiq"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-slash"
                  viewBox="0 0 16 16"
                  id="yopiq"
                >
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              )}{" "}
            </button>
          </div>
        </div>
        <p
          style={{
            width: "100%",
            textAlign: "end",
            textDecoration: "underline",
            color: "#00bcd4",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/signin");
          }}
        >
          Men ro'yxatdan o'tganman
        </p>

        <button type="submit">Kirish</button>
      </form>
    </div>
  );
}
