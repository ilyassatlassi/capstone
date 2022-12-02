const deleted = document.querySelector(".delete");
const nav = document.querySelector(".second-nav")
const navcont = document.querySelector(".second-nav-content")
const hamburger = document.querySelector('.toolbar');
const feature = document.querySelector('.featured')

//menu button
const activeToggle = () => {
    navcont.classList.toggle('active');
    nav.style.display = 'flex';
};

const deleteToggle = () => {
    navcont.classList.toggle('active');
    nav.style.display = 'none';
};
  
hamburger.addEventListener('click', activeToggle);
deleted.addEventListener('click', deleteToggle);

// Add the feature section
const featured = [
    {
      title: 'Refereeing',
      caption: 'Collina: We’ve asked referees to calculate stoppage time more accurately',
      image: './images/first.webp',
    },
    {
      title: 'Football Unites the world',
      caption: 'Milla: Some might say football is more important than politics ',
      image: './images/second.webp',
    },
    {
      title: 'FIFA 22',
      caption: 'FIFA 22 is a football simulation video game.',
      image: './images/fifa-22.jpg',
    },
    {
      title: 'Organization',
      caption: 'Enrique Macaya Márquez makes it 17 FIFA World Cups in a row',
      image: './images/third.webp',
    },
    {
      title: 'Football Unites the world',
      caption: ' Hristo Stoichkov: The World Cup Cup is a family party ',
      image: './images/four.webp',
    },
    {
      title: 'Footaball Unites the world',
      caption: 'Ian Wright: Football naturally brings people together ',
      image: './images/five.webp',
    },
  ];

const featuresec = document.createElement('h1');
featuresec.innerText = 'Featured';
featuresec.classList.add('main-page-1');
featuresec.classList.add('border-c');
const border = document.createElement('div');
border.classList.add('border');

feature.append(featuresec, border);

const featurecard = document.createElement('div');
featurecard.classList.add('maincardsec');
const rightmaincard = document.createElement('div');
rightmaincard.classList.add('rigmaincard');
const leftmaincard = document.createElement('div');
leftmaincard.classList.add('leftmaincard');


  for (let i = 0; i < featured.length && i < 3; i ++) {
    const maindivcard = document.createElement('div');
    maindivcard.classList.add('maincard');
    const imagediv = document.createElement('div');
    imagediv.classList.add('imagediv');
    const cardimg = document.createElement('img');
    cardimg.src = featured[i].image;
    imagediv.append(cardimg);
    const maintextdiv = document.createElement('div');
    maintextdiv.classList.add('maintextdiv');
    const maintextdivh1 = document.createElement('h2');
    maintextdivh1.innerText = featured[i].title;
    const maintextdivh3 = document.createElement('h3');
    maintextdivh3.innerText = featured[i].caption;
    maintextdiv.append(
      maintextdivh1,
      maintextdivh3,
    );
    maindivcard.append(imagediv, maintextdiv);
  
    rightmaincard.append(maindivcard);
  }

  for (let i = 3; i < featured.length && i < 6; i ++) {
    const maindivcard = document.createElement('div');
    maindivcard.classList.add('maincard');
    const imagediv = document.createElement('div');
    imagediv.classList.add('imagediv');
    const cardimg = document.createElement('img');
    cardimg.src = featured[i].image;
    imagediv.append(cardimg);
    const maintextdiv = document.createElement('div');
    maintextdiv.classList.add('maintextdiv');
    const maintextdivh1 = document.createElement('h2');
    maintextdivh1.innerText = featured[i].title;
    const maintextdivh3 = document.createElement('h3');
    maintextdivh3.innerText = featured[i].caption;
    maintextdiv.append(
      maintextdivh1,
      maintextdivh3,
    );
    maindivcard.append(imagediv, maintextdiv);
  
    leftmaincard.append(maindivcard);
  }
  
  featurecard.append(rightmaincard, leftmaincard);
  feature.append(featurecard)