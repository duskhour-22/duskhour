import styled, { keyframes } from 'styled-components';

const turnpage = keyframes`
  0% {transform: skewY(0deg) scaleX(1) rotateY(0deg); background:#fff;}
  50% {transform: skewY(0deg) scaleX(1) rotateY(90deg); background:#ddd;}
  100% {transform: skewY(0deg) scaleX(1) rotateY(180deg); background:#fff;}
`;

const turnleftshadow = keyframes`
  0% { transform: skewY(0deg) scaleX(1) rotateY(0deg); opacity:1; }
  8% { transform: skewY(0deg) scaleX(1) rotateY(0deg); opacity:1; }
  53% { transform: skewY(0deg) scaleX(1) rotateY(90deg); opacity:0; }
  100% { transform: skewY(0deg) scaleX(1) rotateY(90deg);}`;

const turnrightshadow = keyframes`
  0% { transform: skewY(0deg) scaleX(1) rotateY(90deg); opacity:0; }
  47% { transform: skewY(0deg) scaleX(1) rotateY(90deg); opacity: 0; }
  92% { transform: skewY(0deg) scaleX(1) rotateY(180deg); opacity: 1; }
  100% { transform: skewY(0deg) scaleX(1) rotateY(180deg); opacity: 1; }
`;

const LoadingBox = styled.div`
  display: inline-block;
`;

const Container = styled.div`
  position: relative;
  display: block;
  width: 120px;
  height: 100px;
  margin: 20px;

  & * {
    box-sizing: border-box;
    position: absolute;
    display: block;
    background: white;
    border: 1px solid ${({ theme }) => theme.colors.black150};
    height: 100%;
  }
`;

const Book = styled.div`
  width: 100%;
  border-radius: 4px;
`;

const ShadowLeft = styled.div`
  border: 0;
  left: 50%;
  width: 50%;
  background: ${({ theme }) => theme.colors.black150};
  border-radius: 0 4px 4px 0;
  animation: 1s linear infinite ${turnleftshadow};
  transform-origin: 0% 100%;
  filter: blur(1px);
`;

const ShadowRight = styled.div`
  border: 0;
  left: 50%;
  width: 50%;
  background: ${({ theme }) => theme.colors.black150};
  border-radius: 0 4px 4px 0;
  animation: 1s linear infinite ${turnrightshadow};
  transform-origin: 0% 100%;
  filter: blur(1px);
`;

const Page = styled.div`
  left: 50%;
  width: 50%;
  border-radius: 0 4px 4px 0;
  box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.black150};
  animation: 1s linear infinite ${turnpage};
  transform-origin: 0% 100%;
  transform: skewY(0deg) scaleX(1) rotateY(0deg);
`;

const Fold = styled.div`
  left: 50%;
  width: 1px;
  background: ${({ theme }) => theme.colors.black150};
  border: 0;
  z-index: 100;
`;

const Description = styled.p`
  text-align: center;
`;

const LoadingUnit = () => {
  return (
    <LoadingBox>
      <Container>
        <Book />
        <ShadowLeft />
        <ShadowRight />
        <Page />
        <Fold />
      </Container>
      <Description>Loading...</Description>
    </LoadingBox>
  );
};

export default LoadingUnit;
