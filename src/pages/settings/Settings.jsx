import { useRecoilState } from 'recoil';
import { currentUserAtom } from '../../atom';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { mainBlack, mainGray } from '../../styles/theme';
import styled from 'styled-components';

const Settings = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  return (
    <SettingsContainer>
      <h2 className='title'>설정</h2>
      {currentUser ? (
        <>
          <IoPersonCircleSharp size={48} className='icon' />
          <p className='name'>{currentUser.userInfo.name}</p>
          <p className='email'>{currentUser.userInfo.email}</p>
          <button className='edit-info'>유저 정보 수정 (아직 미구현)</button>
          <button className='dark-mode'>다크모드 전환 (아직 미구현)</button>
        </>
      ) : (
        <div className='alert'>로그인 후 서비스를 사용할 수 있습니다.</div>
      )}
    </SettingsContainer>
  );
};

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70.35px;
  margin: 3.5vw;

  .title {
    font-size: 28px;
    font-weight: 700;
  }

  .icon {
    margin: 10px 0;
  }

  .name {
    font-size: 20px;
    font-weight: 700;
  }

  .email {
    margin: 10px 0;
  }

  .edit-info,
  .dark-mode {
    width: 180px;
    height: 35px;
    font-family: 'Pretendard', sans-serif;
    border: none;
    margin: 5px 0;
    background-color: ${mainBlack};
    color: white;
    cursor: pointer;
  }

  .alert {
    margin-top: 30vh;
    color: ${mainGray};
    font-size: 28px;
    font-weight: 700;
  }
`;

export default Settings;
