import Container from "../../components/Container";
import SocialMedia from "../../components/SocialMedia";
import PageIntro from "../../components/PageIntro";
import FadeIn from "../../components/FadeIn";
import mypic from "../../assets/images/profile.jpg";
import Image from "next/image";
import ExperienceDetail from "../../components/ExperienceDetail";

const AboutPage = () => {
  const aboutMe = [
    "I'm a full stack developer with more than 3 years of experience based in Istanbul.",
    "I'm motivated by my belief in continuous learning and self-improvement, so I try to take advantage of learning opportunities in every situation. I enjoy learning new things and sharing my knowledge. This passion further strengthens my dedicated approach to continuous self-improvement.",
    "I have experience in developing scalable, secure and reliable web applications using various frameworks and technologies. I am excited to solve complex problems and learn new skills. With my attention to detail and user-centered approach, I strive to deliver effective solutions that delight users.",
    "I love creating high-quality code and following best practices and industry standards. I am constantly looking for new challenges and opportunities to grow as a developer.",
  ];

  const renderAboutParagraphs = () => {
    return aboutMe.map((about, index) => (
      <FadeIn key={index}>
        <p className="mb-5">{about}</p>
      </FadeIn>
    ));
  };

  return (
    <>
      <PageIntro title="About Me">
        <div className="text-neutral-600 dark:text-neutral-300">
          {renderAboutParagraphs()}
        </div>
      </PageIntro>

      <ExperienceDetail></ExperienceDetail>

      <Container className="mt-12 sm:mt-16" innerClassName="max-w-3xl">
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-7 border-y border-neutral-100 py-5 dark:border-neutral-700 md:flex-row">
            <Image
              src={mypic}
              alt="Yunus Yilmaz"
              className="h-36 w-36 object-cover object-right-top"
            />
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="text-sm font-medium tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Get in touch
              </div>
              <SocialMedia />
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default AboutPage;
