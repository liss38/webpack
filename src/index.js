import * as $ from 'jquery';
import Post from '@models/Post';
import './styles/style.css';
import './styles/box.less';
import './styles/scss.scss';

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




$(`pre`).addClass(`code`).html(post.toString());