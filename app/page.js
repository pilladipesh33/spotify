import Image from "next/image";
import Sidebar from "../components/Sidebar.js";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        <Sidebar />
      </main>
    </div>
  );
}
