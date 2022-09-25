import { space, theme, fontSize, colors, layout } from '../assets/styles/theme';
// import TextButton from '../components/common/TextButton';
import styled from 'styled-components';
import signinImg from '../assets/img/signinImg.png';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <Container>
      <ImageBox>
        <HeaderBox>
          <p>Welcom to&nbsp;</p>
          <p>the DUSKHOUR</p>
        </HeaderBox>
      </ImageBox>
      <FormBox>
        <p>Sign up</p>
        <SignupForm />
      </FormBox>
    </Container>
  );
};

export default Signup;

export const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
  height: 37rem;
  margin: auto;
  box-shadow: ${theme.boxShadow.shadowS};
  border-radius: ${theme.borderRadius.borderRadiusM};
  display: flex;

  @media ${theme.screen.mobile} {
    ${theme.layout.flexColumnCenter};
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

export const HeaderBox = styled.div`
  margin: ${space.spaceL};
  & > p {
    font-size: ${fontSize.fontSizeL};
  }
  @media ${theme.screen.mobile} {
    margin: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    margin: auto;
    background-color: ${colors.dimGrey};
    ${layout.flexCenter}
    & > p {
      display: inline;
      font-size: ${fontSize.fontSizeL};
    }
  }
`;
export const ImageBox = styled.div`
  width: 25rem;
  background-image: url(${signinImg});
  background-repeat: no-repeat;
  background-position: center;
  @media ${theme.screen.mobile} {
    width: 100%;
    height: 10%;
  }
`;
export const FormBox = styled.div`
  height: 100%;
  width: 50%;
  min-width: 400px;
  padding: ${space.spaceL};
  display: flex;
  flex-direction: column;
  & > p {
    text-align: center;
    font-size: ${fontSize.fontSizeL};
    margin-bottom: 20px;
  }
  & > form {
    width: 90%;
    margin: auto;
  }
  & > form > button + p {
    font-size: ${fontSize.fontSizeS};
    margin-top: ${space.spaceS};
  }

  @media ${theme.screen.mobile} {
    width: 100%;
    height: 100%;
    & > p {
      text-align: center;
      font-size: ${fontSize.fontSizeL};
      margin-bottom: ${space.spaceL};
    }
    & > form {
      margin: auto;
      height: 100%;
    }
    & > form > button {
      margin-top: ${space.spaceL};
    }
  }
`;
