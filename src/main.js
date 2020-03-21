import axios from 'axios';
class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      console.log(response);
    } catch(err) {
      console.warn('Error on log');
    }
  
};
};

Api.getUserInfo('sdçkjnsdkjnckdjn');
