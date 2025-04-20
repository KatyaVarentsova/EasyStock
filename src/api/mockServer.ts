import axios from 'axios';

const url =
  'https://true.tabs.sale/fusion/v1/datasheets/dstlr5pDegVHcXYZWA/records?viewId=viwXKQJReqX5j&fieldKey=name';

export const getUsers = async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: 'Bearer uskZUWYuDIOPLDcwkxLEWfI',
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'PostmanRuntime/7.35.0',
      },
    });
    const users = response.data?.data?.records || [];
   
    return users;
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    return [];
  }
};