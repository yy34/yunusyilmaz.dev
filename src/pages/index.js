import { Navbar } from "../components/Navbar";
import { JobInfo } from "../components/JobInfo";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Navbar />
      <h2 className="font-extrabold cursor-default animate-title text-6xl">
        {`</hello>`}
      </h2>
      <JobInfo />
    </div>
  );
}
