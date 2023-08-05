import { Tools } from "../../components/Tools";
import { Navbar } from "../../components/Navbar";
import {
  Frontend,
  Backend,
  Others,
  WantToLearn,
} from "../../data/Technologies";
export default function index() {
  return (
    <>
      <Navbar />
      <div className="animate-fade-in-short">
        <div className="mx-auto max-w-screen-lg py-6">
          <h2 className="my-4 capitalize text-lg md:text-xl tracking-tight font-bold text-center">
            Technology & Tools I use
          </h2>
          <Tools data={Frontend} title="Front-End" />
          <Tools data={Backend} title="Back-End" />
          <Tools data={Others} title="Other Tools" />
          <Tools data={WantToLearn} title="Development Goals" />
        </div>
      </div>
    </>
  );
}
