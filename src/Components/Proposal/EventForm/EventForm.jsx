import InputItem from "../../FormItems/InputItem";
import SelectItem from "../../FormItems/SelectItem";
import textareaItem from "../../FormItems/TextareaItem";
import { timezones } from "./timezone";
import { countries } from "./countries";

const EventForm = () => {
  return (
    <>
      <div className="item-row">
        {InputItem("title_event", "text", "Nombre del evento")}
        <div className="lg:w-1/2 mb-4">
          <div className="flex flex-col">
            <label htmlFor="datetime" className="text-gray-500">
              Fecha y hora del evento
            </label>
            <input
              type="datetime-local"
              id="datetime"
              name="datetime"
              className="border border-gray-200 focus:border-green_hd focus:ring-0 focus:outline-none rounded p-2"
              min="2024-05-06T00:00"
              max="2024-05-10T23:59"
            />
          </div>
        </div>
      </div>
      <div className="item-row">
        {SelectItem("language", "Idioma del evento", [
          { value: "", text: "" },
          { value: "Español", text: "Español" },
          { value: "Portugues", text: "Portugues" },
        ])}
        {SelectItem("timezone", "Zona horaria", timezones)}
      </div>
      <div className="item-row">
        {InputItem("institution", "text", "Institución / Organización")}
        {SelectItem("country", "País participante", countries)}
      </div>
      <div className="item-row">
        {InputItem("event_link", "url", "Enlace del evento")}
        {InputItem("info_link", "url", "Enlace para más información")}
      </div>
      <div className="item-row">
        {InputItem("platform", "text", "Plataforma")}
      </div>
      <div className="item-row">
        {textareaItem("description", "Descripción del evento")}
      </div>
      <div className="item-row">
        {textareaItem("instructions", "Instrucciones para los participantes")}
      </div>
    </>
  );
};

export default EventForm;
