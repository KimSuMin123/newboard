import { atom } from 'recoil';
import userData from './assets/data/userData';
import postData from './assets/data/postData';
import commentData from './assets/data/CommentData';

const isDialogOnAtom = atom({
  key: 'isDialogOn',
  default: false,
});

const openSideAtom = atom({
  key: 'openSide',
  default: false,
});

const userDataAtom = atom({
  key: 'userData',
  default: userData,
});

const currentUserAtom = atom({
  key: 'currentUser',
  default: null,
});

const postDataAtom = atom({
  key: 'postData',
  default: localStorage.getItem('postData')
    ? JSON.parse(localStorage.getItem('postData'))
    : postData,
});

const commentDataAtom = atom({
  key: 'commentData',
  default: localStorage.getItem('commentData')
    ? JSON.parse(localStorage.getItem('commentData'))
    : commentData,
});

const pageAtom = atom({
  key: 'page',
  default: 1,
});

const darkModeAtom = atom({
  key: 'darkMode',
  default: false,
});

export {
  isDialogOnAtom,
  openSideAtom,
  userDataAtom,
  currentUserAtom,
  postDataAtom,
  commentDataAtom,
  pageAtom,
  darkModeAtom,
};
