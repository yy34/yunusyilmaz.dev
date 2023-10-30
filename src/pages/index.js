import Socials from "../components/Socials";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import Button from "../components/Button";
import Experience from "../components/Experience";
import Stack from "../components/Stack";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-48">
        <FadeIn className="max-w-2xl">
          <Socials />
          <h1 className="text-2xl md:text-3xl before:tracking-tight font-bold text-neutral-950 dark:text-neutral-50">
            Hello, I'm Yunus.
          </h1>

          <p className="my-6 font-thin text-base md:text-xl text-neutral-700 dark:text-neutral-50">
            I'm a full stack developer based in Istanbul, and I'm very
            passionate and dedicated to my work. I currently work at sahibinden.
          </p>

          <Button href="/about"> About Me</Button>
        </FadeIn>
      </Container>
      <Experience />
      <Stack />
    </main>
  );
}
