import { Container, Title, SubTitle, Wrapper } from './Menu.style';

export default function Menu({ children, ...props }) {
  return (
    <Container>
      <Wrapper {...props}>{children}</Wrapper>
    </Container>
  );
}

Menu.Title = function ({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Menu.SubTitle = function ({ children, ...props }) {
  return <SubTitle {...props}>{children}</SubTitle>;
};
