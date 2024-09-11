import SideBar from "./_components/side-bar";
import AllProjects from "./allprojects/page";

export default function Home() {
  return (
    <div className="flex w-full h-screen poppins">
      <SideBar />
      <AllProjects />
    </div>
  );
}
