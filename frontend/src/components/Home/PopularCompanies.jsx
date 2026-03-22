import React from "react";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Deloitte",
      location: "Palace Road High Grounds, Bengaluru",
      openPositions: 10,
      logo:"/Deloitte_Logo.png"

    },
    {
      id: 2,
      title: "TCS",
      location: "Salt lake city, Sector 5, Kolkata",
      openPositions: 5,
      logo:"/TCS.png"
    },
    {
      id: 3,
      title: "Accenture",
      location: "Bhoi Nagar, Acharya Vihar Squar, Bhubaneswar",
      openPositions: 20,
      logo:"/accenture.png"
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon"><img src={element.logo} alt={element.title} /></div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
