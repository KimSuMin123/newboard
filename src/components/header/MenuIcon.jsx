import { useRecoilState } from 'recoil';
import { openSideAtom } from '../../atom';
import styled from 'styled-components';

const MenuIcon = () => {
  const [openSide, setOpenSide] = useRecoilState(openSideAtom);
  const handleMenu = () => {
    setOpenSide(!openSide);
  };

  return (
    <MenuIconContainer onClick={handleMenu} className={openSide && 'change'}>
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </MenuIconContainer>
  );
};

const MenuIconContainer = styled.div`
  position: absolute;
  top: calc(33.845 px - 15.5px);
  left: 15px;
  cursor: pointer;
  z-index: 25;

  div {
    border-radius: 5px;
  }

  .bar1,
  .bar2,
  .bar3 {
    margin: 6px 0;
    width: 35px;
    height: 5px;
    background-color: white;
    transition: 0.3s;
  }
  &.change {
    .bar1 {
      background-color: black;
      -webkit-transform: rotate(45deg) translate(8px, 8px);
      transform: rotate(45deg) translate(8px, 8px);
    }
    .bar2 {
      opacity: 0;
    }
    .bar3 {
      background-color: black;
      -webkit-transform: rotate(-45deg) translate(8px, -8px);
      transform: rotate(-45deg) translate(8px, -8px);
    }
  }
`;

export default MenuIcon;
