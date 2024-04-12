import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EventDetails from "../../Components/EventDetails/EventDetails";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

function CalendarEvent() {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState([]);
  const [speakersDetails, setSpeakersDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetch(`${STRAPI_URL}hd2024-events?filters[id][$eq]=${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((dataEvent) => {
        setEventDetails(dataEvent.data[0]);
        fetch(
          `${STRAPI_URL}hd2024-speakers?filters[hd_2024_event][id][$eq]=${id}`,
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
          });
      });
  }, []);

  const handleHideEventClick = () => {
    window.location.href = '/calendar/';
  };

  return (
    <>
        {showDetails && (
          <EventDetails
            eventDetails={eventDetails}
            speakersDetails={speakersDetails}
            onEventClick={handleHideEventClick}
          />
        )}
      <section id="calendar">
        <div className="w-11/12 lg:w-3/4">
          <header>
            <h1>Calendario</h1>
          </header>
          <div className="h-96"></div>
        </div>
      </section>
    </>
  );
}

export default CalendarEvent;
