import { AH } from "../component_map";
import { navigationLinks } from "../../_data/navigation";
import { html } from "htm/preact";

const Navigation = () => {
  return html`
    <nav
      class="fixed bottom-0 right-0 items-end md:grid md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-5 lg:col-start-4 items-end pr-4 pb-8 md:pb-16 md:pr-16 box-border text-primary"
    >
      ${navigationLinks.map(
        (nl, index) =>
          html`<${AH.NavigationItem} link="${nl.link}" index="${index + 3}" />`
      )}
    </nav>
  `;
};

export { Navigation };

