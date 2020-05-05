import {html} from 'htm/preact';
import {useLayoutEffect, useRef} from 'preact/hooks';
import anime from 'animejs/lib/anime.es.js';
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

const links = [
  {
    title: 'home',
    href: '/',
    isActive: false,
    origin: 'origin-bottom-left'
  },
  {
    title: 'Work',
    href: '/work',
    isActive: false,
    origin: 'origin-center'
  },
  {
    title: 'Lab',
    href: '/lab',
    isActive: false,
    origin: 'origin-center'
  },
  {
    title: 'Profile',
    href: '/profile',
    isActive: false,
    origin: 'origin-center'
  },
];

const Polymorph = () => {
  const polymorphRef = useRef(null);

  useLayoutEffect(() => {
    calcActiveLink(links, location.pathname);
    const {origin, href} = calcActiveLink(links, location.pathname).find(i => Boolean(i.isActive));
    const isNotPortrait = window.innerWidth/window.innerHeight >= 1;
    const rotateZValue = isNotPortrait ? -(Math.atan(window.innerHeight/window.innerWidth) * 180 / Math.PI) : -30;
    if (href === '/') {
      anime({
        targets: polymorphRef.current,
        transformOrigin: ['0 50%', '50% 50%'],
        boxShadow: [
          {value: ['-14px -2px 24px rgba(255, 255, 255, 0.75), 12px 12px 12px rgba(170, 170, 170, 0.25)'],  duration: 0,},
          {value: ['-14px -2px 24px rgba(255, 255, 255, 0.75), 12px 12px 12px rgba(170, 170, 170, 0.25)'],  duration: 1000,},
        ],
        scaleX: [
          {value: 0, duration: 0,},
          {value: 1, duration: 1000}
        ],
        rotateZ: [
          {value: 0, duration: 0, delay: 800,},
          {value: rotateZValue, duration: 2000, delay: 800, easing: 'spring(1, 100, 5, 5)'},
        ],
        duration: 4000,
        easing: 'easeInOutSine'
      });
    }
  });
  return html`
    <div className="absolute z-0 inset-0 flex justify-center items-center pointer-events-none lg:px-20 lg:py-16 py-4 px-6">
      <div className="w-3/4 md:w-3/4 xl:w-1/2 h-16 md:h-40 bg-black polymorph-home" ref="${polymorphRef}" />
    </div>`;
};

export {
  Polymorph
};