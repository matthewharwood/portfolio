import { html } from "htm/preact";
import { AH } from "../../components/component_map";

export const Work = () => {
  return html`
    <div data-router-view="work">
      <${WorkItem} />
      <${WorkItem} />
      <${WorkItem} />
    </div>
  `;
};

const WorkItem = () => {
  return html`
 
    <div className="h-screen p-10 relative">
      <div
        className="h-full w-full absolute inset-0 z-10 flex flex-col justify-center items-center text-center font-bold"
      >
        <div
          className="flex flex-col items-center justify-center px-10 md:px-16 w-full md:w-10/12 lg:w-8/12 xl:w-7/12"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl">Stanley Editor</h1>
          <p className="font-normal md:font-bold text-md md:text-2xl mt-3 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            et iure ab ea, fugiat minus?
          </p>
          <a
            href="/"
            className="bg-blue-700 text-white px-10 py-4 font-bold uppercase"
            >Enter</a
          >
        </div>
      </div>
    </div>
  `;
};
