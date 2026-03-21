import Container from "../../components/Container";
import PageIntro from "../../components/PageIntro";
import Socials from "../../components/Socials";

const ContactPage = () => {
  return (
    <>
      <PageIntro title="Contact Me">
        <p>
          LinkedIn and email are the best ways to reach me.
        </p>
      </PageIntro>
      <Container className="mt-12" innerClassName="max-w-3xl">
        <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 dark:border-neutral-800 dark:bg-neutral-950/60">
          <p className="text-sm font-medium tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Reach out directly
          </p>
          <Socials />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
