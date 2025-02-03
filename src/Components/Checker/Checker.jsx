import React from "react";
import { useState } from "react";
import { UserButton } from "@clerk/clerk-react";
import { useEffect } from "react";

function Checker() {
  //   const [user, setuser] = useState(null);
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-D0QRFEEV20");
  }, []);

  const handleSearch = () => {
    if (!userId || !serverId) {
      alert("Please enter both ID and Server.");
      return;
    }

    const options = {
      method: "GET",
      url: `https://id-game-checker.p.rapidapi.com/mobile-legends/${userId}/${serverId}`,
      headers: {
        "x-rapidapi-key": "d7b7311843msh1b7fc6cc693bae3p10bdc9jsn98b66202a34d",
        "x-rapidapi-host": "id-game-checker.p.rapidapi.com",
      },
    };

    fetch(options.url, {
      method: options.method,
      headers: options.headers,
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setResult(data.data);
        if (data.data.msg === "id_not_found") {
          alert("ID not found please check the ID and Server");
        }
      })
      .catch((error) => {
        alert("Invalid ID or Server");
        // console.error("Error fetching data:", error);
      });
  };

  const regions = {
    IN: "India",
    SG: "Singapore",
    US: "United States",
    AU: "Australia",
    ID: "Indonesia",
    PH: "Philippines",
    BR: "Brazil",
    MY: "Malaysia",
    TH: "Thailand",
    VN: "Vietnam",
  };

  return (
    <div>
      <header>
        <div class="store-name">WALL-E OFFICAL</div>

        <div
          className="profile"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <p class="wlcm" style={{ padding: "30px" }}>
            <UserButton />
            {/* {user.displayName} */}
          </p>
        </div>
      </header>
      <div class="container">
        <div class="checker_box">
          <div class="temp">
            <input
              class="input"
              name="text"
              id="userId"
              placeholder="ID"
              type="text"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
            <input
              id="serverId"
              placeholder="Server"
              class="input"
              name="text"
              type="text"
              value={serverId}
              onChange={(e) => {
                setServerId(e.target.value);
              }}
            />
            <button
              type="button2"
              class="btn"
              id="searchButton"
              onClick={handleSearch}
            >
              <strong>Check</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </button>
          </div>

          <div class="result" id="result">
            {result && result.username ? (
              <>
                <pre>Name: {result.username}</pre>
                <pre>UserID: {result.id}</pre>
                <pre>Server: {result.server}</pre>
                <pre>Region: {regions[result.region]}</pre>
                <pre>Made In : {regions[result.made_in]}</pre>
              </>
            ) : (
              <pre>Helllo !!!</pre>
            )}
          </div>

          <h3 className="p-4 font-bold text-teal-700">
            DM for MLBB recharges !
          </h3>
          <a href="https://wa.me/+919175339978">
            <button class="Btn2">
              <div class="sign">
                <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                </svg>
              </div>
              <div class="text">Whatsapp</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Checker;
