// import {
//   receiveCurrentUser,
//   receiveErrors
// } from '../actions/session_actions';

export const login = user => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: user
    })
  );
}

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);


// $.ajax({
//   method: 'POST',
//   url: '/api/session',
//   data: { user: { username: "bob", password: "123456" } }
// }).then((res) => console.log(res), () => console.log("nahhh"));
