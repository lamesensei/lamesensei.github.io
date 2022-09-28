import type { NextPage } from "next";
import { ItemHeader } from "../components/ItemHeader";
import { SectionHeader } from "../components/SectionHeader";
import { SectionSubHeader } from "../components/SectionSubHeader";
import { SkillBadge } from "../components/SkillBadge";
import { Text } from "../components/Text";

const Home: NextPage = () => {
  return (
    <main className="flex justify-center">
      <div className="font-sans p-4 flex flex-col gap-4">
        {/* Header */}
        <section className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <SectionHeader>Phua Liang Jun</SectionHeader>
          <SectionSubHeader>Full-Stack Software Engineer</SectionSubHeader>
        </section>
        {/* About */}
        <section className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <SectionHeader>About</SectionHeader>
          <Text>I press keyboard for muny.</Text>
        </section>
        {/* Skills */}
        <section className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <SectionHeader>Skills</SectionHeader>
          <div className="mb-2">
            <SectionSubHeader>Languages</SectionSubHeader>
            <ul className="">
              <SkillBadge
                icon="devicon-typescript-plain colored"
                text="Typescript/Javascript"
              />
              <SkillBadge icon="devicon-elixir-plain colored" text="Elixir" />
              <SkillBadge icon="devicon-php-plain colored" text="PHP" />
              <SkillBadge icon=" devicon-sass-original colored" text="SASS" />
            </ul>
          </div>
          <div className="mb-2">
            <SectionSubHeader>
              Frameworks, Libraries & Runtimes
            </SectionSubHeader>
            <ul className="">
              <SkillBadge icon="devicon-react-original colored" text="React" />
              <SkillBadge icon="devicon-nodejs-plain colored" text="Node" />
              <SkillBadge
                icon="devicon-express-original colored"
                text="Express"
              />
              <SkillBadge
                icon="devicon-nextjs-original colored"
                text="Next.js"
              />
              <SkillBadge icon="devicon-nestjs-plain colored" text="Nest.js" />
              <SkillBadge icon="devicon-phoenix-plain colored" text="Phoenix" />
            </ul>
          </div>
          <div className="">
            <SectionSubHeader>DevOps, Tooling & Databases</SectionSubHeader>
            <ul className="">
              <SkillBadge icon="devicon-docker-plain colored" text="Docker" />
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
        {/* Experience */}
        <section className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <SectionHeader>Education</SectionHeader>
          <ul className="mt-2">
            <li className="mb-4">
              <ItemHeader
                header="General Assembly"
                subHeader="Web Development Intensive (WDI-16) Boot Camp"
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
        {/*  */}
        <section className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <ul>
            <li className="mb-2">
              <h5>Jan 2022 - Sep 2022</h5>
              <h3 className="font-medium">Hodlnaut</h3>
              <h4>Software Engineer</h4>
              <ul>
                <li>
                  - Developed new features in Node.js & React for flagship
                  Crypto Lending product
                </li>
                <li>
                  - Developed new features in back office CMS for Compliance
                  (KYC) and Customer Support
                </li>
                <li>
                  - Developed Dynamic Configuration Service which sped up
                  feature deployments by up to 95%
                </li>
                <li>
                  - Created Prisma library service for other microservices to
                  utilize PostgresSQL
                </li>
                <li>
                  - Experimented with different workflow processes to improve
                  productivity (Agile, Scrum, Shape Up)
                </li>
                <li>- Handled Devops via Terraform, Docker and AWS</li>
                <li>
                  - Worked on prototype Exchange product with Nest JS and
                  Next.js
                </li>
                <li>
                  - Diagnosed and triaged production or transaction (Fireblocks)
                  issues as Duty Engineer
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <h5>Mar 2021 - Jan 2022</h5>
              <h3 className="font-medium">Wego</h3>
              <h4>Software Engineer / Scrum Master</h4>
              <ul>
                <li>
                  - Developed new features for Shopback Cashback app in Elixir
                  and Next.js
                </li>
                <li>
                  - Facilitated Sprint plannings and retrospective as Scrum
                  Master
                </li>
                <li>
                  - Assisted Product owner in managing Jira and Confluence
                </li>
                <li>
                  - Worked on modifying legacy systems in Ruby for integration
                  in Elixir
                </li>
                <li>
                  - Participated in cross product meetings to identify blockers
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <h5>Mar 2019 - Dec 2020</h5>
              <h3 className="font-medium">StaffOnDemand / Recruiter Pal</h3>
              <h4>Web Developer</h4>
              <ul>
                <li>
                  - Develop new features for Recruiter Pal ATS in Laravel (PHP)
                  and Angular JS
                </li>
                <li>
                  - Prototype Mobile App in React Native for investor pitch
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <h5>Nov 2018 - Mar 2019</h5>
              <h3 className="font-medium">General Assembly</h3>
              <h4>Instructional Associate</h4>
              <ul>
                <li>
                  - Assisted lead instructor with class administration and
                  lessons
                </li>
                <li>- Helped students with their queries and assignments</li>
              </ul>
            </li>
            <li className="mb-2">
              <h5>Nov 2016 - Dec 2017</h5>
              <h3 className="font-medium">ST Electronics</h3>
              <h4>Associate Engineer (Transmission Systems)</h4>
              <ul>
                <li>- Responded to network incidents as L2 Support</li>
                <li>- Key Man for Network Management System issues </li>
                <li>- Assist vendors with equipment deployments on site</li>
              </ul>
            </li>
            <li className="mb-2">
              <h5>2011 - 2016</h5>
              <h3 className="font-medium">Singapore Armed Forces</h3>
              <h4>Military Intelligence Engineer</h4>
              <ul>
                <li>- Responded to network incidents as L1 Support</li>
                <li>
                  - Escorted external contractors in secure locations for
                  equipment deployments
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Home;
