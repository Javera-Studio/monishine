import { useEffect } from "react";

const Kontakt = () => {
  useEffect(() => {
    window.location.replace(
      "https://wa.me/4917624050812?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren."
    );
  }, []);
  return null;
};

export default Kontakt;
