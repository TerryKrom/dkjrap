import React from 'react';
import './aboutContainer.css';
import Title from './global/title';
import img01 from '../assets/dexter.jpg';
import img02 from '../assets/dexter2.jpg';
import img03 from '../assets/reportagem.jpg';
import img04 from '../assets/naldinho.jpg';

const AboutContainer = () => {
    return (  
        <>
        <Title text={'Release'} />
            <div className="about-container">
                <p>
                Alex, também conhecido como DKJ, deu início à sua trajetória no rap em 1996, inspirado pelo programa Rap Brasil. Inicialmente, atuou como DJ em festas e eventos nas periferias. Em 1997, fundou seu primeiro grupo, "Lições de Vida", seguido, em 1998, pelo breve projeto "Holocausto", que durou menos de um ano.No final de 1999, surge o nome DKJ, significando "Da Kele Jeito", e desde então, ele se estabeleceu no cenário do rap nacional. Em 2002, lançou seu primeiro demo, "O Clima", que circulou pelos bairros da zona sul de São Paulo. No ano seguinte, gravou outro demo, "Só Quem É", apresentando cinco novas faixas.Em 2004, DKJ lançou seu primeiro CD, "Renascendo das Cinzas", marcando presença em rádios comunitárias de São Paulo. Enfrentando desafios após o nascimento de seu primeiro filho, em 2002, mudou-se para a Baixada Santista, retornando às atividades em 2005 com o álbum "Fênix da Periferia". Destacou-se por organizar eventos beneficentes e por suas letras que refletiam a realidade de forma contundente e saudável. Em 2006, atuou como locutor na rádio comunitária Mídia FM, onde fundou o programa "Rotação Rap". Após um hiato de três anos, lançou, em 2009, o álbum "Nóis é Disciplina", apadrinhado por Chrigor, ex-Exaltasamba. Em 2010, gravou seu primeiro DVD, contando com participações especiais. No ano de 2012, lançou "Sou Quem Sou", considerado seu melhor trabalho, reunindo músicas marcantes da carreira e faixas inéditas. Nascido na Vila Matilde e morador da Zona Sul, DKJ representa três lugares significativos: Zona Leste, Zona Sul e Baixada Santista.
                Para contratações e informações, entre em contato com o rapper pelo e-mail dkjrapnacional@gmail.com.
                </p>
            </div>
        {/* <Title text={'Imagens'} />
            <div className="about-container">
                <img src={img01} alt="" />
                <img src={img02} alt="" />
                <img src={img03} alt="" />
                <img src={img04} alt="" />
            </div> */}
        </>
    );
}
 
export default AboutContainer;