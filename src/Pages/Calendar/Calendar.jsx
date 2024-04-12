import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import CalendarItem from "../../Components/CalendarItem/CalendarItem";
import EventDetails from "../../Components/EventDetails/EventDetails";
import "./Calendar.css";

function Calendar() {
  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
  const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

  const [items, setItems] = useState(null);
  const [eventDetails, setEventDetails] = useState([]);
  const [speakersDetails, setSpeakersDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetch(
      `${STRAPI_URL}hd2024-events?populate=*filters[eventdate][$gte]=2024-05-06T00:00:00.00Z&sort[0]=eventdate:asc`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const handleEventClick = (eventId) => {
    fetch(`${STRAPI_URL}hd2024-events?filters[id][$eq]=${eventId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((dataEvent) => {
        setEventDetails(dataEvent.data[0]);
        fetch(
          `${STRAPI_URL}hd2024-speakers?filters[hd_2024_event][id][$eq]=${eventId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((dataSpeakers) => {
            setSpeakersDetails(dataSpeakers.data);
            setShowDetails(true);
            document.getElementById("event-details").style.display = "block";
          });
      });
  };

  const handleHideDetails = () => {
    document.getElementById("event-details").style.display = "none";
  }

  return (
    <>
      <div id="event-details" onClick={handleHideDetails}>
        {showDetails && (
          <EventDetails
            eventDetails={eventDetails}
            speakersDetails={speakersDetails}
          />
        )}
      </div>
      <section id="calendar">
        <div className="w-11/12 lg:w-3/4">
          <header>
            <h1>Calendario</h1>
            <NavLink to="/" className="index-link">
              Regresar al inicio
            </NavLink>
          </header>
          <div>
            <p>
              El calendario se actualiza constantemente, las fechas y horas de
              los eventos pueden cambiar y se agregan nuevos eventos
              regularmente.
            </p>
            <p>
              Los eventos se visualizan en la zona horaria de tu navegador. Si
              necesitas ver la zona horaria de tu navegador o comparar con otra
              zona horaria puedes ir al sitio{" "}
              <a
                href="https://time.is/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                time.is
              </a>
              .
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-12">
            {items !== null &&
              items.data.map((item) => {
                return (
                  <CalendarItem
                    event={item}
                    key={item.id}
                    onEventClick={handleEventClick}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Calendar;
