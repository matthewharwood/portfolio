import { html } from "htm/preact";
import {PostLayout} from '../../layouts/post-layout';
import {useStatic} from '../../hooks/use_static';
import {Media} from '../../components/media';

const Rorschach = () => {
  return html`
    <${IntroHeadingBlock} />
    <${ImageBlock} />
    <${ImageThumbs} />
    <${CodeBlock} />
  `;
};

const IntroHeadingBlock = () => {
  return html`
    <section className="container px-5 pb-8 pt-40">
      <h1 className="text-4xl sm:text-5xl">Rorschach and CSS mix-blend-mode</h1>
      <span className="text-xl">With a little paint, paper, and CSS</span>
    </section>
  `;
};

const ImageBlock = () => {
  return html`
    <p className="rorschach">
      ${'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, odio vel. Ab aliquam, id impedit ipsum iure laudantium nobis quibusdam. Adipisci commodi consequuntur doloremque eos eum itaque possimus repellat sit.'.repeat(125)}
    </p>
    <section className="container px-5 flex flex-col items-center lg:px-32">
     
      <span className="text-xl md:text-2xl font-mono mt-8 lg:mt-16"
        >With a little paint and paper</span
      >
    </section>
  `;
};
const GridImages = [
  {src:"rorschach/r-1.jpg", classNames: "h-auto"},
  {src:"rorschach/r-2.jpg", classNames: "h-auto"},
  {src:"rorschach/r-3.jpg", classNames: "h-auto"},
  {src:"rorschach/r-4.jpg", classNames: "h-auto"},
  {src:"rorschach/r-5.jpg", classNames: "h-auto"},
  {src:"rorschach/r-6.jpg", classNames: "h-auto"},
  {src:"rorschach/r-7.jpg", classNames: "h-auto"},
  {src:"rorschach/rorschach.mp4", classNames: "h-auto"},
];

const ImageThumbs = () => {
  return html`
    <section className="container px-5 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 py-8 lg:py-16">
        ${GridImages.map(props => html`<${Media} ...${props} />`)}
    </section>
  `;
};

const CodeBlock = () => {
  const codeText = `
    .overlap {
        font-size: 10px;
        opacity: .2;
        color: #fff;
        text-align: justify;
        background: #fff url('../../../assets/rorschach-2.gif') center center no-repeat;
        mix-blend-mode: multiply;
    }
  `
  return html`
    <div className="container px-5 py-8 lg:py-16">
    <pre className="bg-gray-200 border-l-4 border-red-500 py-4 lg:py-8 w-full overflow-x-auto">
      <code>
        ${codeText}
      </code>
    </pre>
    </div>
  `
}


const RorschachPage = (props) => {
  return html`
     <${PostLayout} ...${props}>
        <${Rorschach} />
     </PostLayout>
  `
};

export {
  Rorschach,
  RorschachPage
}