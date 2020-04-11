import Post from './Post';
import './styles/style.css';

const post = new Post(`Webpack post title`);

console.log(` >>>>>>  post: `, post );
console.log(` >>>>>>  pos.toString()`, post.toString() );