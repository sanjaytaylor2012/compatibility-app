import { Stack, Button, Form } from "react-bootstrap";
import { useState, useRef } from "react";
import { useSigns } from "./contexts/signContext";

import "./App.css";

function App() {
  const {
    findUserPic,
    findPartnerPic,
    userImage,
    partnerImage,
    findDescription,
    compatibility,
    description,
  } = useSigns();
  const [user, setUser] = useState();
  const [partner, setPartner] = useState();
  const userRef = useRef();
  const partnerRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(userRef.current.value);
    setPartner(partnerRef.current.value);
    findUserPic(userRef.current.value);
    findPartnerPic(partnerRef.current.value);
    findDescription({
      userName: userRef.current.value,
      partnerName: partnerRef.current.value,
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#00527e",
        height: "110%",
        width: "100%",
        position: "absolute",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          margin: "0 auto",
          width: "200px",
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">You</Form.Label>
            <Form.Select ref={userRef}>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
              >
                Select Sign
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Aries"
              >
                Aries
              </option>
              <option
                className="text-white"
                style={{ backgroundColor: "#00527e" }}
                value="Taurus"
              >
                Taurus
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Gemini"
              >
                Gemini
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Cancer"
              >
                Cancer
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Leo"
              >
                Leo
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Virgo"
              >
                Virgo
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Libra"
              >
                Libra
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Scorpius"
              >
                Scorpius
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Sagittarius"
              >
                Sagittarius
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Capricorn"
              >
                Capricorn
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Aquarius"
              >
                Aquarius
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Pisces"
              >
                Pisces
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Your Partner</Form.Label>
            <Form.Select aria-label="Default select example" ref={partnerRef}>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
              >
                Select Sign
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Aries"
              >
                Aries
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Taurus"
              >
                Taurus
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Gemini"
              >
                Gemini
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Cancer"
              >
                Cancer
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Leo"
              >
                Leo
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Virgo"
              >
                Virgo
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Libra"
              >
                Libra
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Scorpius"
              >
                Scorpius
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Sagittarius"
              >
                Sagittarius
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Capricorn"
              >
                Capricorn
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Aquarius"
              >
                Aquarius
              </option>
              <option
                style={{ backgroundColor: "#00527e" }}
                className="text-white"
                value="Pisces"
              >
                Pisces
              </option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
      {user && (
        <div style={{ margin: "0 auto" }}>
          <div
            style={{
              padding: "5px",
              display: "flex",
              margin: "40px 30px",
              marginTop: "30px",
              justifyContent: "center",
              border: "3px solid gray",
              borderRadius: "20px",
            }}
          >
            {userImage && <h1 className="item">{userImage}</h1>}
            {user && <h1 className="item">{user}</h1>}
            {user && (
              <h1 className="item" style={{ margin: "0 50px" }}>
                ❤️
              </h1>
            )}
            {partnerImage && <h1 className="item">{partnerImage}</h1>}
            {partner && <h1 className="item">{partner}</h1>}
          </div>
        </div>
      )}

      {compatibility && (
        <div style={{ margin: "0 auto", width: "600px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 className="text-white">Compatibility Score:</h1>
            <h1
              style={{
                marginLeft: "10px",
                marginTop: "-10px",
                color: "white",
                backgroundColor: "green",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              {compatibility}
            </h1>
          </div>
          <p className="text-white">
            {user} and {partner} {description}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
