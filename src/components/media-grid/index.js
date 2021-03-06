import { html } from "htm/preact";
import { AH } from '../component_map';

export const MediaGrid = ({ mediaList, aspectRatio, showTitles=true }) => {
  return html`
    <div className="container px-5 lg:px-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
      ${mediaList.map(media => html`
        <div>
          <${AH.MediaThumbnail} media="${media}" aspectRatio="${aspectRatio}"/>
          ${showTitles && html`<span>${media.alt}</span>`}
        </div>
      `)}
    </div>
  `;
};

