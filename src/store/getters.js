export const getbreadcrumbtitle = (state) => {
  return state.breadcrumbtitle
}
export const getbreadcrumbmainpage = (state) => {
  return state.mainpage
}
export const getbreadcrumbsubpage = (state) => {
  return state.subpage
}
export const isAuthenticated = (state) => {
  return state.token !== ''
}
export const getuser = (state) => {
  return state.user
}
export  const getauth = (state) =>  {
  return state.authority
}
