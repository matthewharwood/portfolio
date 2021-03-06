import { html } from "htm/preact";
import {Media} from '../media';



export const HighlightVideo = ({ title, text, video }) => {
  return html`
    <section className="py-16">
      <div className="container sm:px-5 lg:px-16 grid grid-cols-3 gap-10">
        <div className="col-span-3 lg:col-span-2">
          <${Media} src="${video.poster}" video="${video.src}" className="h-full w-full" controls></video>
        </div>
        <div className="col-span-3 lg:col-span-1 flex flex-col px-5 sm:px-0">
          <h5 className="font-bold uppercase text-primary-lighter">${title}</h5>
          <p className="mt-5">${text}</p>
        </div>
      </div>
    </section>
  `;
};


