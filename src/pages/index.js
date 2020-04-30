import {html} from '../utils';
import {AH} from '../components/component_map';
import {navigationLinks} from '../_data/navigation';
import {NavigationItem} from '../components/navigation';

export const Index = () => {
  return html`

    <div data-router-view="index">
      <nav class="fixed bottom-0 right-0 items-end md:grid md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-5 lg:col-start-4 items-end pr-4 pb-2 md:pb-16 md:pr-16  box-border">
        ${navigationLinks.map((nl, index) => html`<${NavigationItem} link="${nl.link}" index="${index}"/>`)}
      </nav>
      <div >
       <${AH.RunningHeader} />
      </div>
    </div>
   
  `;
};
