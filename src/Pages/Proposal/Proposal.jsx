import { NavLink } from "react-router-dom";
import EventForm from "../../Components/Proposal/EventForm/EventForm";
import SpeakerForm from "../../Components/Proposal/SpeakerForm/SpeakerForm";
import "./Proposal.css";

function Proposal() {
  return (
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
      <form>
        <div className="flex flex-row justify-between gap-6">
          <div className="w-1/2">
            <EventForm />
          </div>
          <div className="w-1/4 justify-end">
            <h2 className="text-xl text-red_hd font-medium border-b border-red_hd pb-1 mb-6">Ponentes</h2>
            <SpeakerForm />
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-sm text-right">
          <button
            type="reset"
            className="bg-gray-400 py-2 px-4 text-white rounded mr-4"
          >
            Borrar
          </button>
          <button
            type="submit"
            className="bg-red_hd py-2 px-4 text-white rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Proposal;
