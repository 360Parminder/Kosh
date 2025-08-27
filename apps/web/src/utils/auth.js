
export const getToken = async () => {
  try {
    const credentials = await localStorage.getItem('token');
    return credentials ? JSON.parse(credentials).password : null;
  } catch (error) {
    console.error('LocalStorage couldn\'t be accessed:', error);
    return null;
  }
};