import React, { useState } from "react";

const Section = ({ title, description, isVisible, setisVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold">{title}</h3>
      {isVisible == false ? (
        <button
          onClick={() => setisVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      ) : (
        <>
          <button
            onClick={() => setisVisible(false)}
            className="cursor-pointer underline"
          >
            Hide
          </button>
          <p className="font-thin">{description}</p>
        </>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setvisibleSection] = useState(null);
  return (
    <div>
      <h1 className="font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "We are instamart We are instamart We are instamart We are instamart We are instamart We are instamart We are instamart We are instamart We are instamart We are instamart We are instamart We are instamart We are instamart We are instamart We are instamart"
        }
        isVisible={visibleSection == "about"}
        setisVisible={(visible) => setvisibleSection(visible ? "about" : null)}
      />
      <Section
        title={"Team of Instamart"}
        description={
          "We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.."
        }
        isVisible={visibleSection == "team"}
        setisVisible={(visible) => setvisibleSection(visible ? "team" : null )}
      />
      <Section
        title={"Careers"}
        description={
          "We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.. We are a team of 1.."
        }
        isVisible={visibleSection == "Career"}
        setisVisible={(visible) => setvisibleSection(visible ? "Career" : null)}
      />
    </div>
  );
};

export default Instamart;
