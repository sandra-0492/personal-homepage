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
        I’m always open to new projects whenever my schedule allows it. If
        you’re planning a website, dashboard, or mobile app and need help
        bringing it to life, don’t hesitate to reach out. 🤞
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);
