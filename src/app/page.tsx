import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/revel" width={104} height={104} alt="Capa do album Revel de Filipe Ret" />
              <strong>Revel</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/handwritter.jpg" width={104} height={104} alt="Capa do album Handwritten de Shawn Mendes" />
              <strong>Handwritten</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eminem-show.jpg" width={104} height={104} alt="Capa do album The Eminem Show de Eminem" />
              <strong>The Eminem Show</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/vida-cara.jpg" width={104} height={104} alt="Capa do album Vida Cara de Orochi" />
              <strong>Vida Cara</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/exagerado.jpg" width={104} height={104} alt="Capa do album Exagerado de Cazuza" />
              <strong>Exagerado</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/frejat.jpg" width={104} height={104} alt="Capa do album Amor pra recomeçar de Frejat" />
              <strong>Amor pra Recomeçar</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Lucas Mesquita</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/vintage-culture.jpg"
                width={120}
                height={120}
                alt="Capa do album Vintage Culture & Friends 2 de Vintage CUlture"
                className="w-full"
              />
              <strong className="font-semibold">Vintage Culture & Friends 2</strong>
              <span className="text-sm text-zinc-400">Dashdot</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/jay-z.jpg" width={120} height={120} alt="Capa do album The Blueprint 3 de JAY-Z" className="w-full" />
              <strong className="font-semibold">The Blueprint 3</strong>
              <span className="text-sm text-zinc-400">JAY-Z, Alicia Keys</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/revel" width={120} height={120} alt="Capa do album Revel de Filipe Ret" className="w-full" />
              <strong className="font-semibold">Vintage Culture & Friends 2</strong>
              <span className="text-sm text-zinc-400">Dashdot</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/revel" width={120} height={120} alt="Capa do album Revel de Filipe Ret" className="w-full" />
              <strong className="font-semibold">Vintage Culture & Friends 2</strong>
              <span className="text-sm text-zinc-400">Dashdot</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/revel" width={120} height={120} alt="Capa do album Revel de Filipe Ret" className="w-full" />
              <strong className="font-semibold">Vintage Culture & Friends 2</strong>
              <span className="text-sm text-zinc-400">Dashdot</span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
