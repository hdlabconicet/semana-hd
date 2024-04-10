import InputItem from "../../FormItems/InputItem";
import textareaItem from "../../FormItems/TextareaItem";

/*const addSpeaker = (event) => {
  event.preventDefault();
  alert("Ponente agregado");
}*/

const SpeakerForm = () => {
  return (
    <div className="speaker">
      <div className="item-row">
        <div className="w-full mb-4">
          {InputItem("speaker_name", "text", "Nombre del ponente", true)}
        </div>
      </div>
      <div className="item-row">
        <div className="w-full mb-4">
          {InputItem("speaker_email", "email", "Correo electrónico", true)}
        </div>
      </div>
      <div className="item-row">
        <div className="w-full mb-4">
          {textareaItem("speaker_bio", "Semblanza", true)}
        </div>
      </div>
      {/*<div className="item-row justify-end">
        <a onClick={addSpeaker} href=""
          className="bg-red_hd text-white px-4 py-2 rounded"
        >
          Agregar ponente
        </a>
  </div>*/}
    </div>
  );
};

export default SpeakerForm;
