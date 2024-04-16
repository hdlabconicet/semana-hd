import InputItem from "../../FormItems/InputItem";
import SelectItem from "../../FormItems/SelectItem";
import textareaItem from "../../FormItems/TextareaItem";
// import Moment from "moment";
import Tz from "moment-timezone";
import { useState } from "react";
import { timezones } from "./timezone";
import { countries } from "./countries";

const EventForm = () => {
  const [timezone, setTimezone] = useState(Tz.tz.guess());

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  const [country, setCountry] = useState("");

  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      setCountry(data.country_code);
    })
    .catch((error) => {
      console.error("Error al obtener la información del país", error);
    });
  
    const handleCountryChange = (event) => {
      setCountry(event.target.value);
    };

  return (
    <>
      <div className="item-row">
        <div className="lg:w-1/2 mb-4">
          {InputItem("title", "text", "Nombre del evento", true)}
        </div>
        <div className="lg:w-1/2 mb-4">
          <div className="flex flex-col">
            <label htmlFor="eventdate" className="text-gray-500">
              Fecha y hora del evento
            </label>
            <input
              type="datetime-local"
              id="eventdate"
              name="eventdate"
              className="border border-gray-200 focus:border-green_hd focus:ring-0 focus:outline-none rounded p-2"
              min="2024-05-20T00:00"
              max="2024-05-25T23:59"
              required
            />
          </div>
        </div>
      </div>
      <div className="item-row">
        <div className="lg:w-1/2 mb-4">
          {SelectItem("language", "Idioma del evento", [
            { value: "", text: "" },
            { value: "ES", text: "Español" },
            { value: "PT", text: "Portugues" },
          ], true)}
        </div>
        <div className="lg:w-1/2 mb-4">
          <div className="flex flex-col">
            <label htmlFor="timezone" className="text-gray-500">
              Zona horaria
            </label>
            <select
              value={timezone}
              id="timezone"
              onChange={handleTimezoneChange}
              className="h-full rounded bg-transparent p-2 text-gray-500 focus:ring-0 border border-gray-200 focus:border-green_hd focus:outline-none"
              required
            >
              {timezones.map((option, index) => {
                return (
                  <option
                    key={index}
                    value={option.value}
                    className="font-mulish"
                  >
                    {option.text}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="item-row">
        <div className="lg:w-1/2 mb-4">
          {InputItem("institution", "text", "Institución / Organización", true)}
        </div>
        <div className="lg:w-1/2 mb-4">
          <div className="flex flex-col">
            <label htmlFor="country" className="text-gray-500">País participante</label>
            <select
              value={country}
              id="country"
              onChange={handleCountryChange}
              className="h-full rounded bg-transparent p-2 text-gray-500 focus:ring-0 border border-gray-200 focus:border-green_hd focus:outline-none"
              required
            >
              {countries.map((option, index) => {
                return (
                  <option
                    key={index}
                    value={option.value}
                    className="font-mulish"
                  >
                    {option.text}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="item-row">
        <div className="lg:w-1/2 mb-4">
          {InputItem("eventlink", "url", "Enlace del evento", true)}
        </div>
        <div className="lg:w-1/2 mb-4">
          {InputItem("moreinfo", "url", "Enlace para más información", false)}
        </div>
      </div>
      <div className="item-row">
        <div className="lg:w-1/2 mb-4">
          {InputItem("platform", "text", "Plataforma", true)}
        </div>
      </div>
      <div className="item-row">
        {textareaItem("description", "Descripción del evento", true)}
      </div>
      <div className="item-row">
        {textareaItem("instructions", "Instrucciones para los participantes", false)}
      </div>
    </>
  );
};

export default EventForm;
