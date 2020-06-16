import { search } from './search';
import  '../css/main.less';
import img from '../images/logo.gif';

var txt1 = document.createElement("div");
txt1.className='main-text';
txt1.innerHTML = search();
document.body.appendChild(txt1);

var img1 = document.createElement("img");
img1.src=img
document.body.appendChild(img1);
