import PropTypes from "prop-types";
import SpeakerBio from "../SpeakerBio/SpeakerBio";
import Moment from "moment";
import { countries } from "../../Components/Proposal/EventForm/countries";
import "./EventDetails.css";

const EventDetails = ({ onEventClick, eventDetails, speakersDetails }) => {
  const handleEventClick = (e) => {
    e.preventDefault();
    if (onEventClick) {
      onEventClick(event.id);
    }
  };

  return (
    <>
      <div id="event-details-bg" onClick={handleEventClick}></div>
      <div id="event-details">
        <article className="details">
          <header>
            <button
              onClick={handleEventClick}
            >
              Cerrar
            </button>
            <h1>{eventDetails.attributes.title}</h1>
          </header>
          <div>
            <p id="eventdate">
              <img
                src="/images/calendar.png"
                alt="calendar"
                width={16}
                className="inline-block align-baseline"
              />{" "}
              {Moment(eventDetails.attributes.eventdate).format("D MMMM YYYY")}{" "}
              <img
                src="/images/clock.png"
                alt="clock"
                width={16}
                className="inline-block align-baseline"
              />{" "}
              {Moment(eventDetails.attributes.eventdate).format("HH:mm")}
            </p>
            <div className="grid grid-cols-2 pb-1 border-b border-gray-300 mb-6">
              <p>
                Idioma <strong>{eventDetails.attributes.language}</strong>
              </p>
              <p>
                País{" "}
                <strong>
                  {
                    countries.find(
                      (country) =>
                        country.value === eventDetails.attributes.country
                    ).text
                  }
                </strong>
              </p>
            </div>
            <p className="pb-1 border-b border-gray-300 mb-6">
              Institución <strong>{eventDetails.attributes.institution}</strong>
            </p>
            <div className="grid grid-cols-2 px-4 py-2 mb-6">
              <a
                href={eventDetails.attributes.eventlink}
                target="_blank"
                rel="noopener noreferrer"
                id="eventlink"
              >
                Enlace del evento
              </a>
              {eventDetails.attributes.moreinfo && (
                <a
                  href={eventDetails.attributes.moreinfo}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="moreinfo"
                >
                  Más información del evento
                </a>
              )}
            </div>
            <p className="pb-1 border-b border-gray-300 mb-6">
              Plataforma <strong>{eventDetails.attributes.platform}</strong>
            </p>
            <div id="description">
              <h4>Descripción</h4>
              <pre>{eventDetails.attributes.description}</pre>
            </div>
            <div id="instructions">
              <h4>Instrucciones</h4>
              <pre>{eventDetails.attributes.instructions}</pre>
            </div>
            <h4>Ponentes</h4>
            {speakersDetails.map((speaker) => {
              return (
                <SpeakerBio key={speaker.id} speaker={speaker.attributes} />
              );
            })}
          </div>
        </article>
      </div>
    </>
  );
};

EventDetails.propTypes = {
  event: PropTypes.object.isRequired,
  onEventClick: PropTypes.func,
  eventDetails: PropTypes.object.isRequired,
  speakersDetails: PropTypes.array.isRequired,
};

export default EventDetails;
