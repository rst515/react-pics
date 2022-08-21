import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID tq0AVIjD8r92E35TIv1_3k38GQpx-EPQsZ5fcNdkP2Q'
    }
});