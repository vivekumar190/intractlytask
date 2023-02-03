import React, { useEffect, useState } from "react";
import "../App.css";
import ReactPlayer from "react-player";
import LeadForm from "./LeadForm";

const MainLayout = () => {
  const [selected, setSelected] = useState({
    url: "https://www.youtube.com/watch?v=HkGMT0Wwk48",
  });
  const [button, setButton] = useState();
  const [view, setView] = useState(1);
  useEffect(() => {
    setButton(selected?.button);
  }, [selected]);
  console.log(selected);
  console.log(button);
  console.log(view);
  const options = [
    " Sign up for free webinar",
    'Download "Campaign Structure Guide"',
  ];
  return (
    <div className="mainwrapper">
      <div className="container-fluid">
        <div className="row h-100 p-0">
          <div className="col-6 p-0">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={selected?.url}
                width="100%"
                height="100vh"
                // light={true}
                controls={true}
                playing={true}
                muted={
                  selected.url === "https://www.youtube.com/watch?v=HkGMT0Wwk48"
                    ? true
                    : false
                }
                config={{ youtube: { playerVars: { disablekb: 1 } } }}
                // playIcon={
                //   <img
                //     src="/play.png"
                //     height={60}
                //     width={60}
                //     className="playicon"
                //   ></img>
                // }
              />
            </div>
          </div>
          <div className="col-6 p-0 buttoncontainer">
            {view === 1 ? (
              <div className="buttoncontainer">
                <div className="buttongroup">
                  <button
                    className="button"
                    onClick={() => {
                      setSelected({
                        url: "https://www.youtube.com/watch?v=VmT3cChk0Ok",
                        button: 'Download "Campaign Structure Guide"',
                      });
                      setView(2);
                    }}
                  >
                    <div className="circle">A</div>Campaign Structure
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      setSelected({
                        url: "https://www.youtube.com/watch?v=Q_y8v-qNImA&list=PLO2yGQaNU5MClLd19cCZ4UDLrEnIFvXcS&index=7",
                        button: "Sign up for free webinar",
                      });
                      setView(2);
                    }}
                  >
                    <div className="circle">B</div>Learn Facebook basics
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      setSelected({
                        url: "https://www.youtube.com/watch?v=v9XxAAB9Wgc",
                        button: 'Download "Campaign Structure Guide"',
                      });
                      setView(2);
                    }}
                  >
                    <div className="circle">C</div>Campaign Structure
                  </button>
                </div>
              </div>
            ) : view == 2 ? (
              <button className="secondStepbutton" onClick={() => setView(3)}>
                {button}
              </button>
            ) : (
              <LeadForm />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
