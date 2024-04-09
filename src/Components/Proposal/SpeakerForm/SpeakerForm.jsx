import InputItem from "../../FormItems/InputItem";
import textareaItem from "../../FormItems/TextareaItem";

const SpeakerForm = () => {
  return (
    <>
      <div className="item-row">
        {InputItem("speaker_name", "text", "Nombre del ponente")}
      </div>
      <div className="item-row">
        {InputItem("speaker_email", "email", "Correo electrónico")}
      </div>
      <div className="item-row">
        {textareaItem("speaker_bio", "Semblanza")}
      </div>
    </>
  );
};

export default SpeakerForm;
