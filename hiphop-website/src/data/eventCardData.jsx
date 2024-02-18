import img01 from '../assets/banners/banner01.png';
import img02 from '../assets/eventImages/show02.png';
import img03 from '../assets/eventImages/show03.png';
import img04 from '../assets/eventImages/show04.png';

const EventCardData = () => {
  const eventCardsData = [
    {
      img: img01,
      title: 'Jardim Elba - Zona Leste',
      story: 'Show realizado no Jardim Elba, na zona leste de São Paulo, por DKJ RAP no dia 4 de setembro de 2011',
      date: '2011',
      local: 'Zona Leste - SP',
      src: '#',
    },
    {
      img: img02,
      title: 'Em busca do Respeito',
      story: 'Participações Especiais: Ndee Naldinho, Chrigor Exaltasamba,  Bola 8 Realidade Cruel, Kartel Della Rua, Cuco Vda, Fusão Bélica, Ronie F3T, Guerreira do Forró, Np Ruídos Negros, Nega Chell, Locutor Zé Gravado totalmente ao vivo em 2010 !', date: '2010',
      local: 'Praia Grande - SP',
      src: 'https://www.youtube.com/watch?v=csNsrrfoMF8',
    },
    {
      img: img03,
      title: 'Show de Lançamento',
      story: 'Abertura do Show do DKJ RAP no Patati Patata na Praia Grande, dia 28 de Setembro de 2013! Organização Gordão Quebrada Forte e MC Anderson. Desistir Jamais e É Pru Ce Ve AO VIVO',
      date: '2013',
      local: 'Praia Grande - SP',
      src: 'https://www.youtube.com/watch?v=YGyQlF5lWVA',
    },
    {
      img: img04,
      title: 'Um novo Dia',
      story: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, ad molestias beatae consequuntur nam laborum iusto tempore totam voluptas dolorum perspiciatis modi odio doloremque fuga facilis animi quis laudantium quisquam!',
      date: '2013',
      local: 'Vila Sônia - PG',
      src: 'https://www.youtube.com/watch?v=gmjLHVPsUDk',
    },
  ]

  return eventCardsData;
}

export default EventCardData;  