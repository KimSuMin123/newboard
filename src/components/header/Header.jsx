import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { userDataAtom, currentUserAtom } from '../../atom';
import MenuIcon from './MenuIcon';
import SideBar from './SideBar';
import logo from '../../assets/img/logo.png';
import { responsive, mainBlack } from '../../styles/theme';
import styled from 'styled-components';

const Header = () => {
  const setCurrentUser = useSetRecoilState(currentUserAtom);
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const localUserData = localStorage.getItem('userData');
  const localId = localStorage.getItem('id');

  useEffect(() => {
    if (localUserData) {
      setUserData(JSON.parse(localUserData));
    }
  }, []);

  useEffect(() => {
    if (localId) {
      const relevantUser = userData.filter(
        el => el.userInfo.id === Number(localId)
      );
      setCurrentUser(relevantUser[0]);
    }
  }, [userData]);

  return (
    <HeaderContainer>
      <MenuIcon />
      <Link to='/'>
        <img src={logo} alt='펫미팅 로고' className='logo' />
      </Link>
      <SideBar />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: ${mainBlack};

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 160px;
  }

  @media ${responsive.mobile} {
    .logo {
      width: 100px;
    }
  }
`;

export default Header;
