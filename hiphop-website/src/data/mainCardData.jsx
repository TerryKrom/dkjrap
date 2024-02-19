// mainCard
import img01 from '../assets/cardImages/img01.jpg';
import img02 from '../assets/cardImages/img02.jpg';
import img03 from '../assets/cardImages/img03.jpg';
import img04 from '../assets/cardImages/img04.png';
import img05 from '../assets/cardImages/img05.png';
import img06 from '../assets/cardImages/img06.png';
import img07 from '../assets/cardImages/img07.png';
import img08 from '../assets/cardImages/img08.png';

const MainCardsData = () => {
  const cardsData = [
    {
      date: '04-02-2024',
      img: img01,
      title: 'Confira: Melhores shows de DKJ RAP!',
      text: 'os mais icônicos shows e eventos da carreira de DKJ RAP tudo num so lugar!',
      src: '/shows',
      target: ''
    },
    {
      date: '06-02-2024',
      img: img02,
      title: 'DKJ RAP coloca ao ar música das antigas, relembre!',
      text: 'O Veneno da Serpente, de 2003, relançada no youtube para relembrar o estilo "das antigas"',
      src: 'https://www.youtube.com/watch?v=6GJUPvXF9A0',
      target: '_blank'
    },
    {
      date: '08-02-2024',
      img: img03,
      title: 'Confira a trajetória de DKJ RAP no Youtube!',
      text: 'Todas as músicas e albums da carreira de um dos maiores rappers da baixada santista.',
      src: 'https://youtube.com/@DkjRapNacional',
      target: '_blank'
    },
    {
      date: '10-02-2024',
      img: img04,
      title: 'Novo lançamento na área! "Só os Di Verdade"',
      text: 'Confira o mais novo lançamento de DKJ RAP no youtube, Deixe seu Like e compartilhe para ajudar!',
      src: 'https://youtube.com/watch?v=y82Jgyrzjy4',
      target: '_blank'
    },
    {
      date: '12-02-2024',
      img: img05,
      title: 'DKJ RAP agora no Spotify!',
      text: 'Siga o novo perfil de DKJ RAP no spotify para acompanhar todos os novos lançamentos, além de poder ouvir as melhores músicas e albuns disponíveis!',
      src: 'https://youtube.com/watch?v=y82Jgyrzjy4',
      target: '_blank'
    },
    {
      date: '14-02-2024',
      img: img06,
      title: 'Lembra do VK? Confira o Perfil!',
      text: 'VK, uma rede social que bombou no inicio da internet e foi esquecida com o tempo. Você chegou a usar? confira o perfil de DKJ RAP na plataforma!',
      src: 'https://vk.com/dkjrapnacional',
      target: '_blank'
    },
    {
      date: '16-02-2024',
      img: img07,
      title: 'Das Antigas: MySpace de DKJ RAP',
      text: 'Mais uma rede social das antigas! confira as origens da carreira de DKJ RAP no MySpace, com 20K de seguidores atualmente!',
      src: 'https://youtube.com/watch?v=y82Jgyrzjy4',
      target: '_blank'
    },
    {
      date: '18-02-2024',
      img: img08,
      title: 'Qual a musica mais famosa de DKJ RAP?',
      text: 'Você sabe qual a música com mais views no canal do youtube de DKJ RAP?',
      src: 'https://www.youtube.com/watch?v=6FsMTqhbeMw',
      target: '_blank'
    },
    
];

  return cardsData;
};

export default MainCardsData;