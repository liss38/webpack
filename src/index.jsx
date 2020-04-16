import React from 'react';
import { render } from 'react-dom';

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


// babel
import '@/babel';



const post = new Post(`Webpack post title`, WebpackLogo);

console.log(` >>>>>>  post: `, post );
console.log(` >>>>>>  pos.toString()`, post.toString() );
console.log(` >>>>>>  data.json `, json );
console.log(` >>>>>>  data.csv `, csv );




$(`pre`).addClass(`code`).html(post.toString());


const App = () => (
	<React.Fragment>
		<div className="container">
			<h1>Webpack Course</h1>
			<hr />
			<div className="logo"></div>
			<hr />

			<pre></pre>
		</div>

		<div className="box">
			<h2>Box2</h2>
		</div>

		<div className="card">
			<h2>Card</h2>
		</div>
	</React.Fragment>
);
render(<App />, document.getElementById(`app`))