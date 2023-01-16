import React from "react";
import { Button } from "react-bootstrap";

export function About() {
  return (
    <div
      style={{
        backgroundColor: "#00527e",
        height: "125%",
        width: "100%",
        position: "absolute",
      }}
    >
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          margin: "0 auto",
          width: "400px",
          marginTop: "30px",
          marginBottom: "30px",
          flexWrap: "wrap",
          color: "white",
        }}
      >
        Redefining Astrology. One Horoscope at a time.
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          margin: "auto",
          width: "400px",
          marginTop: "50px",
          flexWrap: "wrap",
          color: "white",
          justifyContent: "flexStart",
        }}
      >
        <p>
          From the University of Florida* comes the new era of astrological
          study. Through powerful machine learning algorithms and data
          collection services, we have created the most accurate compatibility
          detector. With a 90% or above compatibility rating, we will ensure
          that you and your significant other begin your new life on the right
          foot.
        </p>
        <img src={require("./assets/bad_code.png")} alt="pic" />
        <p style={{ marginTop: "20px" }}>
          With innovative algorithms such as the isNotEquals algorithm shown
          above, we can effortlessly provide insightful information about you
          and your partner's relationship. that run at an astoundingly fast O of
          n^3, we are pushing the boundaries of astrology to greater heights.
        </p>

        <Button href="/">Try Astrologer Now</Button>
        <p style={{ marginTop: "55px", color: "gray", fontSize: "10px" }}>
          *Not associated with the University of Florida
        </p>
      </div>
    </div>
  );
}
