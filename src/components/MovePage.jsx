import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { openSideAtom } from '../atom';

const MovePage = () => {
  const { pathname } = useLocation();
  const setOpenSide = useSetRecoilState(openSideAtom);

  useEffect(() => {
    setOpenSide(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default MovePage;
