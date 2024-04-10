import InputItem from "../../FormItems/InputItem";
import textareaItem from "../../FormItems/TextareaItem";

const SpeakerForm = ({addSpeakers}) => {

  const addSpeaker = (event) => {
    event.preventDefault();

    const speakerInfo = document.getElementById("speaker-info");
    
    if(document.getElementById("speaker_name").value === "" && document.getElementById("speaker_email").value === "" && document.getElementById("speaker_bio").value === "") {
      alert("Falta información del ponente")
    } else {
      addSpeakers({
        name: document.getElementById("speaker_name").value,
        email: document.getElementById("speaker_email").value,
        bio: document.getElementById("speaker_bio").value,
      });
      speakerInfo.insertAdjacentHTML('beforeend', `<div class="w-full text-sm border border-gray-200 p-2 my-2 rounded shadow"><p>Nombre del ponente</p><p class="font-medium">${document.getElementById("speaker_name").value}</p><p>Correo electrónico</p><p class="font-medium">${document.getElementById("speaker_email").value}</p><p>Semblanza</p><p class="font-medium">${document.getElementById("speaker_bio").value}</p></div>`)
    }
  }

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
      <div className="item-row justify-end">
        <a
          onClick={addSpeaker}
          href=""
          className="bg-red_hd text-white px-4 py-2 rounded"
        >
          Agregar ponente
        </a>
      </div>
    </div>
  );
};

export default SpeakerForm;
