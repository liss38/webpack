import Post from './Post';
import './styles/style.css';

// assets
import json from './assets/data';
import WebpackLogo from './assets/webpack-logo.png';
import xml from './assets/data.xml';
import csv from './assets/data.csv';

const post = new Post(`Webpack post title`, WebpackLogo);

console.log(` >>>>>>  post: `, post );
console.log(` >>>>>>  pos.toString()`, post.toString() );
console.log(` >>>>>>  data.json `, json );
console.log(` >>>>>>  data.csv `, csv );