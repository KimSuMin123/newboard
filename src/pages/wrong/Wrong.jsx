import { mainGray } from '../../styles/theme';
import styled from 'styled-components';

const Wrong = () => {
  return (
    <WrongContainer>
      <div className='wrong-container'>404 잘못된 접근입니다.</div>
    </WrongContainer>
  );
};

const WrongContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70.35px;
  margin: 3.5vw;
  color: ${mainGray};
  font-size: 28px;
  font-weight: 700;
`;

export default Wrong;
