// // import { parseSync } from "@babel/core";
import React, { useState, useReducer } from "react";
import "./../styles/App.css";

const states = [
  {
    name: "Madhya Pradesh",
    title: "Madhya Pradesh, a large state in central India",
    description:
      "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
    city: [
      {
        name: "Indore",
        title: "Indore is a city in west-central India",
        description:
          "Indore is a city in west-central India. It’s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty.",
        landmarks: [
          {
            name: "Mhow",
            title: "Dr. Ambedkar Nagar, commonly known as Mhow",
            description:
              "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",
          },
          {
            name: "Dewas",
            title:
              "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh",
            description:
              "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
          },
        ],
      },
      {
        name: "Bhopal",
        title: "Bhopal is a city in the central Indian state of Madhya Pradesh",
        description:
          "Bhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest city. There are two main lakes, the Upper Lake and the Lower Lake.",
        landmarks: [
          {
            name: "MANIT",
            title: "Maulana Azad National Institute of Technology",
            description:
              "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology. ",
          },
          {
            name: "Berasia",
            title:
              "Berasia is a landmark and a nagar palika in Bhopal district",
            description:
              "Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India. ",
          },
        ],
      },
      {
        name: "Gwalior",
        description:
          "Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple. ",
        landmarks: [
          {
            name: "Ajaypur",
            title: "gwalior landmark is ajaypur",
            description: "Little less known city Ajaypur.",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    title: "Jharkhand is a state in eastern India",
    description:
      "Jharkhand is a state in eastern India. It's known for its waterfalls, the elegant Jain temples of Parasnath Hill and the elephants and tigers of Betla National Park.",
    city: [
      {
        name: "Dhanbad",
        title:
          "Dhanbad is the second-most populated city in the Indian state of Jharkhand",
        description:
          "Dhanbad is the second-most populated city in the Indian state of Jharkhand. It ranks as the 33rd largest city in India and is the 42nd largest million-plus urban agglomeration in India. It is the 96th fastest growing urban area of the world by the City Mayors Foundation.",
        landmarks: [
          {
            name: "IIT(ISM) Dhanbad",
            title:
              "Indian Institute of Technology (Indian School of Mines) Dhanbad",
            description:
              "Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India. It is an Institute of National Importance. IIT has 18 academic departments covering Engineering,",
          },
          {
            name: "Hirapur",
            title: "hirapur is the dhanbad landmark",
            description:
              "Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
          },
        ],
      },
      {
        name: "Wasseypur",
        title: "Wasseypur is a neighbourhood in the city of Dhanbad",
        description:
          "Wasseypur is a neighbourhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district in the state of Jharkhand in India. ",
        landmarks: [
          {
            name: "Pandey muhalla",
            title: "pandey muhalla is the wasseypur landmark",
            description:
              "Located behind the dhanbad junction is must visit place.",
          },
          {
            name: "MPI Hall",
            title: "mpi is the wasseypur landmark",
            description: "Space for everyone",
          },
        ],
      },
      {
        name: "Hazaribagh",
        title:
          "Hazaribagh is a city and a municipal corporation in Hazaribagh district",
        description:
          "Hazaribagh is a city and a municipal corporation in Hazaribagh district in the Indian state of Jharkhand. It is the divisional headquarters of North Chotanagpur division.",
        landmarks: [
          {
            name: "Shaheed Nirmal Mahto Park",
            title: "Shaheed Nirmal Mahto Park is situated in hazaribagh",
            description: "Famous for its giant dinosaur structure",
          },
          {
            name: "Gandhi Maidan",
            title: "gandhi maidan is situated in hazaribagh",
            description: "Ideal for conduction major events",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    title: "Assam is a state in northeastern India",
    description:
      "Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. ",
    city: [
      {
        name: "Guwhati",
        title: "Guwahati is a sprawling city beside the Brahmaputra River",
        description:
          "Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It’s known for holy sites like the hilltop Kamakhya Temple,",
        landmarks: [
          {
            name: "Ganesh Guri",
            title: "ganesh guri is situated in guwhati",
            description: "Famous because of PVR city center.",
          },
          {
            name: "Kalyani Nagar",
            title: "kalyani nagar is situated in guwhati",
            description: "located near famous Lakshmi Nagar",
          },
        ],
      },
      {
        name: "dimapur",
        title: "Dimapur is a city in Nagaland",
        description:
          "Dimapur is a city in Nagaland, India. It is the most populous city of Nagaland and also the most densely populated city in the state with an estimated population of about 250,000.",
        landmarks: [
          {
            name: "City Tower",
            title: "city tower is situated in dimapur",
            description: "Giant Tower standing by the road since history.",
          },
          {
            name: "Sunday Market",
            title: "Sunday Market is situated in dimapur",
            description: "Famous for its weekend Sale on all items.",
          },
        ],
      },
      {
        name: "Tezpur",
        title:
          "Tezpur is a landmark and urban agglomeration in Sonitpur district",
        description:
          "Tezpur is a landmark and urban agglomeration in Sonitpur district, Assam state, India. Tezpur is located on the banks of the river Brahmaputra, 175 kilometres northeast of Guwahati, and is the largest of the north bank landmarks with a population exceeding 100,000 as per Metropolitan Census 2011.",
        landmarks: [
          {
            name: "Bamuni Hills",
            title: "bamuni hills is situated in tezpur",
            description: "Best location for photoshoots",
          },
          {
            name: "Bhujkhowa Bazar",
            title: "bhujkhowa bazar is situated in tezpur",
            description: "Central Market for Tezpur",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    title: "Bihar is a state in East India",
    description:
      "Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains. Important Buddhist pilgrimage sites include the Bodhi Tree in Bodhgaya's Mahabodhi Temple, under which the Buddha allegedly meditated.",
    city: [
      {
        name: "Patna",
        title: "Patna is an ancient city",
        description:
          "Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India.",
        landmarks: [
          {
            name: "Sonpur",
            title:
              "Sonpur is a city and sub-division in the Indian state of Bihar",
            description:
              "Sonpur is a city and sub-division in the Indian state of Bihar, situated on the banks of the River Gandak and Ganges River in the Saran District.",
          },
          {
            name: "Maner",
            title: "Maner also spelled Maner or Maner Sharif",
            description:
              "Maner also spelled Maner or Maner Sharif, is a satellite landmark in Patna Metropolitan Region, in the Patna district in the Indian state of Bihar. Maner Sharif lies 24 km west of Patna the capital of Bihar on National Highway 30.",
          },
        ],
      },
      {
        name: "Gaya",
        title: "Gaya is a holy city beside the Falgu River",
        description:
          "Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar. It’s known for 18th-century Vishnupad Mandir, a riverside temple with an octagonal shrine. Close by, ancient Mangla Gauri Temple is set on a hilltop. ",
        landmarks: [
          {
            name: "Bakraur",
            title: "Bakraur, sometimes called Bakrour",
            description:
              "Bakraur, sometimes called Bakrour, is a village located slightly east of Bodh Gaya in the state of Bihar, India. It lies directly across the Phalgu River from the landmark of Bodh Gaya, where Gautama Buddha is said to have attained enlightenment.",
          },
          {
            name: "Barachatti",
            title: "Barachatti is a block in the Gaya district of Bihar",
            description:
              "Barachatti is a block in the Gaya district of Bihar, India. Barachatti contains 141 villages and 13 gram panchayat. Sarwan bazar is the biggest and Nimi is the smallest village of Barachatti. The total population in Barachatti sub-district is 142,534 according to the census during 2011 by Indian Government.",
          },
        ],
      },
      {
        name: "Darbhanga",
        title:
          "Darbhanga is a city and Municipal Corporation in the Indian state of Bihar",
        description:
          "Darbhanga is a city and Municipal Corporation in the Indian state of Bihar. It is the 6th largest city of Bihar, only after Patna, Gaya, Bhagalpur, Muzaffarpur and Purnea. It is the headquarters of Darbhanga district and Darbhanga division and was the seat of the Raj Darbhanga and capital of the Mithila region.",
        landmarks: [
          {
            name: "Singhwara",
            title: "singhwara is situated in darbhanga",
            description: "Famous for its Groundnut Market",
          },
          {
            name: "Jale",
            title: "jale is situated in darbhanga",
            description: "Famous for its roasted seads market.",
          },
        ],
      },
    ],
  },
];
const styles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
};
const selectStyle = {
  display: "block",
  width: "100%",
  height: "4rem",
  padding: "10px",
  marginBottom: "20px",
};
const divStyles = {
  margin: "5px",
  border: "1px solid grey",
  padding: "5px",
};
function App() {
  let [selectedState, setSelectedState] = useState(0);
  let [selectedCity, setSelectedCity] = useState(0);
  let [selectedLandmark, setSelectedLandmark] = useState(0);
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    // setSelectedCity(0);
    // setSelectedLandmark(0);
  };
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    // setSelectedLandmark(0);
  };
  const handleLandmarkChange = (e) => {
    setSelectedLandmark(e.target.value);
  };
  // Do not alter/remove main div
  return (
    <div id="main" style={styles}>
      <div style={divStyles}>
        <span>States :</span>
        <select
          style={selectStyle}
          id="state"
          value={selectedState}
          onChange={handleStateChange}
        >
          {states.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.name}
              </option>
            );
          })}
        </select>
        <span>Cities :</span>
        <select
          style={selectStyle}
          id="city"
          value={selectedCity}
          onChange={handleCityChange}
        >
          {states[selectedState].city.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.name}
              </option>
            );
          })}
        </select>
        <span>Towns :</span>
        <select
          style={selectStyle}
          id="landmark"
          value={selectedLandmark}
          onChange={handleLandmarkChange}
        >
          {states[selectedState].city[selectedCity].landmarks.map(
            (item, index) => {
              return (
                <option key={index} value={index}>
                  {item.name}
                </option>
              );
            }
          )}
        </select>
      </div>
      <div>
        <div style={divStyles}>
          <div id="state-name">
            <b>{states[selectedState].name}</b>
          </div>
          <div id="state-title">{states[selectedState].title}</div>
          <div id="state-description">{states[selectedState].description}</div>
        </div>
        <div style={divStyles}>
          <div id="city-name">
            <b>{states[selectedState].city[selectedCity].name}</b>
          </div>
          <div id="city-title">
            {states[selectedState].city[selectedCity].title}
          </div>
          <div id="city-description">
            {states[selectedState].city[selectedCity].description}
          </div>
        </div>
        <div style={divStyles}>
          <div id="landmark-name">
            <b>
              {
                states[selectedState].city[selectedCity].landmarks[
                  selectedLandmark
                ].name
              }
            </b>
          </div>
          <div id="landmark-title">
            {
              states[selectedState].city[selectedCity].landmarks[
                selectedLandmark
              ].title
            }
          </div>
          <div id="landmark-description">
            {
              states[selectedState].city[selectedCity].landmarks[
                selectedLandmark
              ].description
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
