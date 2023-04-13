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
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            width: "200px",
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

        <div style={{ margin: "0 auto" }}>
          {user && (
            <div>
              <div
                style={{
                  padding: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  border: "3px solid gray",
                  borderRadius: "20px",
                  maxWidth: "80vw",
                  alignItems: "center",
                  margin: "30px",
                  marginLeft: "40px",
                }}
              >
                <div>
                  <h1 className="item">{userImage}</h1>

                  <h1
                    className="text-white"
                    style={{ color: "white", fontSize: "14pt" }}
                  >
                    {user}
                  </h1>
                </div>

                <h1
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  ❤️
                </h1>
                <div>
                  {partnerImage && <h1 className="item">{partnerImage}</h1>}

                  <h1
                    className="text-white"
                    style={{
                      color: "white",
                      fontSize: "14pt",
                    }}
                  >
                    {partner}
                  </h1>
                </div>
              </div>
            </div>
          )}

          {compatibility && (
            <div
              style={{
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "15pt" }} className="text-white">
                  Compatibility Score:
                </h1>
                <h1
                  style={{
                    marginLeft: "5px",
                    color: "white",
                    backgroundColor: "green",
                    padding: "10px",
                    borderRadius: "10px",
                    fontSize: "15pt",
                  }}
                >
                  {compatibility}
                </h1>
              </div>

              <p className="text-white" style={{ width: "80vw" }}>
                {user} and {partner} {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
