import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const websiteLink = "https://starfall-org.netlify.app";
const githubLink = "https://github.com/starfall-org";
const facebookLink = "https://www.facebook.com/share/16EWFeFT9x/";
const discordLink = "https://discord.gg/DHurdfwMFU";

const logoImage = "/bg.jpg";
const heroBackgroundImage = "/bg.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full py-4 px-4 md:px-6 bg-slate-900 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src={logoImage}
                alt="Starfall Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">Starfall</span>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-sm text-slate-300">Innovating for tomorrow</p>
            <p className="text-xs text-slate-400">
              Year {new Date().getFullYear()} •{" "}
              {Math.floor(
                (Number(new Date()) -
                  Number(new Date("2000-01-01T12:00:00Z"))) /
                  (365.25 * 24 * 60 * 60 * 1000)
              ) + 2000}{" "}
              J2000
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section with Background */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackgroundImage}
            alt="Starfall Background"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 bg-opacity-30 backdrop-blur-sm mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
              Reaching for the Stars, <br className="hidden sm:inline" />
              Changing the World
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Starfall is a pioneering organization dedicated to innovation,
              exploration, and making the impossible possible. Join us as we
              shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Discover Our Mission
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white hover:bg-white hover:text-slate-900 border-white"
              >
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-slate-900 text-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src={logoImage}
                    alt="Starfall Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-white">Starfall</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Pioneering the future through innovation, exploration, and
                community.
              </p>
              <div className="flex gap-4">
                <a
                  href={facebookLink}
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-400"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href={githubLink}
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-400"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href={discordLink}
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-400"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </a>
                <a
                  href={websiteLink}
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-400"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                Latest Astronomy News
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://api.nasa.gov/planetary/apod"
                    className="group flex items-start gap-2 text-sm text-slate-400 hover:text-purple-400"
                  >
                    <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 text-slate-500 group-hover:text-purple-400" />
                    <span>
                      NASA Astronomy Picture of the Day -{" "}
                      {new Date().toLocaleDateString()}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.spaceflightnewsapi.net/v4/articles"
                    className="group flex items-start gap-2 text-sm text-slate-400 hover:text-purple-400"
                  >
                    <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 text-slate-500 group-hover:text-purple-400" />
                    <span>
                      Latest Space News - Updated{" "}
                      {new Date().toLocaleTimeString()}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.le-systeme-solaire.net/rest/bodies"
                    className="group flex items-start gap-2 text-sm text-slate-400 hover:text-purple-400"
                  >
                    <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 text-slate-500 group-hover:text-purple-400" />
                    <span>
                      Solar System Events - {new Date().toLocaleDateString()}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.spacexdata.com/v4/launches/latest"
                    className="group flex items-start gap-2 text-sm text-slate-400 hover:text-purple-400"
                  >
                    <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 text-slate-500 group-hover:text-purple-400" />
                    <span>
                      Latest SpaceX Launch - {new Date().toLocaleTimeString()}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.nasa.gov/insight_weather"
                    className="group flex items-start gap-2 text-sm text-slate-400 hover:text-purple-400"
                  >
                    <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 text-slate-500 group-hover:text-purple-400" />
                    <span>
                      Mars Weather Report - {new Date().toLocaleDateString()}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                Our Achievements
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-400">
                    Pioneered breakthrough technology in quantum computing
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-400">
                    Launched 3 successful space missions in the past year
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-400">
                    Received Global Innovation Award 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Starfall. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
