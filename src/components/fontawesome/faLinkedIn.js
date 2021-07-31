import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedinIn);

export const FontAwesomeLinkedIn = () => {
  return <FontAwesomeIcon icon={faLinkedinIn} />;
};
