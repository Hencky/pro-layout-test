// src/access.ts
export default function access(initialState) {
  const { currentUser } = initialState || {};
  console.log('access',  currentUser === 'admin')
  return {
    canAdmin: currentUser  === 'admin',
  };
}
