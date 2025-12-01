import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import {
  Address,
  EmailLink,
  EmailWrapper,
  LetsTalk,
  Paragraph,
  Wrapper,
} from "./styled";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's Talk</LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        I'm always open to new project whenever I have the time. If you have
        a&nbsp;website, dashboard or mobile app in mind and need some help
        to&nbsp;make your ideas come to life, feel free to contact me 🤞
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);
