import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="flex justify-center">
      <div className="font-sans p-4 flex flex-col gap-4">
        <section className="border flex-1 p-4 border-1 border-black">
          <h1 className="font-bold">Phua Liang Jun</h1>
          <p>Full-Stack Software Engineer</p>
        </section>
        <section className="border flex-1 p-4 border-1 border-black">
          <p>I press keyboard for muny.</p>
        </section>
        <section className="border flex-1 p-4 border-1 border-black">
          <h2 className="font-bold">Skills</h2>
          <ul>
            <li></li>
          </ul>
        </section>
        <section className="border flex-1 p-4 border-1 border-black">
          <ul>
            <h5 className="text-sm text-gray-500">2018</h5>
            <li className="mb-2">
              <h3 className="font-bold">General Assembly</h3>
              <h4 className="text-sm text-gray-700">
                Web Development Intensive (WDI-16) Boot Camp
              </h4>
            </li>
            <li className="mb-2">
              <h3 className="font-bold">42 Silicon Valley</h3>
              <h4 className="text-sm text-gray-700">Piscine (Boot Camp)</h4>
            </li>
            <h5 className="text-sm text-gray-500">2008</h5>
            <li className="mb-2">
              <h3 className="font-bold">Ngee Ann Polytechnic</h3>
              <h4 className="text-sm text-gray-700">
                Diploma in Information Technology
              </h4>
            </li>
          </ul>
        </section>
        <section className="border flex-1 p-4 border-1 border-black">
          <ul>
            <li className="mb-2">
              <h5>Jan 2022 - Sep 2022</h5>
              <h3 className="font-bold">Hodlnaut</h3>
              <h4>Software Engineer</h4>
              <p className="text-sm">
                <ul>
                  <li>- Developed new features in Node.js & React for flagship Crypto Lending product</li>
                  <li>- Developed new features in back office CMS for Compliance (KYC) and Customer Support</li>
                  <li>- Developed Dynamic Configuration Service which sped up feature deployments by up to 95%</li>
                  <li>- Created Prisma library service for other microservices to utilize PostgresSQL</li>
                  <li>- Experimented with different workflow processes to improve productivity (Agile, Scrum, Shape Up)</li>
                  <li>- Handled Devops via Terraform, Docker and AWS</li>
                  <li>- Worked on prototype Exchange product with Nest JS and Next.js</li>
                  <li>- Diagnosed and triaged production or transaction (Fireblocks) issues as Duty Engineer</li>
                </ul>
              </p>
            </li>
            <li className="mb-2">
              <h5></h5>
              <h3 className="font-bold">Wego</h3>
              <h4>Software Engineer / Scrum Master</h4>
              <p className="text-sm">
                  <ul>
                    <li>- Developed new features for Shopback Cashback app in Elixir and Next.js</li>
                    <li>- Facilitated Sprint plannings and retrospective as Scrum Master</li>
                    <li>- Assisted Product owner in managing Jira and Confluence</li>
                    <li>- Worked on modifying legacy systems in Ruby for integration in Elixir</li>
                    <li>- Participated in cross product meetings to identify blockers</li>
                  </ul>
              </p>
            </li>
            <li className="mb-2">
              <h5></h5>
              <h3 className="font-bold">StaffOnDemand / Recruiter Pal</h3>
              <h4>Web Developer</h4>
              <p className="text-sm">
                <ul>
                  <li>- Develop new features for Recruiter Pal ATS in Laravel (PHP) and Angular JS</li>
                  <li>- Prototype Mobile App in React Native for investor pitch</li>
                </ul>
              </p>
            </li>
            <li className="mb-2">
              <h5></h5>
              <h3 className="font-bold">General Assembly</h3>
              <h4>Instructional Associate</h4>
              <p className="text-sm">
                  <ul>
                    <li>- Assisted lead instructor with class administration and lessons</li>
                    <li>- Helped students with their queries and assignments</li>
                  </ul>
              </p>
            </li>
            <li className="mb-2">
              <h5></h5>
              <h3 className="font-bold">ST Electronics</h3>
              <h4>Associate Engineer (Transmission Systems)</h4>
              <p className="text-sm">
                  <ul>
                    <li>- Responded to network incidents as L2 Support</li>
                    <li>- Key Man for Network Management System issues </li>
                    <li>- Assist vendors with equipment deployments on site</li>
                  </ul>
              </p>
            </li>
            <li className="mb-2">
              <h5></h5>
              <h3 className="font-bold">Singapore Armed Forces</h3>
              <h4>Military Intelligence Engineer</h4>
              <p className="text-sm">
                  <ul>
                    <li>- Responded to network incidents as L1 Support</li>
                    <li>- Escorted external contractors in secure locations for equipment deployments</li>
                  </ul>
              </p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Home;
