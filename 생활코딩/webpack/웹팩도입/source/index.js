// index.js 가 엔트리 파일이 된다

import hello_word from "./hello.js";
import world_word from "./world";
import _ from "lodash"
import css from "./style.css"
document.querySelector("#root").innerHTML = _.join([world_word],' ')
console.log("css",css)