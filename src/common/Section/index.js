import { Unit, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Unit>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>{body}</Body>
  </Unit>
);

export default Section;
