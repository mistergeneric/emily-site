import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faMicrophoneAlt);

export const FontAwesomeMicrophone = () => {
  return <FontAwesomeIcon icon={faMicrophoneAlt} />;
};
