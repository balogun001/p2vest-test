import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
import { BodyText, Title } from "@ui/Text";
import { TextArea } from "@ui/Textarea";
import { Wrapper } from "@ui/Wrapper";
import Image from "next/image";
import FacebookIcon from "src/assets/icon/FacebookIcon";
import InstagramIcon from "src/assets/icon/InstagramIcon";
import LinkedInIcon from "src/assets/icon/LinkedInIcon";
import LocationIcon from "src/assets/icon/LocationIcon";
import MessageIcon from "src/assets/icon/MessageIcon";
import MouseIcon from "src/assets/icon/MouseIcon";
import PhoneIcon from "src/assets/icon/PhoneIcon";
import TwitterIcon from "src/assets/icon/TwitterIcon";
import {
  CalenderImage,
  CheckVector,
  CommentVector,
  PhoneVector,
  Property1,
  Property2,
} from "src/assets/images";
import BackgroundSlider from "src/components/BackgroundSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";

export default function Home() {
  const images = [
    "/images/Mask1.webp",
    "/images/Mask2.webp",
    "/images/Mask3.webp",
    "/images/Mask4.webp",
  ];
  const images2 = ["/images/Eating.png", "/images/Eating2.png"];

  const slides1 = images.map((image) => ({ image }));
  const slides2 = images2.map((image) => ({ image }));
  const faqs = [
    "How does Revve work?",
    "Where is Revve available?",
    "Is Revve a bank?",
    "Is my money safe with Revve?",
    "What document do I need for verification?",
    "What should I do if my transaction is delayed or fails?",
    "Can I transfer money within the same currency?",
  ];
  return (
    <main>
      {/* <section>
        <div className="w-full h-[800px]">
          <BackgroundSlider slides={slides1}>
            <div className="relative w-full h-full z-20">
              <Wrapper>
                {/* Ensure this div fills the height of its parent */}
      {/* <div className="w-full h-full flex flex-col justify-between"> */}
      {/* Top section: Header */}
      {/* <Header /> */}

      {/* Bottom section: Content with two columns */}
      {/* <div className="flex items-end justify-between"> */}
      {/* Left column */}
      {/* <div className="lg:w-[270px] text-white space-y-20">
                      <div className="space-y-4">
                        <BodyText className="!text-4xl">Canada</BodyText>
                        <ArrowRightIcon />
                      </div> */}
      {/* <BodyText>
                        Seamlessly bridge distances with our effortless
                        remittance service. Send support, and financial care to
                        your loved ones back home.
                      </BodyText>
                    </div> */}

      {/* Right column */}
      {/* <div className="lg:w-[270px] text-white space-y-20"> */}
      {/* <div className="space-y-4">
                        <BodyText className="!text-4xl">Canada</BodyText>
                        <ArrowLeftIcon className="h-14 w-14" />
                      </div>
                      <div className="space-y-4">
                        <BodyText>Get Revve on your phone</BodyText>
                        <Button size="md">Coming soon</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Wrapper>
            </div>
          </BackgroundSlider>
        </div>
      </section> */}
      <section className="relative overflow-hidden">
        <Wrapper>
          <div className="relative py-20 space-y-4">
            <div className="flex items-center justify-center ">
              <div className="w-[424px] h-[493px]">
                <BackgroundSlider className="rounded-4xl" slides={slides1}>
                  <div className="w-full h-full flex items-end justify-center text-white z-20 relative p-6">
                    <BodyText>
                      Seamlessly bridge distances with our effortless remittance
                      service. Send support, and financial care to your loved
                      ones back home.
                    </BodyText>
                  </div>
                </BackgroundSlider>
              </div>
            </div>
            <Title className="!text-4xl md:!text-6xl text-center">
              Send and Receive <br />
              Money
            </Title>

            <div
              data-aos="fade-left"
              className="w-[152px] h-[180px] absolute top-10 right-0 "
            >
              <BackgroundSlider className="rounded-xl" slides={slides2} />
            </div>

            <Image
              src={Property1}
              alt="image"
              className="hidden md:flex absolute bottom-80 right-40"
              data-aos="fade-left"
            />
            <Image
              src={Property2}
              alt="image"
              className="hidden md:flex absolute top-50 left-40"
              data-aos="fade-right"
            />
          </div>
        </Wrapper>
        <div
          data-aos="fade-left"
          className="hidden md:flex bg-green-400 rounded-xl h-36 w-36  items-center justify-center absolute bottom-20 right-0 translate-x-1/2"
        >
          <Title className="text-white !text-3xl">Send</Title>
        </div>
        <div
          data-aos="fade-right"
          className="hidden md:flex bg-green-400 rounded-xl h-36 w-36 items-center justify-center absolute top-10 left-0 -translate-x-1/2"
        >
          <Title className="text-white !text-3xl">Send</Title>
        </div>
        <div
          data-aos="fade-right"
          className="w-[191px] h-[280px] absolute bottom-20 left-0 -translate-x-1/2 hidden md:flex"
        >
          <BackgroundSlider className="rounded-4xl" slides={slides2} />
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(/images/bg-1.webp)`,
        }}
        className="w-full bg-cover bg-center"
      >
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-30 py-20 md:py-40">
            <div className="lg:w-[270px] text-white space-y-10">
              <Title className="!text-5xl">Pay Bills</Title>
              <BodyText>
                Say goodbye to long queues and endless processes—our platform
                offers a seamless solution for paying bills instantly without
                any hiccups.
              </BodyText>
              <div className="space-y-4">
                <BodyText>Get Revve on your phone</BodyText>
                <Button size="md">Coming soon</Button>
              </div>
            </div>

            <div className="flex-1 flex justify-end">
              <Image src={CalenderImage} alt="image" />
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="bg-purple-600 w-full relative">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-30 py-20">
            <div className="lg:w-[270px] text-white space-y-10">
              <Title>FAQs</Title>
              <BodyText>
                Here are some basic questions and answers to help you get
                started.
              </BodyText>
              <div className="space-y-4">
                <BodyText>Get Revve on your phone</BodyText>
                <Button>Download the app</Button>
              </div>
              <div className="flex gap-4">
                <MouseIcon className="h-5 w-5 pt-1" />
                <BodyText className="text-gray-500">
                  Point your mouse cursor here to continue scrolling
                </BodyText>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="max-w-[800px]">
                <Accordion type="single" collapsible>
                  {faqs.map((question, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                      <AccordionTrigger>{question}</AccordionTrigger>
                      <AccordionContent className="text-white">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* ======================== ====*/}
      <section>
        <footer className="py-10 relative bg-purple-600">
          <Wrapper>
            <div className="relative flex flex-col lg:flex-row bg-purple-300/90 rounded-2xl w-full p-4 lg:p-16 shadow-xl gap-10 z-50">
              <div className="flex-1 text-white ">
                <div className="h-full lg:w-[300px] flex flex-col justify-between ">
                  <Title className="!text-4xl">Get in touch</Title>
                  <div className="space-y-10">
                    <BodyText>
                      Do you have any questions or feedback? We&apos;d love to
                      hear from you
                    </BodyText>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <PhoneIcon />
                        <BodyText className="!text-sm">
                          <a href="tel:+1(343)338-5190">+1(343)338-5190</a>
                        </BodyText>
                      </div>
                      <div className="flex items-center gap-4">
                        <MessageIcon />
                        <BodyText className="!text-sm">
                          hello@revveme.com
                        </BodyText>
                      </div>
                      <div className="flex items-center gap-4">
                        <LocationIcon />
                        <BodyText className="!text-sm">
                          2482 Yonge St Toronto ON M4P 2H5
                        </BodyText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <form className="max-w-[400px] space-y-6">
                  <Input label="Fullname" placeholder="Firstname Lastname" />
                  <Input
                    label="Email address"
                    placeholder="example@gmail.com"
                  />
                  <TextArea label="Message" placeholder="Type.. here" />
                  <Button className="!w-full">Send message</Button>
                </form>
              </div>
            </div>
          </Wrapper>
          <Image
            src={PhoneVector}
            alt="image"
            className="hidden lg:flex absolute right-0 -bottom-40 z-10"
          />
          <Image
            src={CommentVector}
            alt="image"
            className="hidden lg:flex absolute right-0 top-40 z-50"
          />
        </footer>
      </section>

      <section className="bg-purple-600 w-full relative">
        <Image src={CheckVector} alt="image" />
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center justify-between md:p-6 gap-4">
            <div className="flex items-center gap-4">
              <LinkedInIcon />
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
            <div className="flex gap-2 md:gap-8 text-white">
              <BodyText className="!text-sm ">About us</BodyText>
              <BodyText className="!text-sm ">Privacy Policy</BodyText>
              <BodyText className="!text-sm ">Terms of use</BodyText>
              <BodyText className="!text-sm ">
                ©2025 Revve. All rights reserved.
              </BodyText>
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
