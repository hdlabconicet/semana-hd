import PropTypes from "prop-types";
import Moment from "moment";
import "./CalendarItem.css";

const CalendarItem = ({ event, onEventClick }) => {
  const handleEventClick = (e) => {
    e.preventDefault();
    if (onEventClick) {
      onEventClick(event.id);
    }
  };

  return (
    <article className="calendar-item">
      <h3>{event.attributes.title}</h3>
      <div className="flex flex-column">
        <div className="w-1/2 text-sm">
          <p className="flex flex-col sm:flex-row md:flex-col 2xl:flex-row">
            <span className="w-full sm:w-1/2 md:w-full inline-block">
              <img
                src="/images/calendar.png"
                alt="calendar"
                width={16}
                className="inline-block align-baseline"
              />{" "}
              {Moment(event.attributes.eventdate).format("D MMMM YYYY")}
            </span>{" "}
            <span className="w-full sm:w-1/2 md:w-full mt-2 sm:mt-0 md:mt-2 2xl:mt-0 inline-block">
              <img
                src="/images/clock.png"
                alt="clock"
                width={16}
                className="inline-block align-baseline"
              />{" "}
              {Moment(event.attributes.eventdate).format("HH:mm")}
            </span>
          </p>
        </div>
        <div className="w-1/2 text-right absolute bottom-4 right-4">
          <a
            href={`/event/${event.id}`}
            className="proposal-link"
            onClick={handleEventClick}
          >
            Ver detalles
          </a>
        </div>
      </div>
    </article>
  );
};

CalendarItem.propTypes = {
  event: PropTypes.object.isRequired,
  onEventClick: PropTypes.func,
};

export default CalendarItem;
