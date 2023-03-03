import { lightGray, mainBlack, mainGray, responsive } from '../../styles/theme';
import styled from 'styled-components';

const PostBar = ({ data }) => {
  return (
    <PostBarContainer>
      <div className='wrapper flex-center'>
        <p className='post-id flex-center'>{data.postId}</p>
        <h3 className='post-title'>{data.title}</h3>
      </div>
      <div className='wrapper flex-center'>
        <p className='post-writer'>{data.writerName}</p>
        <p className='post-date'>{data.date}</p>
      </div>
    </PostBarContainer>
  );
};

const PostBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 810px;
  border-bottom: 1px solid ${mainGray};
  color: ${mainBlack};

  &:hover {
    background-color: ${lightGray};
  }

  .post-id {
    width: 15px;
    margin: 0 10px;
    font-size: 14px;
  }

  .post-title {
    font-weight: 700;
  }

  .post-writer {
    font-size: 14px;
  }

  .post-date {
    margin: 0 10px;
    color: ${mainGray};
    font-size: 14px;
  }

  @media ${responsive.tablet} {
    width: 90vw;

    .post-writer {
      white-space: nowrap;
    }
  } ;
`;

export default PostBar;
