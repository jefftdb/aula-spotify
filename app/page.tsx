
import { House, Search, Library, Plus, ArrowRight, List,Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-zinc-950 p-6 flex flex-row">header</header>
      <div className="flex flex-1">
        <aside className=" w-96 bg-zinc-950 p-6"> 
          <nav className="bg-zinc-800 rounded-sm flex flex-col pb-2 pt-2 space-y-4">
            <div className="flex flex-row justify-between">
              <a href="" className="hover:text-zinc-100 flex items-center gap-2 
                text-xl font-semibold text-zinc-300 p-4">
                <Library />
                Sua Biblioteca
              </a>
              <div className="flex flex-row pr-4">
                <a href="" className="flex items-center font-semibold text-zinc-300">
                  <Plus/>
                </a>
                <a href="" className="flex items-center font-semibold text-zinc-300">
                  <ArrowRight/>
                </a>
              </div>
            </div>
            <div className="flex-row flex px-2 space-x-3 overflow-hidden">
              <a href="" className="p-3 bg-zinc-700 rounded-full hover:bg-zinc-600"> Playlist</a>
              <a href="" className="p-3 bg-zinc-700 rounded-full hover:bg-zinc-600">Podcasts</a>
              <a href="" className="p-3 bg-zinc-700 rounded-full hover:bg-zinc-600">Álbuns</a>
              <a href="" className="p-3 bg-zinc-700 rounded-full hover:bg-zinc-600">Artistas</a>
            </div>
            <div className="flex flex-row justify-between px-4">
              <a href="" className="group flex items-center justify-center text-zinc-300" >
                <Search className="z-10"/>
                <button className="z-0 absolute bg-zinc-500 w-8 h-8 rounded-full opacity-40 p-5 invisible group-hover:visible"/>
              </a>
              <a href="" className="flex items-center text-zinc-500 gap-2 text-sm font-semibold hover:text-zinc-100">
                Recentes<List/>
              </a>
            </div>
          </nav>
          <div className="flex flex-row px-4">
          <a href="" className="group flex items-center justify-center text-zinc-300" >
                <Play fill="#fff" className="z-10 invisible group-hover:visible"  />
                <button  className="absolute bg-zinc-500 w-8 h-8 rounded-full opacity-40 p-5 invisible group-hover:visible z-0 "/>
              </a>
              <a href="" className="flex items-center text-zinc-500 gap-2 text-sm font-semibold hover:text-zinc-100">
              <Image src="/nickelback.png" width={60} height={60} alt="" /> Nikelback
              </a>
            
          </div>
          
        </aside>
        <main className="flex-1 p-6">main </main>
        
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
    </div>
  );
}
