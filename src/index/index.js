import { helloworld } from './helloworld';
import  '../css/main.less';
import img from '../images/logo1.png';



var txt1 = document.createElement("div");
txt1.className='main-text';
txt1.innerHTML = helloworld();
document.body.appendChild(txt1);

var img1 = document.createElement("img");
img1.src=img
document.body.appendChild(img1);
