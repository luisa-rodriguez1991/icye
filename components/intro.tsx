import { useIntl } from "react-intl";
import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export default function Intro({ text, onOpenForm }: any) {
  const intl = useIntl();

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="bg-white relative">
      <div className="absolute h-full w-full">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "push",
                },
                onclick: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  size: 4,
                  duration: 2,
                  opacity: 8,
                  speed: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  quantity: 4,
                },
              },
            },
            particles: {
              number: {
                value: 10,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#011f7f",
              },
              shape: {
                type: "circle",
                image: {
                  src: "img/github.svg",
                  width: 50,
                  height: 50,
                },
              },
              opacity: {
                value: 0.3,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 10,
                random: false,
                anim: {
                  speed: 5,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 200,
                color: "#ffffff",
                opacity: 1,
                width: 2,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },

            retina_detect: true,
          }}
        />
      </div>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-6 lg:pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-6 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <span className="bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text"></span>
                <div
                  className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl"
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "intro_title" }),
                  }}
                />

                <p className="mt-6 text-lg leading-8 text-gray-800">{text}</p>
                <div className="mt-6 flex items-center gap-x-6">
                  <button
                    onClick={() => onOpenForm(true)}
                    className="z-[999999] lg:z-[0]  fixed top-auto bottom-0 left-0 rounded-[0px] lg:rounded-[40px] w-full lg:static text-center lg:w-auto  lg:min-w-[147px] bg-accent-1 p-4 text-sm font-semibold text-white shadow-sm hover:bg-accent-2 hover:text-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {intl.formatMessage({ id: "header_button" })}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/img/Background.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
