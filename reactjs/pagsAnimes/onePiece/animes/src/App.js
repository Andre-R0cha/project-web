// import React, {useState, useEffect} from 'react';
import React, { Component } from 'react';
import './App.css';
import botaoLuffy from './images/tripulacao-luffy.png';
import botaoNami from './images/tripulacao-nami.png';
import botaoZoro from './images/tripulacao-zoro.png';
import botaoTony from './images/tripulacao-chopper.png';
import botaoSanji from './images/tripulacao-sanji.png';
import luffy from '../src/images/luffy.jpeg';
import nami from '../src/images/nami.jpeg';
import tony from '../src/images/tony.jpeg';
import zoro from '../src/images/zoro.jpeg';
import sanji from '../src/images/sanji.jpeg';
import logo from './images/logoPiece.png';







class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedImage: luffy,
      selectedCharacterName: 'Luffy',
      selectedCharacterText: 'Monkey D. Luffy, o protagonista do anime, é o fundador e capitão da tripulação Piratas do Chapéu de Palha.',
      selectedButtonIndex: 0,
    };
  }


  handleClick = (imageSrc, index,  characterName, characterText) => {
    this.setState({ selectedImage: imageSrc, selectedButtonIndex: index ,    selectedCharacterName: characterName,
      selectedCharacterText: characterText });
  }

  render() {

    const { selectedImage } = this.state;

    const image = [
      { name: 'Luffy', buttonImg: botaoLuffy, mainImg: luffy, mainText:'Monkey D. Luffy, o protagonista do anime, é o fundador e capitão da tripulação Piratas do Chapéu de Palha.' },
      { name: 'Nami', buttonImg: botaoNami, mainImg: nami ,mainText: 'Nami é uma órfã de guerra e é apaixonada por desenhar mapas. Ela é uma membro valiosa da tripulação.' },
      { name: 'Zoro', buttonImg: botaoZoro, mainImg: zoro, mainText: 'Roronoa Zoro é o espadachim da tripulação e o primeiro a se juntar a Luffy. Ele possui um sonho de se tornar o melhor espadachim do mundo.' },
      { name: 'Tony Chopper', buttonImg: botaoTony, mainImg: tony, mainText: 'Tony Chopper é uma pequena rena que ganhou a habilidade de se transformar em humano após comer uma Fruta do Diabo. Ele é o médico da tripulação.' },
      { name: 'Sanji', buttonImg: botaoSanji, mainImg: sanji, mainText: 'Sanji, também conhecido como "Perna Negra" Sanji, é o cozinheiro oficial da tripulação e um valente membro dos Piratas do Chapéu de Palha.' },
    ];



    return (


      <div className='App'>
        <div className="botao">
          {image.map((image, index) => (
            <a className='bottao'>
            <button  key={index} onClick={() => this.handleClick(image.mainImg, index, image.name, image.mainText)} className={`botao-cunston ${this.state.selectedButtonIndex === index ? 'botao-ativo' : ''}`}>
              <img className='button-Image' src={image.buttonImg} alt={`tripulacao${image.name}`} />
              {/* {image.name} */}
            </button>
            </a>
          ))}
        </div>
        <div className='text'>

        </div>
        <div className='logo' >
          <img src={logo} alt='logoAnimes' />
        </div>
        <div className='texto'>

        <div className='nomeAnime' >
        {this.state.selectedCharacterName}
        </div>
        <div className='textoAnime'>
        {this.state.selectedCharacterText}
        </div>
        <div>



        </div>
          {selectedImage && (

            <div className="image-container">
              <img src={selectedImage} alt="Imagem Selecionada" />
            </div>


          )}
        </div>
      </div>

    );
  }
}
export default App;
