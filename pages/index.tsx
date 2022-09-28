import type { NextPage } from "next";
import { ItemHeader } from "../components/ItemHeader";
import { SectionHeader } from "../components/SectionHeader";
import { SectionSubHeader } from "../components/SectionSubHeader";
import { SkillBadge } from "../components/SkillBadge";
import { Text } from "../components/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

const Home: NextPage = () => {
  return (
    <main className="p-4 flex justify-center flex-1">
      <div className="max-w-3xl">
        {/* Header */}
        <section className="border-b py-4 flex space-between">
          <div>
            <SectionHeader>Phua Liang Jun</SectionHeader>
            <SectionSubHeader>Full-Stack Software Engineer</SectionSubHeader>
            <Text className="text-gray-500 text-sm italic">
              Likes keeping things simple -- whether it be code or processes
            </Text>
          </div>
          <div className="flex-1 text-sm text-right text-gray-600">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/phualiangjun/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  /phualiangjun
                  <i className="devicon-linkedin-plain colored ml-1"></i>
                </a>
              </li>
              <li>
                <a href="tel:+6596346924">
                  +65 96346924
                  <FontAwesomeIcon icon={faWhatsappSquare} className="text-green-600 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="print:flex lg:flex">
          <div className="print:w-3/5 lg:w-1/3">
            {/* Skills */}
            <section className="border-b py-4 print:p-4 print:pl-0 lg:p-4 lg:pl-0">
              <SectionHeader>Skills</SectionHeader>
              <div className="mb-2">
                <SectionSubHeader>Languages</SectionSubHeader>
                <ul className="">
                  <SkillBadge
                    icon="devicon-typescript-plain colored"
                    text="Typescript"
                  />
                  <SkillBadge
                    icon="devicon-elixir-plain colored"
                    text="Elixir"
                  />
                  <SkillBadge icon="devicon-php-plain colored" text="PHP" />
                  <SkillBadge
                    icon=" devicon-sass-original colored"
                    text="SASS"
                  />
                </ul>
              </div>
              <div className="mb-2">
                <SectionSubHeader>Frameworks & Libraries</SectionSubHeader>
                <ul className="">
                  <SkillBadge
                    icon="devicon-react-original colored"
                    text="React"
                  />
                  <SkillBadge icon="devicon-nodejs-plain colored" text="Node" />
                  <SkillBadge
                    icon="devicon-express-original colored"
                    text="Express"
                  />
                  <SkillBadge
                    icon="devicon-nextjs-original colored"
                    text="Next.js"
                  />
                  <SkillBadge
                    icon="devicon-nestjs-plain colored"
                    text="Nest.js"
                  />
                  <SkillBadge
                    icon="devicon-phoenix-plain colored"
                    text="Phoenix"
                  />
                </ul>
              </div>
              <div className="">
                <SectionSubHeader>DevOps & Databases</SectionSubHeader>
                <ul className="">
                  <SkillBadge
                    icon="devicon-docker-plain colored"
                    text="Docker"
                  />
                  <SkillBadge
                    icon="devicon-terraform-plain colored"
                    text="Terraform"
                  />
                  <SkillBadge
                    icon="devicon-amazonwebservices-plain colored"
                    text="AWS"
                  />
                  <SkillBadge
                    icon="devicon-postgresql-plain colored"
                    text="Postgres"
                  />
                </ul>
              </div>
            </section>
            {/* Education */}
            <section className="border-b py-4 print:p-4 print:pl-0 lg:p-4 lg:pl-0">
              <SectionHeader>Education</SectionHeader>
              <ul className="mt-2">
                <li className="mb-4">
                  <ItemHeader
                    header="General Assembly"
                    subHeader="Web Development Intensive"
                    dateTime="2018"
                  />
                  {/* TODO: Add education image and timeline */}
                  {/* <span className="border-l ml-32 my-2"></span> */}
                </li>
                <li className="mb-4">
                  <ItemHeader
                    header="42 Silicon Valley"
                    subHeader="Piscine Boot Camp"
                    dateTime="2018"
                  />
                </li>
                <li className="mb-2">
                  <ItemHeader
                    header="Ngee Ann Polytechnic"
                    subHeader="Diploma in Information Technology"
                    dateTime="2011"
                  />
                </li>
              </ul>
            </section>
          </div>
          <div className="py-4 print:p-4 print:pr-0 print:border-l lg:p-4 lg:pr-0 lg:border-l">
            {/* Experience */}
            <section className="">
              <SectionHeader>Experience</SectionHeader>
              <ul className="mt-2">
                <li className="mb-4">
                  <ItemHeader
                    header="Hodlnaut"
                    subHeader="Software Engineer"
                    dateTime="Jan 2022 - Sep 2022"
                  ></ItemHeader>
                  <ul className="text-xs list-disc list-inside text-gray-800">
                    <li>
                      Developed new features in Node.js / React in various
                      product verticals (KYC, Growth, Customer Support)
                    </li>
                    <li>
                      Sped up feature deployments by up to 95% by implementing a
                      dynamic configuration service
                    </li>
                    <li>
                      Introduced PostgreSQL to database stack by implementing
                      Prisma Library service
                    </li>
                    <li>
                      Experimented with different workflow processes to improve
                      productivity (Scrum, Shape Up)
                    </li>
                    <li>Handled Devops via Terraform, Docker and AWS</li>
                    <li>
                      Worked on prototype Exchange product with Nest JS and
                      Next.js
                    </li>
                    <li>
                      Diagnosed and triaged production or transaction
                      (Fireblocks) issues as Duty Engineer
                    </li>
                  </ul>
                </li>
                <li className="mb-4">
                  <ItemHeader
                    header="Wego"
                    subHeader="Software Engineer / Scrum Master"
                    dateTime="Mar 2021 - Jan 2022"
                  ></ItemHeader>
                  <ul className="text-xs list-disc list-inside text-gray-800">
                    <li>
                      Developed new features for Shopback Cashback app in Elixir
                      / Next.js
                    </li>
                    <li>
                      Facilitated Sprint plannings and retrospective as Scrum
                      Master
                    </li>
                    <li>
                      Assisted Product owner in managing Jira and Confluence
                    </li>
                    {/* <li>
                      Worked on modifying legacy systems in Ruby for integration
                      in Elixir
                    </li> */}
                    <li>
                      Participated in cross product meetings to identify
                      blockers
                    </li>
                  </ul>
                </li>
                <li className="mb-4">
                  <ItemHeader
                    header="Recruiter Pal"
                    subHeader="Web Developer"
                    dateTime="Mar 2019 - Dec 2020"
                  ></ItemHeader>
                  <ul className="text-xs list-disc list-inside text-gray-800">
                    <li>
                      Developed new features for Recruiter Pal ATS in Laravel
                      (PHP) and Angular JS
                    </li>
                    <li>Worked on prototype mobile app in React Native</li>
                  </ul>
                </li>
                <li className="mb-4">
                  <ItemHeader
                    header="General Assembly"
                    subHeader="Instructional Associate"
                    dateTime="Nov 2018 - Mar 2019"
                  ></ItemHeader>
                  <ul className="text-xs list-disc list-inside text-gray-800">
                    <li>
                      Assisted lead instructor with class administration and
                      lessons
                    </li>
                    <li>Helped students with their queries and assignments</li>
                  </ul>
                </li>
                <li className="mb-4">
                  <ItemHeader
                    header="ST Electronics"
                    subHeader="Associate Engineer"
                    dateTime="Nov 2016 - Dec 2017"
                  ></ItemHeader>
                  <ul className="text-xs list-disc list-inside text-gray-800">
                    <li>Responded to network incidents as L2 Support</li>
                    <li>Key Man for Network Management System issues </li>
                    {/* <li>
                    Assisted vendors with equipment deployments on site
                  </li> */}
                  </ul>
                </li>
                <li className="">
                  <ItemHeader
                    header="Singapore Armed Forces"
                    subHeader="Military Intelligence Engineer"
                    dateTime="2011 - 2016"
                  ></ItemHeader>
                  <ul className="text-xs list-disc list-inside text-gray-800">
                    <li>Responded to network incidents as L1 Support</li>
                    {/* <li>
                    Escorted external contractors in secure locations for
                    equipment deployments
                  </li> */}
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
