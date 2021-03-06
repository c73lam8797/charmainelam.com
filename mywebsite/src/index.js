import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import Main from './Main';
import App from './App';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/swiper-bundle.css';
import 'react-image-lightbox/style.css';
import './CSS/index.css';
import "animate.css/animate.min.css";
//import './CSS/old_index.css';


ReactDOM.render(<App />, document.getElementById('root') );
// ReactDOM.render(<Main />, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
