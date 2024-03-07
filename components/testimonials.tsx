import { useIntl } from "react-intl";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from 'next/image'

export default function Testimonials({
  text,
  image1,
  message1,
  name1,
  location1,

  image2,
  message2,
  name2,
  location2,

  image3,
  message3,
  name3,
  location3,

  image4,
  message4,
  name4,
  location4,

  image5,
  message5,
  name5,
  location5,

  image6,
  message6,
  name6,
  location6,

  image7,
  message7,
  name7,
  location7,

  image8,
  message8,
  name8,
  location8,

  image9,
  message9,
  name9,
  location9,

  image10,
  message10,
  name10,
  location10,
}: any) {
  const intl = useIntl();
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-white lg:py-6">
      <div className="mb-20 px-6">
        <div className="mx-auto max-w-2xl text-center ">
          <span className="  bg-gradient-to-r from-accent-1 via-red-400 to-blue-400 inline-block text-transparent bg-clip-text"></span>
          <div
            className="mt-2 text-4xl font-bold tracking-tight text-accent-1 sm:text-5xl"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "testimonial_title" }),
            }}
          />
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-center text-lg leading-8 text-gray-700 ">
          {text}
        </p>
      </div>

      <div className="embla relative" ref={emblaRef}>
        {/* contenerdor slides */}
        <div className="embla__container">

          {/* 1 */}
          {name1 && (  <div className="embla__slide">
            <div className="bg-accent-2 my-12  pb-4 lg:pb-20 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <Image
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover object-top min-h-[150px] lg:min-h-auto "
                      src={image1.sizes.medium_large}
                      alt=""
                      width={image1.sizes["medium_large-width"]}
                      height={image1.sizes["medium_large-height"]}
                    />
                  </div>
                  
                </div>
                

                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 h-[500px]">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-accent-1/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-accent-1 sm:text-2xl sm:leading-9 ">
                      <p>{message1}</p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div
                        className="font-semibold text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: name1 ? name1 : "&nbsp;",
                        }}
                      />
                      <div className="mt-1 text-gray-600">{location1}</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>)}
        

          {/* 2 */}
          {name2 && ( <div className="embla__slide">
            <div className="bg-accent-2 pb-20 my-12 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <Image
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover object-top min-h-[150px] lg:min-h-auto "
                      src={image2.sizes.medium_large}
                      alt=""
                      width={image2.sizes["medium_large-width"]}
                      height={image2.sizes["medium_large-height"]}
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 h-[500px]">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-accent-1/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-accent-1 sm:text-2xl sm:leading-9">
                      <p>{message2}</p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div
                        className="font-semibold text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: name2 ? name2 : "&nbsp;",
                        }}
                      />
                      <div className="mt-1 text-gray-600">{location2}</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>)}
         

          {/* 3 */}
          {name3  && (<div className="embla__slide">
            <div className="bg-accent-2 pb-20 my-12 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <Image
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover object-top min-h-[150px] lg:min-h-auto"
                      src={image3.sizes.medium_large}
                      alt=""
                      width={image3.sizes["medium_large-width"]}
                      height={image3.sizes["medium_large-height"]}
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 h-[500px]">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-accent-1/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-accent-1 sm:text-2xl sm:leading-9">
                      <p>{message3}</p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div
                        className="font-semibold text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: name3 ? name3 : "&nbsp;",
                        }}
                      />
                      <div className="mt-1 text-gray-600">{location3}</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>)}
          

          {/* 4 */}
          {name4 &&(<div className="embla__slide">
            <div className="bg-accent-2 pb-20 my-12 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <Image
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover object-top min-h-[150px] lg:min-h-auto"
                      src={image4.sizes.medium_large}
                      alt=""
                      width={image4.sizes["medium_large-width"]}
                      height={image4.sizes["medium_large-height"]}
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 h-[500px]">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-accent-1/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-accent-1 sm:text-2xl sm:leading-9">
                      <p>{message4}</p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div
                        className="font-semibold text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: name4 ? name4 : "&nbsp;",
                        }}
                      />
                      <div className="mt-1 text-gray-600">{location4}</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>)}
          

          {/* 5 */}
          {name5 &&( <div className="embla__slide">
            <div className="bg-accent-2 pb-20 my-12 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <Image
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover object-top min-h-[150px] lg:min-h-auto"
                      src={image5.sizes.medium_large}
                      alt=""
                      width={image5.sizes["medium_large-width"]}
                      height={image5.sizes["medium_large-height"]}
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 h-[500px]">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-accent-1/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-accent-1 sm:text-2xl sm:leading-9">
                      <p>{message5}</p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div
                        className="font-semibold text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: name5 ? name5 : "&nbsp;",
                        }}
                      />
                      <div className="mt-1 text-gray-600">{location5}</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>)}
         

          {/* 6 */}
          {name6 &&(<div className="embla__slide">
            <div className="bg-accent-2 pb-20 my-12 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <Image
                     className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover object-top min-h-[150px] lg:min-h-auto"
                     src={image6.sizes.medium_large}
                     alt=""
                     width={image6.sizes["medium_large-width"]}
                     height={image6.sizes["medium_large-height"]}
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 h-[500px]">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-accent-1/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-accent-1 sm:text-2xl sm:leading-9">
                      <p>{message6}</p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div
                        className="font-semibold text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: name6 ? name6 : "&nbsp;",
                        }}
                      />
                      <div className="mt-1 text-gray-600">{location6}</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>)}
          

          {/* 7 */}
          {name7 &&(<div className="embla__slide">
            <div className="bg-accent-2 pb-20 my-12 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <Image
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover object-top min-h-[150px] lg:min-h-auto "
                      src={image7.sizes.medium_large}
                      alt=""
                      width={image7.sizes["medium_large-width"]}
                      height={image7.sizes["medium_large-height"]}
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 h-[500px]">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-accent-1/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-accent-1 sm:text-2xl sm:leading-9">
                      <p>{message7}</p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div
                        className="font-semibold text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: name7 ? name7 : "&nbsp;",
                        }}
                      />
                      <div className="mt-1 text-gray-600">{location7}</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>)}
          

          {/* 8 */}
          {name8 &&(<div className="embla__slide">
            <div className="bg-accent-2 pb-20 my-12 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <img
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover object-top min-h-[150px] lg:min-h-auto"
                      src={image8.sizes.medium_large}
                      alt=""
                      width={image8.sizes["medium_large-width"]}
                      height={image8.sizes["medium_large-height"]}
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 h-[500px]">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-accent-1/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-accent-1 sm:text-2xl sm:leading-9">
                      <p>{message8}</p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div
                        className="font-semibold text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: name8 ? name8 : "&nbsp;",
                        }}
                      />
                      <div className="mt-1 text-gray-600">{location8}</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>)}
          

          {/* 9 */}
          {name9 &&(<div className="embla__slide">
            <div className="bg-accent-2 pb-20 my-12 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <Image
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover object-top min-h-[150px] lg:min-h-auto"
                      src={image9.sizes.medium_large}
                      alt=""
                      width={image9.sizes["medium_large-width"]}
                      height={image9.sizes["medium_large-height"]}
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 h-[500px]">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-accent-1/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-accent-1 sm:text-2xl sm:leading-9">
                      <p>{message9}</p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div
                        className="font-semibold text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: name9 ? name9 : "&nbsp;",
                        }}
                      />
                      <div className="mt-1 text-gray-600">{location9}</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>)}
          

          {/* 10 */}
          {name10 &&(<div className="embla__slide">
            <div className="bg-accent-2 pb-20 my-12 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <Image
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover object-top min-h-[150px] lg:min-h-auto"
                      src={image10.sizes.medium_large}
                      alt=""
                      width={image10.sizes["medium_large-width"]}
                      height={image10.sizes["medium_large-height"]}
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 h-[500px]">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-accent-1/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-accent-1 sm:text-2xl sm:leading-9">
                      <p>{message10}</p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div
                        className="font-semibold text-gray-900"
                        dangerouslySetInnerHTML={{
                          __html: name10 ? name10 : "&nbsp;",
                        }}
                      />
                      <div className="mt-1 text-gray-600">{location10}</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>)}
          
        </div>
        <button className="embla__next" onClick={scrollNext}>
          <ChevronRightIcon className=" h-8 w-8 text-gray-600 font-bold" />
        </button>
        <button className="embla__prev" onClick={scrollPrev}>
          <ChevronLeftIcon className=" h-8 w-8 text-gray-600 font-bold" />
        </button>
      </div>
    </div>
  );
}
