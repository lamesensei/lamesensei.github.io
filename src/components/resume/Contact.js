import * as React from "react";
import tw, { styled } from "twin.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  // faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { SectionHeader } from "./SharedComponents";

const ContactSection = styled.section`
  ${tw`p-4 border-b`}
  grid-area: contact;
`;

const ContactList = tw.ul``;
const ContactItem = tw.li`text-light-blue-600 flex flex-row-reverse items-center justify-end`;
const ContactLink = tw.a`ml-1 leading-relaxed`;

const Contact = ({ sectionHeader, email, phone, github }) => (
  <ContactSection>
    <SectionHeader>{sectionHeader}</SectionHeader>
    <ContactList>
      <ContactItem>
        <ContactLink href={email.href} target="_blank">
          {email.text}
        </ContactLink>
        <FontAwesomeIcon
          className="align-top"
          icon={faEnvelopeSquare}
          fixedWidth
        ></FontAwesomeIcon>
      </ContactItem>
      {/* <ContactItem>
        <ContactLink href={phone.href} target="_blank">
          {phone.text}
        </ContactLink>
        <FontAwesomeIcon icon={faPhoneSquare} fixedWidth></FontAwesomeIcon>
      </ContactItem> */}
      <ContactItem>
        <ContactLink href={github.href} target="_blank">
          {github.text}
        </ContactLink>
        <FontAwesomeIcon icon={faGithubSquare} fixedWidth></FontAwesomeIcon>
      </ContactItem>
    </ContactList>
  </ContactSection>
);
export default Contact;
