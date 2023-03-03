import { Link } from 'react-router-dom';
import { mainBlack } from '../../styles/theme';
import styled from 'styled-components';

const SideBarMenu = ({ icon, title, link }) => {
  return (
    <Link to={link}>
      <SideBarMenuContainer className='flex-center hover'>
        {icon} <h2>{title}</h2>
      </SideBarMenuContainer>
    </Link>
  );
};

const SideBarMenuContainer = styled.li`
  height: 80px;
  margin: 10px 0;
  color: ${mainBlack};
  cursor: pointer;

  h2 {
    margin-left: 10px;
    font-weight: 700;
    font-size: 22px;
  }
`;

export default SideBarMenu;
