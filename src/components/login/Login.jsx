import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  isDialogOnAtom,
  userDataAtom,
  currentUserAtom,
  openSideAtom,
} from '../../atom';
import { Dialog, TextField } from '@mui/material';
import { mainGray, mainBlack, responsive } from '../../styles/theme';
import styled from 'styled-components';

const Login = () => {
  const [isDialogOn, setIsDialogOn] = useRecoilState(isDialogOnAtom);
  const setCurrentUser = useSetRecoilState(currentUserAtom);
  const setOpenSide = useSetRecoilState(openSideAtom);
  const userData = useRecoilValue(userDataAtom);
  const [emailValue, setEmailValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();
  const handleDialog = () => setIsDialogOn(false);

  const handleEmail = e => setEmailValue(e.target.value);
  const handlePw = e => setPwValue(e.target.value);

  useEffect(() => setAlertMessage(''), [isDialogOn]);

  const handleNavigate = () => {
    navigate('/signup');
    setIsDialogOn(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const relevantUser = userData.filter(
      el => el.userInfo.email === emailValue
    );
    if (!relevantUser.length) {
      setAlertMessage('존재하지 않는 아이디입니다.');
    } else {
      if (relevantUser[0].userInfo.password !== pwValue) {
        setAlertMessage('패스워드가 일치하지 않습니다.');
      } else {
        setCurrentUser(relevantUser[0]);
        localStorage.setItem('id', relevantUser[0].userInfo.id);
        setIsDialogOn(false);
        setOpenSide(false);
        navigate('/');
      }
    }
  };

  return (
    <LoginContainer open={isDialogOn} onClose={handleDialog}>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2 className='title'>로그인</h2>
        <TextField
          className='input'
          sx={{ m: 2 }}
          type='text'
          label='이메일'
          color='success'
          size='small'
          autoComplete='off'
          inputProps={{
            maxLength: 24,
          }}
          onChange={handleEmail}
        />
        <TextField
          className='input'
          type='password'
          label='패스워드'
          color='success'
          size='small'
          autoComplete='off'
          inputProps={{
            maxLength: 16,
          }}
          onChange={handlePw}
        />
        <p className='alert'>{alertMessage}</p>
        <button className='login-btn'>로그인</button>
        <p className='sign-up'>
          아이디가 없다면? <a onClick={handleNavigate}>회원가입</a>
        </p>

        <div className='sign'>
          <p className='sign-up-sign'>
            회원가입도 가능하지만, 새로운 아이디는 로컬스토리지로 관리하기
            때문에 기기를 바꾸면 사라집니다. 때문에 항상 사용 가능한 아이디를
            준비했습니다.
          </p>
          <p className='id'>ID : test1@test.com (test1부터 4까지)</p>
          <p className='pw'>PW : 1q2w3e4r</p>
        </div>
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled(Dialog)`
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 480px;
    height: 420px;
    padding: 20px;

    .title {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 700;
    }

    .input {
      width: 100%;
    }

    .alert {
      height: 8.563px;
      margin-top: 10px;
      font-size: 14px;
      font-weight: 700;
    }

    .login-btn {
      height: 40px;
      width: 100%;
      margin-top: 15px;
      border: none;
      border-radius: 3px;
      background-color: ${mainBlack};
      color: white;
      font-family: 'Pretendard', sans-serif;
      cursor: pointer;
    }

    .sign-up {
      margin-top: 20px;
      font-size: 15px;
      font-weight: 700;

      a {
        border-bottom: 1px solid ${mainGray};
        color: ${mainGray};
        font-size: 16px;
        cursor: pointer;
      }
    }

    .sign {
      margin-top: 15px;
      color: ${mainGray};
      text-align: center;
      font-size: 12.75px;
      font-weight: 700;

      .id {
        margin-top: 5px;
      }
    }
  }

  @media ${responsive.mobile} {
    .login-form {
      width: 80vw;
    }
  }
`;

export default Login;
