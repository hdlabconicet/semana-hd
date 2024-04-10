import { NavLink } from "react-router-dom";
import EventForm from "../../Components/Proposal/EventForm/EventForm";
import SpeakerForm from "../../Components/Proposal/SpeakerForm/SpeakerForm";
import Tz from "moment-timezone";
import "./Proposal.css";

const sendEvent = (event) => {
  event.preventDefault();

  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
  const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

  let fileEvent = {};
  let fileSpeaker = {};

  let formEvent = {
    title: document.getElementById("title").value,
    eventdate: Tz(document.getElementById("eventdate").value)
      .tz("UTC")
      .format(),
    language: document.getElementById("language").value,
    timezone: document.getElementById("timezone").value,
    institution: document.getElementById("institution").value,
    country: document.getElementById("country").value,
    eventlink: document.getElementById("eventlink").value,
    moreinfo: document.getElementById("moreinfo").value,
    platform: document.getElementById("platform").value,
    description: document.getElementById("description").value,
    instructions: document.getElementById("instructions").value,
    publishedAt: null,
  };

  fileEvent = {
    data: Object.assign(formEvent),
  };

  fetch(`${STRAPI_URL}hd2024-events`, {
    method: "post",
    body: JSON.stringify(fileEvent),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      }
      console.log(data.data.id)
      let formSpeaker = {
        name: document.getElementById("speaker_name").value,
        email: document.getElementById("speaker_email").value,
        bio: document.getElementById("speaker_bio").value,
        hd_2024_event: data.data.id,
      };

      fileSpeaker = {
        data: Object.assign(formSpeaker),
      };

      fetch(`${STRAPI_URL}hd2024-speakers`, {
        method: "post",
        body: JSON.stringify(fileSpeaker),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

function Proposal() {
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <header className="flex gap-6 mb-8">
        <div className="w-1/2">
          <h1 className="text-green_hd text-2xl font-medium border-b border-green_hd">
            Nuevo evento
          </h1>
        </div>
        <div className="w-1/2 text-right">
          <NavLink to="/" className="index-link">
            Regresar al inicio
          </NavLink>
        </div>
      </header>
      <form onSubmit={sendEvent}>
        <div className="lg:flex lg:flex-row gap-6">
          <div className="lg:w-1/2">
            <EventForm />
          </div>
          <div className="lg:w-1/4 justify-end" id="speaker">
            <h2 className="text-xl text-red_hd font-medium border-b border-red_hd pl-4 pb-1 mb-6">
              Ponente
            </h2>
            <SpeakerForm />
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-sm text-right">
          <button
            type="reset"
            className="bg-gray-400 py-2 px-4 text-white rounded mr-4"
          >
            Borrar
          </button>
          <button
            type="submit"
            className="bg-red_hd py-2 px-4 text-white rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Proposal;
