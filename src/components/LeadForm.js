import React from "react";
import "../App.css";
const LeadForm = () => {
  return (
    <div className="formcontainer p-5">
      <div className="formbody">
        Before you go, please leave your contact details so we can get back to
        you...
        <input className="input" placeholder="*Your name "></input>
        <input className="input" placeholder="*Your email "></input>
        <div className="tandc">
          <input type="checkbox" className="checkbox"></input>
          [Sample legal text] The personal data you have provided will be
          processed by XXXXX for purposes of providing you the service. The
          legal basis of the processing is XXXXX. Your data will not be
          transferred nor assigned to third parties. You can exercise your right
          to access, rectify and delete your data, as well as the other rights
          granted by law by sending an email to XXXXX. For further information,
          please check our privacy policy XXXXX.
        </div>
      </div>
      <button className="fomrbutton">Send your answer ⟶</button>
    </div>
  );
};

export default LeadForm;
