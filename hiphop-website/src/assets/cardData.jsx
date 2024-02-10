import img01 from '../assets/cardImages/img01.jpg';
import img02 from '../assets/cardImages/img02.jpg';
import img03 from '../assets/cardImages/img03.jpg';
import img04 from '../assets/cardImages/img04.png';

const MainCardsData = () => {
  const cardsData = [
    {
      date: '04-02-2024',
      img: img01,
      title: 'Confira: Melhores shows de DKJ RAP!',
      text: 'os mais icônicos shows e eventos da carreira de DKJ RAP tudo num so lugar!',
      src: '/shows',
    },
    {
        date: '08-02-2024',
        img: img02,
        title: 'DKJ RAP coloca ao ar música das antigas, relembre!',
        text: 'O Veneno da Serpente, de 2003, relançada no youtube para relembrar o estilo "das antigas"',
        src: 'https://www.youtube.com/watch?v=6GJUPvXF9A0',
      },
      {
        date: '07-02-2024',
        img: img03,
        title: 'Confira a trajetória de DKJ RAP no Youtube!',
        text: 'Todas as músicas e albums da carreira de um dos maiores rappers da baixada santista.',
        src: 'https://youtube.com/@DkjRapNacional',
      },
      {
        date: '06-02-2024',
        img: img04,
        title: 'Novo lançamento na área! "Só os Di Verdade"',
        text: 'Confira a mais nova música de DKJ RAP no youtube!',
        src: 'https://youtube.com/watch?v=y82Jgyrzjy4',
      },
    // Adicione mais objetos conforme necessário
  ];

  return cardsData;
};

export default MainCardsData;