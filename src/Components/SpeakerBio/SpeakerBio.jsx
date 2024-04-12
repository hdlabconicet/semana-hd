import PropTypes from "prop-types";
import "./SpeakerBio.css";

const SpeakerBio = ({ speaker }) => {
  return (
    <div className="speaker-bio">
      <h5>{speaker.name}</h5>
      <pre>{speaker.bio}</pre>
    </div>
  );
};

SpeakerBio.propTypes = {
  speaker: PropTypes.object.isRequired,
};

export default SpeakerBio;
