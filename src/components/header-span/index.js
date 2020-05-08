import { html } from "htm/preact";
import { useFlyIn } from "../../hooks/use_fly_in";

const HeaderSpan = ({ span, sequence }) => {
  const spanRef = useFlyIn((1 + sequence) * 3000);
  return html` <span ref="${spanRef}" className="block">${span}</span> `;
};

export { HeaderSpan };
