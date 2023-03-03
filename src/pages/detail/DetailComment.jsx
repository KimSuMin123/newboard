import { useParams } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

const DetailComment = ({ data, currentUser, commentData, setCommentData }) => {
  const params = useParams();
  const handleRemove = e => {
    const currentIndex = commentData.indexOf(
      commentData.filter(el => Number(params.id) === el.postId)[0]
    );
    const copiedData = JSON.parse(JSON.stringify(commentData));
    const copiedComments = copiedData[currentIndex].comments;
    const commentIndex = commentData[currentIndex].comments.indexOf(data);
    copiedComments.splice(commentIndex, 1);
    setCommentData(copiedData);
    localStorage.setItem('commentData', JSON.stringify(copiedData));
  };
  return (
    <DetailCommentContainer>
      <div className='comment-wrapper'>
        <p className='name'>{data.writerName}</p>
        <p className='comment-body'>{data.commentBody}</p>
      </div>
      {currentUser && currentUser.userInfo.id === data.writerId && (
        <FaTrash className='remove' size={16} onClick={handleRemove} />
      )}
    </DetailCommentContainer>
  );
};

const DetailCommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .comment-wrapper {
    display: flex;
    height: 25px;

    .name {
      margin-right: 10px;
      font-weight: 700;
      white-space: nowrap;
    }

    .comment-body {
      white-space: nowrap;
    }
  }

  .remove {
    cursor: pointer;
  }
`;

export default DetailComment;
