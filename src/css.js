const string=`
  .skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  .skin {
    position: relative;
    background-color: #ffe600;
    height: 100vh;
  }
  .nose {
    height: 22px;
    width: 22px;
    transform: rotate(-30deg);
    position: absolute;
    left: 50%;
    top: 150px;
    margin-left: -11px;
  }
  @keyframes wave {
    0% {
      transform: rotate(-30deg);
    }
    33% {
      transform: rotate(-35deg);
    }
    66% {
      transform: rotate(-25deg);
    }
    100% {
      transform: rotate(-30deg);
    }
  }
  .nose:hover {
    animation: wave 0.3s infinite linear;
  }
  .nose > .content {
    overflow: hidden;
    height: 22px;
    width: 22px;
    position: absolute;
    z-index: 999;
    clip: rect(0px, 22px, 22px, 11px);
  }
  .nose > .content > .container {
    height: 22px;
    width: 22px;
    background-color: #000;
    position: absolute;
    border-radius: 50%;
    clip: rect(0px, 11px, 22px, 0);
    transform: rotate(60deg);
  }
  .eye {
    border: 3px solid #000000;
    width: 60px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -30px;
    border-radius: 50%;
    background-color: #2e2e2e;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .eye.left::before,
  .eye.right:before {
    content: "";
    display: block;
    border: 3px solid #000000;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    margin-left: 5px;
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: relative;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up .left,
  .mouth .up .right {
    border: 5px solid black;
    width: 100px;
    height: 30px;
    position: absolute;
    z-index: 1;
    background-color: #ffe600;
  }
  .mouth .up .left {
    border-radius: 0 0 0 50%;
    left: 50%;
    transform: translateX(-100px) rotate(-15deg);
  }
  .mouth .up .left::before,
  .mouth .up .left::after,
  .mouth .up .right::before,
  .mouth .up .right::after {
    content: "";
    display: block;
    position: absolute;
    background-color: #ffe600;
  }
  .mouth .up .left::before {
    top: -6px;
    left: 0px;
    width: 95px;
    height: 7px;
  }
  .mouth .up .left::after {
    bottom: 0px;
    right: -6px;
    width: 7px;
    height: 25px;
  }
  .mouth .up .right {
    border-radius: 0 0 50% 0%;
    right: 50%px;
    transform: translateX(100px) rotate(15deg);
  }
  .mouth .up .right::before {
    top: -6px;
    right: 0px;
    width: 95px;
    height: 8px;
  }
  .mouth .up .right::after {
    bottom: 0px;
    left: -6px;
    width: 7px;
    height: 25px;
  }
  .mouth .down {
    width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    top: 8px;
  }
  .mouth .down .yuan1 {
    border: 1px solid green;
    width: 180px;
    height: 1000px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    margin-left: -90px;
    border-radius: 100px/300px;
    background-color: #9b000a;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    background-color: #ff485f;
    position: absolute;
    bottom: 0px;
    left: 50%;
    bottom: -140px;
    margin-left: -100px;
    border-radius: 100px;
  }
  .face.left {
    border: 3px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    left: 50%;
    top: 250px;
    margin-left: -44px;
    transform: translateX(-250px);
    border-radius: 50%;
    background-color: #ff0000;
  }
  .face > img {
    position: absolute;
    left: 50%;
    top: 50%;
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  .face.right {
    border: 3px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    left: 50%;
    top: 250px;
    margin-left: -44px;
    transform: translateX(250px);
    border-radius: 50%;
    background-color: #ff0000;
  }
`
export default string