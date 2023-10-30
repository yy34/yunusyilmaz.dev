import Container from "../../components/Container";
import PageIntro from "../../components/PageIntro";
import SocialMedia from "../../components/SocialMedia";

const ContactPage = () => {
  return (
    <>
      <PageIntro title="Contact Me">
        <p className="mb-5 text-base md:text-xl">
          You can reach me immediately via LinkedIn or my social media accounts.
        </p>
      </PageIntro>
      <Container className="mt-12">
        <SocialMedia></SocialMedia>
      </Container>
    </>
  );
};

export default ContactPage;
