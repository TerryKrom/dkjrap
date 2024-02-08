import img01 from '../assets/cardImages/img01.jpg';
import img02 from '../assets/cardImages/img02.jpg';

const MainCardsData = () => {
  const cardsData = [
    {
      date: '04-01-2024',
      img: img01,
      title: 'Confira: Melhores shows de DKJ RAP!',
      text: 'os mais icônicos shows e eventos da carreira de DKJ RAP tudo num so lugar!',
      src: '/shows',
    },
    {
        date: '07-01-2024',
        img: img02,
        title: 'DKJ RAP coloca ao ar música das antigas, relembre!',
        text: 'O Veneno da Serpente, de 2003, relançada no youtube para relembrar o estilo "das antigas"',
        src: 'https://www.youtube.com/watch?v=6GJUPvXF9A0',
      },
      {
        date: '04-01-2024',
        img: img01,
        title: 'Os melhores show de DKJ RAP!',
        text: 'Shows, eventos, melhores momentos tudo num só lugar',
        src: '#',
      },
      {
        date: '05-01-2024',
        img: img01,
        title: 'Os melhores show de DKJ RAP!',
        text: 'Shows, eventos, melhores momentos tudo num só lugar',
        src: '#',
      },
    // Adicione mais objetos conforme necessário
  ];

  return cardsData;
};

export default MainCardsData;