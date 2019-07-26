import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-aef12.firebaseio.com/'
});

export default instance;