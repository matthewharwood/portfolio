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

    if (href === '/') {
      anime({
        targets: polymorphRef.current,
        transformOrigin: ['0 50%', '0% 50%'],
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
          {value: -30, duration: 2000, delay: 800, easing: 'spring(1, 100, 5, 5)'},
        ],
        translateX: [
          {value: 0, duration: 0},
          {value: '-10%', duration: 1000, delay: 1600}
        ],
        translateY: [
          {value: 0, duration: 0},
          {value: '200%', duration: 2000, delay: 1600, easing: 'spring(1, 100, 10, 5)'}
        ],
        duration: 4000,
        easing: 'easeInOutSine'
      });
    }

    if (href === '/work') {
      anime({
        targets: polymorphRef.current,
        transformOrigin: ['50% 50%', '50% 50%'],

        width: [
          {value: 0, duration: 0},
          {value: '100%', duration: 1000}
        ],
        height: [
          {value: 0, duration: 0},
          {value: '100%', duration: 1000}
        ],
        scale: [
          {value: 0, duration: 0,},
          {value: 1, duration: 1000,}
        ],

        duration: 4000,
        easing: 'easeInOutSine'
      });
    }
  });
  return html`
    <div className="fixed inset-0 flex justify-center items-center pointer-events-none px-20 py-16">
      <div className="polymorph h-40 bg-gray-200 polymorph-home" ref="${polymorphRef}" />
    </div>`;
};

export {
  Polymorph
};