import sandraMasternakProfile from "./profile.jpg";
import {
  Avatar,
  StyledButtonLink,
  ButtonIcon,
  Name,
  Summary,
  ThisIs,
  Wrapper,
  Icon,
} from "./styled";
import faceIcon from "./faceIcon.png";
import laptopIcon from "./laptopIcon.png";
import { email } from "../email";

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={sandraMasternakProfile} alt="Sandra Masternak" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Sandra Masternak</Name>
      <Summary>
        <Icon src={faceIcon} alt="" />
        <Icon src={laptopIcon} alt="" />
        I’m a dedicated Frontend Developer who loves working with React, and I’m
        now looking for my next professional challenge.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);
