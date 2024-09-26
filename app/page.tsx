
import { House, Search, Library, Plus, ArrowRight, List } from "lucide-react";

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
          </nav>
        </aside>
        <main className="flex-1 p-6">main </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
    </div>
  );
}
