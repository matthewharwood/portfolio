import {html} from 'htm/preact';
import {useLayoutEffect, useRef, useState} from 'preact/hooks';
import {isServer} from '../../utils/which_env';


const calcActiveLink = (s, pathname) => s.map(i => {
  if (isServer) return;
  if (i.href === pathname) {
    i.isActive = true;
  } else {
    i.isActive = false;
  }
  return i;
});

export const NavigationBar = () => {

  const links = [
    {
      title: 'Work',
      href: '/work',
      isActive: false,
    },
    {
      title: 'Lab',
      href: '/lab',
      isActive: false,
    },
    {
      title: 'Profile',
      href: '/profile',
      isActive: false,
    },
  ];

  const navRef = useRef(null);
  const [stateLink, updateStateLinks] = useState(links);
  useLayoutEffect(() => {
    const hide = () => {
      navRef.current.classList.add('hide-nav');
      navRef.current.classList.remove('show-nav');
    };
    const show = () => {
      navRef.current.classList.add('show-nav');
      navRef.current.classList.remove('hide-nav');
    };
    if (location.pathname !== '/') {
      show();
    }

    // Init
    navRef.current.classList.add('transition', 'duration-150', 'ease-in-out');
    const calculatedActiveLinks = calcActiveLink(links, location.pathname);
    updateStateLinks(calculatedActiveLinks);


    // Update
    import('../../router').then(({InitRouter}) => {
      InitRouter.getRouter().on('NAVIGATE_IN', ({to, trigger, location}) => {
        updateStateLinks(calcActiveLink(links, location.pathname));
        if (location.pathname === '/') {
          hide();
        } else {
          show();
        }
      });
    });
  }, []);
  const spin = (e) => {
    e.target.classList.add('spin')
  }
  const cancelSpin = (e) => {
    e.target.classList.remove('spin')
  }
  return html`
    <header ref="${navRef}" className="nav-styles hide-nav">
      <div className="px-4 lg:px-12 flex">
      <div className="flex flex-1">
          <a href="/" className="pr-8" onMouseEnter="${spin}" onMouseLeave="${cancelSpin}">
            <span className="sm:flex text-md capitalize pl-3 whitespace-no-wrap font-mh font-bold text-black">
              <span className="logo">/</span><span className="pl-4 hidden sm:flex">Morning Harwood</span>
            </span>
          </a>
        </div>
        <ul className="flex transform -translate-x-1">
          ${stateLink.map(
      (link) => html` <${NavLink} ...${link} /> `
  )}
        </ul>
      </div>
    </header>

  `;
};

const NavLink = ({title, href, isActive}) => {
  const activeClass = isActive ? 'font-bold' : '';
  const hover = isActive ? 'cursor-default' : 'hover:bg-black hover:text-white'
  return html`
    <li className="py-1 md:my-0 md:py-0 ml-1 sm:ml-2 md:ml-4">
      <a href="${href}" className="px-3 py-2  bg-transparent ${hover} text-gray-900 uppercase font-normal tracking-wide font-mh ${activeClass}">${title}</a>
    </li>
  `;
};
