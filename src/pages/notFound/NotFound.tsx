import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: ${(props) => props.theme.space.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize["3xl"]};
  margin-bottom: ${(props) => props.theme.space.md};
  color: ${(props) => props.theme.colors.danger};
`;

const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: ${(props) => props.theme.space.lg};
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.base};
  text-decoration: underline;

  &:hover {
    color: ${(props) => props.theme.colors.info};
  }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <Description>페이지를 찾을 수 없습니다.</Description>
      <StyledLink to="/">홈으로 돌아가기</StyledLink>
    </Container>
  );
};

export default NotFoundPage;
