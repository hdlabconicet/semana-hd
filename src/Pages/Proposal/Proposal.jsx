import { NavLink } from "react-router-dom";
import { useState } from "react";
import EventForm from "../../Components/Proposal/EventForm/EventForm";
import SpeakerForm from "../../Components/Proposal/SpeakerForm/SpeakerForm";
import Tz from "moment-timezone";
import "./Proposal.css";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

function Proposal() {
  const [speakers, setSpeakers] = useState([]);

  const addSpeakersData = (speakersData) => {
    setSpeakers((prevSpeakersData) => [...prevSpeakersData, speakersData]);
  };

  const sendSpeaker = (speaker, eventId) => {
    let fileSpeaker = {};

    let formSpeaker = {
      name: speaker.name,
      email: speaker.email,
      bio: speaker.bio,
      hd_2024_event: eventId,
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
          alert(
            `{Ocurrio un error al enviar los datos del ponente ${speaker.name}}`
          );
          console.log(data.error);
        }
      })
      .catch((error) => {
        alert(
          `{Ocurrio un error al enviar los datos del ponente ${speaker.name}}`
        );
        console.log(error);
      });
  };

  const sendEvent = async () => {
    let fileEvent = {};

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
          alert(`Ocurrio un error al enviar los datos del evento ${document.getElementById("title").value}`)
          console.log(data.error);
        } else {
          speakers.forEach((speaker) => {
            sendSpeaker(speaker, data.data.id);
          });
          const pre_event_title = document.getElementById("pre_event_title");
          pre_event_title.append(document.getElementById("title").value);
          document.getElementById("form-message").style.display = "block";
        }
      })
      .catch((error) => {
        alert(`Ocurrio un error al enviar los datos del evento ${document.getElementById("title").value}`)
        console.log(error);
      });
  };

  const validateForm = (event) => {
    event.preventDefault();
    if (
      document.getElementById("title").value === "" ||
      document.getElementById("eventdate").value === "" ||
      document.getElementById("language").value === "" ||
      document.getElementById("timezone").value === "" ||
      document.getElementById("institution").value === "" ||
      document.getElementById("country").value === "" ||
      document.getElementById("eventlink").value === "" ||
      document.getElementById("platform").value === "" ||
      document.getElementById("description").value === "" ||
      document.getElementById("instructions").value === ""
    ) {
      alert("Falta información del evento");
    } else {
      console.log(speakers);
      if (speakers.length === 0) {
        alert("No se ha agregado ponente al evento");
      } else {
        sendEvent();
      }
    }
  };

  return (
    <>
      <div id="form-message">
        <div className="success-message">
          <div>
          <h4 className="bg-green_hd text-white p-2 rounded-sm mb-6" id="pre_event_title"></h4>
          <p>Tu propuesta de evento ha sido registrada.</p>
          <p>En breve revisaremos tu propuesta y en caso de ser aprobada recibirás un correo electrónico con algunas recomendaciónes para que tu evento sea aún más éxitoso.</p>
          <p>No olvides unirte al canal de <a href="https://t.me/+k6eJFMu9xTxiMTZh" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Telegram <img src="images/telegram.png" alt="Telegram" width={24} className="inline align-bottom" /></a> para mantenerte al tanto de las novedades de la Semana de Humanidades Digitales.</p>
          <p className="mt-12 text-center"><NavLink to="/" className="index-link bg-red_hd">
              Continuar
            </NavLink></p>
          </div>
        </div>
      </div>
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
        <div>
          <div className="lg:flex lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <form id="eventform">
                <EventForm />
              </form>
            </div>
            <div className="lg:w-1/4 justify-end" id="speaker">
              <h2 className="text-xl text-red_hd font-medium border-b border-red_hd pl-4 pb-1 mb-6">
                Ponentes
              </h2>
              <form id="speakerform">
                <SpeakerForm addSpeakers={addSpeakersData} />
              </form>
            </div>
            <div className="lg:w-1/4 justify-end" id="speaker-info"></div>
          </div>
          <div className="bg-gray-100 p-4 rounded-sm text-right">
            <button
              type="reset"
              className="bg-gray-400 py-2 px-4 text-white rounded mr-4"
            >
              Borrar
            </button>
            <button
              type="button"
              onClick={validateForm}
              className="bg-red_hd py-2 px-4 text-white rounded"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proposal;
