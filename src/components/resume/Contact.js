import * as React from "react";
import tw from "twin.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { SectionHeader } from "./SectionHeader";

const ContactSection = tw.section`p-4 text-left sm:text-right row-span-1 sm:col-start-2 sm:col-end-4`;
const ContactList = tw.ul``;
const ContactItem = tw.li`text-light-blue-600 flex flex-row-reverse justify-end sm:block`;
const ContactLink = tw.a`ml-2 sm:mr-2 leading-relaxed`;

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
      <ContactItem>
        <ContactLink href={phone.href} target="_blank">
          {phone.text}
        </ContactLink>
        <FontAwesomeIcon icon={faPhoneSquare} fixedWidth></FontAwesomeIcon>
      </ContactItem>
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
