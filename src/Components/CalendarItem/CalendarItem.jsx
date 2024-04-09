import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Moment from "moment";

const CalendarItem = ({ event }) => {
  return (
    <article className="calendar-item">
      <h3>{event.attributes.title_event}</h3>
      <div className="flex flex-column">
        <div className="w-1/2">
          <p>
            <img
              src="images/calendar.png"
              alt="calendar"
              width={16}
              className="inline-block align-baseline"
            />{" "}
            {Moment(event.attributes.datetime).format("D MMMM YYYY")}
            {" "}
            <img
              src="images/clock.png"
              alt="clock"
              width={16}
              className="inline-block align-baseline"
            />{" "}
            {Moment(event.attributes.datetime).format("HH:mm")}
          </p>
        </div>
        <div className="w-1/2 text-right absolute bottom-4 right-4">
          <NavLink to={`/event/${event.id}`} className="proposal-link">
            Ver detalles
          </NavLink>
        </div>
      </div>
    </article>
  );
};

CalendarItem.propTypes = {
  event: PropTypes.array.isRequired,
};

export default CalendarItem;
