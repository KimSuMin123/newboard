import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { postDataAtom, pageAtom, currentUserAtom } from '../../atom';
import PostBar from './PostBar';
import { responsive, mainGray, mainBlack } from '../../styles/theme';
import { Stack, Pagination } from '@mui/material';
import styled from 'styled-components';

const Board = () => {
  const postData = useRecoilValue(postDataAtom);
  const currentUser = useRecoilValue(currentUserAtom);
  const lastPage =
    postData.length % 5 === 0
      ? parseInt(postData.length / 5)
      : parseInt(postData.length / 5) + 1;

  const firstPageData = postData.slice(0, 5);
  const [page, setPage] = useRecoilState(pageAtom);
  const [data, setData] = useState(firstPageData);

  useEffect(() => {
    if (page === lastPage) {
      setData(postData.slice(5 * (page - 1)));
    } else {
      setData(postData.slice(5 * (page - 1), 5 * (page - 1) + 5));
    }
  }, [page]);

  const handlePage = (e, n) => {
    setPage(n);
  };

  return (
    <BoardContainer>
      <h2 className='title'>게시판</h2>
      <Stack alignItems='center'>
        <div className='board-head'>
          <div className='wrapper flex-center'>
            <p className='post-id flex-center'>번호</p>
            <h3 className='post-title'>제목</h3>
          </div>
          <div className='wrapper flex-center'>
            <p className='post-writer flex-center'>작성자</p>
            <p className='post-date flex-center'>작성일</p>
          </div>
        </div>
        <Stack direction='column'>
          {data.map(el => {
            return (
              <Stack className='stack' key={el.postId}>
                <Link to={`/detail/${el.postId}`}>
                  <PostBar data={el} />
                </Link>
              </Stack>
            );
          })}
        </Stack>
        <div className='pagination-wrapper flex-center'>
          <Pagination
            className='pagination'
            count={lastPage}
            defaultPage={page}
            color='success'
            onChange={handlePage}
          />
          {currentUser && (
            <Link to='/write' className='write-post flex-center'>
              글 작성
            </Link>
          )}
        </div>
      </Stack>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70.35px;
  margin: 3.5vw;

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    margin-bottom: 55px;
    font-size: 28px;
    font-weight: 700;
  }

  .board-head {
    display: flex;
    justify-content: space-between;
    width: 810px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${mainGray};
    color: ${mainGray};
    font-size: 13px;
    font-weight: 700;

    .post-id {
      width: 35px;
      white-space: nowrap;
    }

    .post-date {
      width: 91.55px;
    }
  }

  .pagination-wrapper {
    position: absolute;
    width: 810px;
    bottom: 70px;

    .write-post {
      position: absolute;
      right: 0px;
      width: 90px;
      height: 35px;
      background-color: ${mainBlack};
      color: white;
      font-family: 'Pretendard', sans-serif;
      font-size: 14px;
      cursor: pointer;
    }
  }

  @media ${responsive.tablet} {
    .board-head {
      width: 90vw;
    }
    .pagination-wrapper {
      width: 90vw;
    }
    .pagination-wrapper {
      .write-post {
        margin-bottom: 90px;
      }
    }
  } ;
`;

export default Board;
