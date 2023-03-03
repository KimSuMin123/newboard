import { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { currentUserAtom } from '../../atom';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { responsive, mainGray } from '../../styles/theme';
import styled from 'styled-components';
import pet from '../../assets/img/pet.png';


const Home = () => {
  const currentUser = useRecoilValue(currentUserAtom);
  return (
    <HomeContainer>
      <div className='profile-box flex-center'>
        <p className='username flex-center'>
          {/*<IoPersonCircleSharp size={50} className='icon' />*/}
          {/*{currentUser ? currentUser.userInfo.name : '유저정보 없음'}*/}
        </p>
        {/*<p className='email'>{currentUser && currentUser.userInfo.email}</p>*/}
      </div>
      {currentUser ? (
        <div>
            <img src={pet} alt='펫미팅배경' className='background' />

         {/*<footer>*/}
         {/*  <ul>*/}
         {/*    <li>*/}
         {/*      <a href="/PetMeetingCompany">*/}
         {/*        <p>회사 소개</p>*/}
         {/*      </a>*/}
         {/*    </li>*/}
         {/*    <li>*/}
         {/*      <a href="https://policy.naver.com/policy/privacy.html">개인정보처리방침 (네이버와 동일)</a>*/}
         {/*    </li>*/}
         {/*  </ul>*/}
         {/*  <h3>contact</h3>*/}
         {/*  <p>경기도 안양시 동안구 임곡로 29<br />*/}
         {/*    전화번호 : 010-8028-7565<br/>*/}
         {/*    EMAIL : tntn211@naver.com*/}
         {/*  </p>*/}
         {/*</footer>*/}





        </div>
      ) : (
        <div className='login-sign flex-center'>
          로그인 후 서비스를 사용할 수 있습니다.
        </div>
      )}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  .background{
    width: 1920px;
    height: 886px;
    margin-top: 80px;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-sign {
    height: 50vh;
    color: ${mainGray};
    font-size: 28px;
    font-weight: 700;
  }
  

  @media ${responsive.tablet} {
    .login-sign {
      font-size: 18px;
    }
  } ;
`;

export default Home;
