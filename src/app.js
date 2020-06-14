export async function getInitialState() {
  const currentUser = sessionStorage.getItem('currentUser') || 'admin'
  return {
    currentUser: currentUser,
  };
}

export const layout = ({ initialState }) => {
  return {
    disableContentMargin: false,
    menuHeaderRender: undefined,
  };
};
