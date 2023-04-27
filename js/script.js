window.addEventListener('load', function() {
  
  let lang = document.querySelector('html');
  lang.setAttribute('lang', 'en');

  let meta = document.createElement('meta');
  meta.setAttribute('charset', 'UTF-8');
  document.head.insertBefore(meta, document.querySelector('script'));

  let title = document.createElement('title');
  title.innerHTML = 'Call to action';
  document.head.insertBefore(title, document.querySelector('script'));

  let link = this.document.createElement('link');
  link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans:wght@400&display=swap');
  link.setAttribute('rel', 'stylesheet');
  this.document.head.appendChild(link)

  let divWrap = document.createElement('div');
  divWrap.classList.add('wrapper');
  document.body.appendChild(divWrap);

  let divTitle = document.createElement('div');
  divTitle.classList.add('title');
  divWrap.appendChild(divTitle);

  let h1 = document.createElement('h1');
  h1.innerHTML = 'Choose Your Option';
  divTitle.appendChild(h1);

  let PTitle = document.createElement('p');
  PTitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
  divTitle.appendChild(PTitle);

  let divMain = document.createElement('div');
  divMain.classList.add('block');
  divWrap.appendChild(divMain);

  let divFreelancer = document.createElement('div');
  divFreelancer.classList.add('freelancerBlock');
  divMain.appendChild(divFreelancer);

  let p1 = document.createElement('p');
  p1.classList.add('upperText')
  p1.innerHTML = 'freelancer';
  divFreelancer.appendChild(p1);

  let h2 = document.createElement('h2');
  h2.innerHTML = 'Initially designed to';
  divFreelancer.appendChild(h2);

  let p2 = document.createElement('p');
  p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
  divFreelancer.appendChild(p2);

  let button = document.createElement('button');
  button.innerHTML = 'start here';
  divFreelancer.appendChild(button);

  let divStudio = divFreelancer.cloneNode(true);
  divMain.appendChild(divStudio);
  divStudio.classList.toggle('freelancerBlock'); //почему то не перезаписывался через remove
  divStudio.classList.add('studioBlock');

  let p1Studio = divStudio.querySelector('p');
  console.log(p1Studio);
  p1Studio.innerHTML = 'studio';

  //стилизация
  let style = document.createElement('style');
  style.innerHTML = `
    * {
      margin: 0;
      padding: 0;
    }

    .wrapper {
      width: 964px;
      height: 615px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .title {
      text-align: center;
    }

    .title h1 {
      font-family: 'Arvo';
      font-size: 36px;
      margin-bottom: 15px;
    }

    .title p {
      font-family: 'OpenSans';
      font-size: 14px;
      color: #9FA3A7;
      margin-bottom: 45px;
    }

    .block {
      height: 480px;
      width: 800px;
      border: 1px solid #E8E9ED;
      margin-top: 56px;
      display: flex;
      flex-wrap: nowrap;
      margin: auto;
      border-radius: 10px;
      overflow: hidden;
    }

    .block > .freelancerBlock, .studioBlock {
      width: 50%;
      text-align: center;
      word-wrap: break-word;
      padding: 80px 95px;
      box-sizing: border-box;
    }

    .freelancerBlock > .upperText {
      font-family: 'Montserrat';
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
      margin-bottom: 20px;
    }

    .freelancerBlock > h2 {
      font-family: 'Arvo';
      font-size: 36px;
      margin-bottom: 25px;
      line-height: 46px;
      font-weight: 500;
    }

    .freelancerBlock > p {
      font-family: 'Arial';
      color: #9FA3A7;
      font-size: 12px;
      margin-bottom: 65px;
      line-height: 22px;
    }

    .freelancerBlock > button {
      font-family: 'Montserrat';
      font-size: 12px;
      padding: 15px 25px;
      text-transform: uppercase;
      border-radius: 30px;
      border: 3px solid #FFC80A;
      background-color: white;
      cursor: pointer;
      letter-spacing: 1.5px;
    }

    .studioBlock {
      background-color: #8F75BE;
    }

    .studioBlock > .upperText {
      font-family: 'Montserrat';
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
      margin-bottom: 20px;
      color: #FFC80A;
    }

    .studioBlock > h2 {
      font-family: 'Arvo';
      font-size: 36px;
      margin-bottom: 25px;
      line-height: 46px;
      font-weight: 500;
      color: white;
    }

    .studioBlock > p {
      font-family: 'Arial';
      color: #9FA3A7;
      font-size: 12px;
      margin-bottom: 65px;
      line-height: 22px;
      color: white;
    }

    .studioBlock > button {
      font-family: 'Montserrat';
      font-size: 12px;
      padding: 15px 25px;
      text-transform: uppercase;
      border-radius: 30px;
      border: 3px solid #FFC80A;
      background-color: #8F75BE;
      cursor: pointer;
      letter-spacing: 1.5px;
      color: white;
    }
  `
  this.document.head.appendChild(style)
});

