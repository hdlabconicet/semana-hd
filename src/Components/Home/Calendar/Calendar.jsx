import { NavLink } from "react-router-dom";
import "./Calendar.css";

const emptyCalendar = () => {
  return (
    <article className="calendar-item">
      <h3>Aún no hay eventos programados<br />¡Puedes ser el primero!</h3>
      <div className="flex flex-column">
        <div className="w-1/2">

        </div>
        <div className="w-1/2 text-right absolute bottom-4 right-4">
            <NavLink to="/proposal" className="proposal-link">
              Propón un evento
            </NavLink>
        </div>
      </div>
    </article>
  );
};

const emptyItem = () => {
  return <article className="empty-item"></article>;
};

const Calendar = () => {
  return (
    <section className="calendar-section">
      <div className="p-4 xl:p-0 lg:w-2/3 xl:w-11/12 2xl:w-10/12 xl:flex xl:flex-row xl:gap-6">
        <div className="xl:w-1/2">
          <h2>Calendario</h2>
          <p>
            El calendario se actualiza constantemente, las fechas y horas de los
            eventos pueden cambiar y se agregan nuevos eventos regularmente.
          </p>
          <p>
            Estás visualizando los últimos tres eventos publicados, para
            visualizar todos los eventos da clic en Ver calendario.
          </p>
        </div>
        <div className="xl:w-1/2">
          <div className="last-events">
            {emptyCalendar()}
            {emptyItem()}
            {emptyItem()}
          </div>
          <div className="text-right">
            <NavLink to="/calendar" className="calendar-link">
              Ver calendario
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
