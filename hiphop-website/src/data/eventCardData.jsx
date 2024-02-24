import img01 from '../assets/banners/banner01.png';
import img02 from '../assets/eventImages/show02.png';
import img03 from '../assets/eventImages/show03.png';
import img04 from '../assets/eventImages/show04.png';
import img05 from '../assets/eventImages/show05.png';


const EventCardData = () => {
  const eventCardsData = [
    {
      img: img01,
      title: 'Jardim Elba - Zona Leste',
      story: 'Show realizado no Jardim Elba, na zona leste de São Paulo, por DKJ RAP no dia 4 de setembro de 2011',
      date: '2011',
      local: 'Zona Leste - SP',
      src: 'https://www.facebook.com/DKJrap',
    },
    {
      img: img02,
      title: 'Em busca do Respeito',
      story: 'Participações Especiais: Ndee Naldinho, Chrigor Exaltasamba,  Bola 8 Realidade Cruel, Kartel Della Rua, Cuco Vda, Fusão Bélica, Ronie F3T, Guerreira do Forró, Np Ruídos Negros, Nega Chell, Locutor Zé Gravado totalmente ao vivo em 2010!', date: '2011',
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
      story: 'DKJ RAP - Um Novo Dia, ao vivo, homenagem para Charlie Brown JR No Patatí Patatá, Praia Grande. Produção: Gordão Quebrada Forte, Em Agosto de 2013',
      date: '2013',
      local: 'Vila Sônia - PG',
      src: 'https://www.youtube.com/watch?v=gmjLHVPsUDk',
    },
    {
      img: img05,
      title: 'Dkj Rap DVD ao Vivo - Entao',
      story: 'Participações Especiais: Ndee Naldinho, Chrigor Exaltasamba,  Bola 8 Realidade Cruel, Kartel Della Rua, Cuco Vda, Fusão Bélica, Ronie F3T, Guerreira do Forró, Np Ruídos Negros, Nega Chell, Locutor Zé Gravado totalmente ao vivo em 2010!',
      date: '2011',
      local: 'Euforia - PG',
      src: 'https://www.youtube.com/watch?v=ltAtB8KQxJc',
    },
  ]

  return eventCardsData;
}

export default EventCardData;  