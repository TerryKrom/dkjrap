import img from '../assets/banners/banner01.png';

const EventCardData = () => {
    const eventCardsData = [
      {
        img: img,
        title: 'Evento de Rap',
        story: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, ad molestias beatae consequuntur nam laborum iusto tempore totam voluptas dolorum perspiciatis modi odio doloremque fuga facilis animi quis laudantium quisquam!',
        date: '04-09-11',
        local: 'Capão Redondo - SP',
        src: '#',
      },
      {
        img: img,
        title: 'Em busca do Respeito',
        story: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, ad molestias beatae consequuntur nam laborum iusto tempore totam voluptas dolorum perspiciatis modi odio doloremque fuga facilis animi quis laudantium quisquam!',
        date: '2010',
        local: 'Praia Grande - SP',
        src: 'https://www.youtube.com/watch?v=csNsrrfoMF8',
      },
      {
        img: img,
        title: 'Show de Lançamento',
        story: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, ad molestias beatae consequuntur nam laborum iusto tempore totam voluptas dolorum perspiciatis modi odio doloremque fuga facilis animi quis laudantium quisquam!',
        date: '2013',
        local: 'Praia Grande - SP',
        src: 'https://www.youtube.com/watch?v=YGyQlF5lWVA',
      },
      {
        img: img,
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