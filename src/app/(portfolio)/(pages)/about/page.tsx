import { HeadingText } from "@/components/ui/heading-text";
import Image from "next/image";

import smile from "/public/images/home/smile.jpeg";
import me from "/public/images/home/me.jpeg";
import smashing from "/public/images/home/smashing.jpg";
import summit from "/public/images/home/summit.jpg";
import coding from "/public/images/home/coding.jpg";
import ship from "/public/images/home/ship.jpg";
import wsmb from "/public/images/home/wsmb.jpg";
import kiddo from "/public/images/home/kiddo.jpg";
export default function AboutPage() {
  return (
    <main className="flex flex-col py-8">
      <div className="space-y-4">
        <HeadingText subtext="Details about me.">About</HeadingText>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-[60%] gap-3 flex flex-col">
            <p>
              Hello! I&apos;m Alif. I started learning web development in May
              2020, which is the start of the pandemic. I have nothing much to
              do so I decided to learn web development from a udemy course, then
              started watching a bunch of youtube videos to explore more about
              web development especially frontend development.
            </p>
            <p>
              There are a lot of things and technologies to learn in frontend
              development and I am motivated to learn as much as possible. I
              enjoy learning something new and getting feedback to make myself
              better and improve.
            </p>
            <p>
              In this website I will be writing some blogs and showcase my
              projects. I believe that writing what I have learned is the best
              way to remember things, and I can share my knowledge along the
              way. So do contact me and I will be very happy to help!
            </p>
          </div>
          <div className="md:w-[40%] w-full  columns-2 md:columns-3 gap-4">
            <div className="relative h-40 mb-4 hovers">
              <Image
                alt="Me speaking on stage at React Summit about the future of Next.js"
                src={summit}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80 mb-4 hovers">
              <Image
                alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
                src={wsmb}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-[-16px] md:object-center"
              />
            </div>
            <div className="relative h-40 md:h-80 md:mb-4 hovers">
              <Image
                alt="Me standing on stage at coding delivering the keynote"
                src={me}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-center"
              />
            </div>
            <div className="relative h-40 mb-4 hovers">
              <Image
                alt="Me standing on stage at mdashingConf giving a talk about my optimimd for the web"
                src={coding}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-40 mb-4 hovers">
              <Image
                alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
                src={ship}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80 hovers">
              <Image
                alt="My badge on top of a pile of badges from a Vercel meetup we held"
                src={smile}
                fill
                sizes="(min-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
