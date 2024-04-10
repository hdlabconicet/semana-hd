import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CalendarItem from "../../CalendarItem/CalendarItem";
import "./Calendar.css";

const emptyCalendar = () => {
  return (
    <article className="calendar-item">
      <h3>
        Aún no hay eventos programados
        <br />
        ¡Puedes ser el primero!
      </h3>
      <div className="flex flex-column">
        <div className="w-1/2"></div>
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

const buildCalendar = (items) => {
  if (items === null || !items.data || !items.data.length) {
    return <>{emptyCalendar()}{emptyItem()}{emptyItem()}</>;
  } else {
    const calendarItemsLoad = items.data.map((item) => {
      return <CalendarItem event={item} key={item.id} />;
    });

    for (let i = items.data.length; i < 3; i++) {
      calendarItemsLoad.push(emptyItem());
    }

    return calendarItemsLoad;
  }
};

function Calendar() {
  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
  const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(
      `${STRAPI_URL}hd2024-events?populate=*filters[eventdate][$gte]=2024-05-06T00:00:00.00Z&sort[0]=updatedAt:desc&pagination[pageSize]=3`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

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
          <p>
            El calendario se visualiza en la zona horaria de tu navegador. Si
            necesitas ver la zona horaria de tu navegador o comparar con otra
            zona horaria puedes ir al sitio{" "}
            <a
              href="https://time.is/"
              target="_blank"
              rel="noopener noreferrer"
            >
              time.is
            </a>
            .
          </p>
        </div>
        <div className="xl:w-1/2">
          <div className="last-events">{buildCalendar(items)}</div>
          <div className="text-right">
            <NavLink to="/calendar" className="calendar-link">
              Ver calendario
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calendar;
