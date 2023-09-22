import { Unit, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent, sampleTask}) => (
  <Unit>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}{sampleTask}
    </Header>
    <Body>{body}</Body>
  </Unit>
);

export default Section;
