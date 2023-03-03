import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  postDataAtom,
  commentDataAtom,
  currentUserAtom,
  pageAtom,
} from '../../atom';
import { responsive, mainBlack, menuGray } from '../../styles/theme';
import styled from 'styled-components';

const Write = () => {
  const navigate = useNavigate();
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');
  const [postData, setPostData] = useRecoilState(postDataAtom);
  const [commentData, setCommentData] = useRecoilState(commentDataAtom);
  const currentUser = useRecoilValue(currentUserAtom);
  const setPage = useSetRecoilState(pageAtom);

  const handleTitle = e => setTitleValue(e.target.value);
  const handleBody = e => setBodyValue(e.target.value);

  const handleWrite = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = ('0' + (1 + date.getMonth())).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);

    const newPostData = [
      {
        postId: postData[0].postId + 1,
        writerId: currentUser.userInfo.id,
        writerName: currentUser.userInfo.name,
        date: `${year}/${month}/${day}`,
        title: titleValue,
        body: bodyValue,
      },
      ...postData,
    ];

    const newCommentData = [
      {
        postId: commentData[0].postId + 1,
        comments: [],
      },
      ...commentData,
    ];

    setPostData(newPostData);
    setCommentData(newCommentData);
    localStorage.setItem('postData', JSON.stringify(newPostData));
    localStorage.setItem('commentData', JSON.stringify(newCommentData));
    setPage(1);
    navigate('/board');
  };

  return (
    <WriteContainer>
      <h2 className='title'>게시글 작성</h2>
      <div className='write-container'>
        <input
          type='text'
          className='post-title'
          placeholder='제목을 입력해주세요'
          onChange={handleTitle}
          maxLength={14}
        />
        <textarea
          type='text'
          className='post-body'
          placeholder='내용...'
          onChange={handleBody}
        />

        <div className='button-wrapper'>
          <Link to='/board'>
            <button className='cancel'>취소</button>
          </Link>
          <button
            className='write'
            disabled={!titleValue || !bodyValue || !currentUser}
            onClick={handleWrite}
          >
            작성
          </button>
        </div>
      </div>
    </WriteContainer>
  );
};

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70.35px;
  margin: 3.5vw;

  .title {
    margin-bottom: 35px;
    font-size: 28px;
    font-weight: 700;
  }

  .write-container {
    position: relative;
    width: 810px;

    .post-title {
      width: 100%;
      padding: 10px;
      border: none;
      background-color: ${menuGray};
      font-family: 'Pretendard', sans-serif;
      font-size: 32px;
      font-weight: 700;

      &:focus {
        outline: none;
      }
    }

    .post-body {
      width: 100%;
      height: 40vh;
      padding: 10px;
      border: none;
      margin-top: 20px;
      background-color: ${menuGray};
      font-family: 'Pretendard', sans-serif;
      font-size: 17px;
      overflow-y: scroll;
      resize: none;

      &:focus {
        outline: none;
      }
    }

    .button-wrapper {
      position: absolute;
      bottom: -10vh;
      right: 0;

      .cancel,
      .write {
        width: 90px;
        height: 35px;
        margin-left: 10px;
        border: none;
        background-color: ${mainBlack};
        color: white;
        font-family: 'Pretendard', sans-serif;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }

  @media ${responsive.tablet} {
    .write-container {
      width: 90vw;
    }
  }
`;

export default Write;
