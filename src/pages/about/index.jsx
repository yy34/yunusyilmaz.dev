import SocialMedia from "../../components/SocialMedia";
import PageIntro from "../../components/PageIntro";
import FadeIn from "../../components/FadeIn";
import Button from "../../components/Button";
import mypic from "../../assets/images/profile.jpg";
import Image from "next/image";

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
        <p className="mb-5 text-base md:text-xl">{about}</p>
      </FadeIn>
    ));
  };

  return (
    <PageIntro title="About Me">
      <div className="text-neutral-600 dark:text-neutral-50">
        {renderAboutParagraphs()}
      </div>
      <FadeIn>
        <div className="flex flex-col md:flex-row gap-7 items-center justify-between border-y border-neutral-100 dark:border-neutral-700 py-5 my-10">
          <Image
            src={mypic}
            alt="Yunus Yilmaz"
            className="h-28 w-28 rounded-full object-cover object-right-top"
          />
          <div className="flex flex-col gap-5">
            <SocialMedia />
            <Button href="mailto:yunusyilmazz34@gmail.com">send mail</Button>
          </div>
        </div>
      </FadeIn>
    </PageIntro>
  );
};

export default AboutPage;
