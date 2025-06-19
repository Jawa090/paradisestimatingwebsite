import React from "react";
import { useNavigate } from "react-router-dom";

const ContractorsList = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "radial-gradient(ellipse at top right, #fbe7c6 0%, #fffbe9 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Poppins, Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", padding: "2rem 3vw 0 3vw" }}>
        <img
          src="/contractlistlogo.png"
          alt="ContractorsList Logo"
          style={{ height: 48, width: 48, objectFit: "contain", marginRight: 16 }}
        />
        <div>
          <div style={{ fontWeight: 700, fontSize: 28, letterSpacing: 0.5 }}>CONTRACTORSLIST</div>
          <div style={{ fontSize: 13, color: "#888", fontWeight: 500, letterSpacing: 1, marginTop: 2 }}>
            EMPOWERING GROWTH WITH AI
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 60,
          padding: "0 3vw",
        }}
      >
        {/* Large Logo */}
        <div>
          <img
            src="/contractlistlogo.png"
            alt="ContractorsList Large Logo"
            style={{ width: 320, height: 320, objectFit: "contain" }}
          />
        </div>
        {/* Text Content */}
        <div style={{ minWidth: 350, maxWidth: 500 }}>
          <div
            style={{
              color: "#aaa",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: 1,
              marginBottom: 10,
              textAlign: "left",
            }}
          >
            HI, I AM MORGAN, YOUR AI BASED GROWTH PARTNER
          </div>
          <div
            style={{
              fontWeight: 900,
              fontSize: 56,
              color: "#222",
              letterSpacing: -2,
              marginBottom: 18,
              textAlign: "left",
            }}
          >
            COMING SOON
          </div>
          <div
            style={{
              color: "#888",
              fontWeight: 600,
              fontSize: 18,
              marginBottom: 32,
              textAlign: "left",
              maxWidth: 400,
            }}
          >
            SOMETHING AWESOME IN THE WORK TO REVOLUTIONIZE YOUR CONSTRUCTION BUSINESS GROWTH!
          </div>
          <div style={{ position: "relative", marginBottom: 40 }}>
            <button
              style={{
                background: "#FFD600",
                color: "#222",
                fontWeight: 700,
                fontSize: 20,
                border: "none",
                borderRadius: 8,
                padding: "14px 38px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                cursor: "pointer",
                marginBottom: 8,
              }}
              onClick={() => navigate("/contact")}
            >
              REACH OUT
            </button>
            <div style={{ position: "relative", width: 120, margin: "0 auto" }}>
              <span
                style={{
                  color: "#222",
                  fontFamily: "cursive",
                  fontSize: 20,
                  position: "absolute",
                  left: 0,
                  top: 30,
                }}
              >
                click me
              </span>
              {/* Arrow SVG */}
              <svg
                width="70"
                height="50"
                viewBox="0 0 70 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", left: 60, top: 10 }}
              >
                <path
                  d="M0 0 C60 40, 60 40, 70 50"
                  stroke="#FFD600"
                  strokeWidth="5"
                  fill="none"
                />
                <polygon points="70,50 65,45 75,45" fill="#FFD600" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "1.5rem 0 1rem 0",
          color: "#444",
          fontWeight: 600,
          fontSize: 16,
          letterSpacing: 1,
        }}
      >
        <span style={{ fontSize: 22, verticalAlign: "middle" }}>©</span> 2025 CONTRACTORSLIST.COM. ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default ContractorsList;