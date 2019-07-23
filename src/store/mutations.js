import Component from '../Plugins/Component'
export const setbreadcrumbtitle = (state, title) => {
  state.breadcrumbtitle = title
}
export const setmainpage = (state, page) => {
  state.mainpage = page
}
export const setsubpage = (state, page) => {
  state.subpage = page
}
export const setlink = (state, link) => {
  state.routerlink = link
}
export const setToken = (state, token) => {
  state.token = token
}
export const setUs = (state, user) => {
  state.user = user
  localStorage.setItem('us', Component.b64EncodeUnicode(JSON.stringify(user)))
  // localStorage.setItem("us", user)
}

export  const setAuthority= (state,auth)=>{
  state.authority=auth;
  localStorage.setItem('auth', Component.b64EncodeUnicode(JSON.stringify(auth)))
}
