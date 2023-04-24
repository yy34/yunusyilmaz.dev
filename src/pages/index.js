import { Navbar } from "../components/Navbar";
import { JobInfo } from "../components/JobInfo";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="animate-fade-in">
        <Navbar />
      </div>
      <h2 className="font-extrabold cursor-default animate-title text-6xl my-16">
        {`</hello>`}
      </h2>
      <JobInfo />
    </div>
  );
}
