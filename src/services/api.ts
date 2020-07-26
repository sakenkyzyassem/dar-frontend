import axios from 'axios';
import { Post } from '../types/interfaces'

export const getPost = () => {

    return axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.data);
}