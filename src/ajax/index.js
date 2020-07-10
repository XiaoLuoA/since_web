import {
  get,
  post,
  ajax,
} from './ajax_axios';

export const getIndex = (userName, password) => {
    return get('http://localhost:8081//page/index/index.html', { userName, password } );
}

export const doLogin = (userName, password) => {
  return post('./login', { userName, password } );
}

export const getUser = (open_id) => {
  return get('./user/findUserByOpenId', { open_id } );
}

export const addUser = (wx_name, wx_image, wx_address, open_id) => {
  return post('./user/add',{wx_name, wx_image, wx_address, open_id})
}

export const addMemos = (wx_name, wx_image, wx_address, open_id, message) => {
  return post('./memos/add',{wx_name, wx_image, wx_address, open_id, message})
}

export const getMemos = () => {
  return get('./memos/findAll',{})
}

export const getBooks= () => {
  return get('./book/findAll',{})
}

export const getBook = (id) => {
  return get('./book/findBookById',{id})
}









