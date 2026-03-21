import Button from "../../components/Button";
import Container from "../../components/Container";
import PageIntro from "../../components/PageIntro";

const WorkPage = () => {
  return (
    <>
      <PageIntro title="Projects">
        <p>I have not published project write-ups on this site yet.</p>
      </PageIntro>
      <Container className="mt-12" innerClassName="max-w-3xl">
        <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 dark:border-neutral-800 dark:bg-neutral-950/60">
          <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300 md:text-lg md:leading-8">
            Until that page is ready, the About page is the best place to
            review my background and work experience.
          </p>
          <div className="mt-6">
            <Button href="/about">View Background</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WorkPage;
