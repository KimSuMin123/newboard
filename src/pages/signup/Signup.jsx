import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userDataAtom } from '../../atom';
import { TextField, Checkbox } from '@mui/material';
import { mainGray, mainBlack, responsive } from '../../styles/theme';
import styled from 'styled-components';

const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);
  const [checkboxOn, setCheckboxOn] = useState(false);
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const passwordRegEx = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
  const btnDisabled = !nameValue || !isEmailValid || !isPwValid || !checkboxOn;

  const handleName = e => setNameValue(e.target.value);

  let timer;
  const handleEmail = e => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setEmailValue(e.target.value);
      const checkDuplicate = userData.every(
        el => el.userInfo.email != e.target.value
      );
      setIsEmailValid(emailRegEx.test(e.target.value) && checkDuplicate);
    }, 500);
  };

  const handlePw = e => {
    setPwValue(e.target.value);
    setIsPwValid(passwordRegEx.test(e.target.value));
  };

  const handleCheckbox = () => setCheckboxOn(!checkboxOn);

  const handleSubmit = e => {
    e.preventDefault();
    const newUserData = {
      userInfo: {
        id: userData[userData.length - 1].userInfo.id + 1,
        name: nameValue,
        email: emailValue,
        password: pwValue,
      },
      chartData: {
        data1: [33, 53, 85, 41, 44, 0],
        data2: [12, 44, 32, 10, 2],
        data3: [5, 11, 12, 8, 4, 0],
      },
    };
    setUserData([...userData, newUserData]);
    alert('??????????????? ?????????????????????.');
    navigate('/');
    localStorage.setItem(
      'userData',
      JSON.stringify([...userData, newUserData])
    );
  };
  return (
    <SignUpContainer>
      <form className='sign-up-form flex-center' onSubmit={handleSubmit}>
        <h2 className='title'>?????? ????????????</h2>
        <p className='sign flex-center'>
          ???????????? @??? ??????, ??????????????? ??????, ?????? ?????? 8~16?????? ??????????????????.
        </p>
        <TextField
          className='input'
          sx={{ m: 1.5 }}
          type='text'
          label='??????'
          color='success'
          size='small'
          autoComplete='off'
          inputProps={{
            maxLength: 8,
          }}
          onChange={handleName}
        />
        <p className='alert'>
          {nameValue ? '?????? ????????? ???????????????.' : '????????? ??????????????????.'}
        </p>
        <TextField
          className='input'
          sx={{ m: 1.5 }}
          type='text'
          label='?????????'
          color='success'
          size='small'
          autoComplete='off'
          inputProps={{
            maxLength: 24,
          }}
          onChange={handleEmail}
        />
        <p className='alert'>
          {isEmailValid
            ? '?????? ????????? ??????????????????.'
            : '??????????????? ????????? ????????? ?????? ????????????.'}
        </p>
        <TextField
          sx={{ m: 1.5 }}
          type='password'
          label='????????????'
          color='success'
          size='small'
          autoComplete='off'
          className='input'
          inputProps={{
            maxLength: 16,
          }}
          onChange={handlePw}
        />
        <p className='alert'>
          {isPwValid
            ? '?????? ????????? ?????????????????????.'
            : '???????????? ????????? ?????? ????????????.'}
        </p>
        <div className='provision'>
          <Checkbox color='success' onClick={handleCheckbox} />
          <a href='https://policy.naver.com/policy/privacy.html' target='_blank'>
            ???????????? ?????? ??????
          </a>{' '}
          ??? ???????????????.
        </div>

        <button className='sign-up-btn' disabled={btnDisabled}>
          ????????????
        </button>
      </form>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 70.35px;
  margin-top: 3.5vw;

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign-up-form {
    flex-direction: column;
    width: 480px;

    .title {
      font-size: 28px;
      font-weight: 700;
    }

    .sign {
      margin: 20px 0;
      text-align: center;
    }

    .input {
      width: 100%;
      z-index: 0;
    }

    .alert {
      height: 16px;
      width: 100%;
      color: ${mainBlack};
      font-weight: 700;
    }

    .provision {
      margin-top: 30px;
      a {
        border-bottom: 1px solid ${mainGray};
        color: ${mainGray};
        cursor: pointer;
      }
    }

    .sign-up-btn {
      height: 40px;
      width: 100%;
      margin-top: 25px;
      border: none;
      border-radius: 3px;
      background-color: ${mainBlack};
      color: white;
      font-family: 'Pretendard', sans-serif;
      cursor: pointer;
    }
  }

  @media ${responsive.mobile} {
    .sign-up-form {
      width: 80vw;
    }
  }
`;

export default SignUp;
