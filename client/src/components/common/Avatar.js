import styled from 'styled-components';
import { boxShadow } from '../../assets/styles/theme';
const ProfileURL = styled.img`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  border-radius: ${(props) => props.borderRadius || 0};
  object-fit: cover;
  box-shadow: ${(props) => (props.isShadow ? boxShadow.shadowXS : 'none')};
`;

const Avatar = ({ imageURL, isShadow = false, ...props }) => {
  return (
    <ProfileURL
      isShadow={isShadow}
      src={imageURL}
      width={props.width}
      height={props.height}
      borderRadius={props.borderRadius}
    />
  );
};

export default Avatar;
