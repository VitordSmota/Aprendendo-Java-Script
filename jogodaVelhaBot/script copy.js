
const arrWinning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];
const arrAtacar = [
  [0, 1],
  [1, 2],
  [0, 2],
  [3, 4],
  [4, 5],
  [3, 5],
  [6, 7],
  [7, 8],
  [6, 8],
  [0, 3],
  [3, 6],
  [0, 6],
  [1, 4],
  [4, 7],
  [1, 7],
  [2, 5],
  [5, 8],
  [2, 8],
  [0, 4],
  [0, 8],
  [6, 4],
  [4, 2],
  [6, 2],
];
const arrRandom = [[4], [0, 2, 6, 8], [1, 3, 5, 7]];

// vitoria
const verificaVitoria = currentPlayer => {
  return arrWinning.some(combinacao => {
    return combinacao.every(index => {
      return boxElements[index].value === currentPlayer;
    });
  });
};

//

const modalDaVitoria = () => {
   verificaVitoria("X");
   verificaVitoria("O");
   const vitoriaDoBot = verificaVitoria("O");
   const vitoriadoPlayer = verificaVitoria("X");

  if (vitoriaDoBot) console.log("Vitoria do Bot")
  if (vitoriadoPlayer) console.log("Vitoria do Player")
  else return console.log('Continue a jogar')

}

const meubot = () => {
  modalDaVitoria();

 



}

console.log(meubot())



const arrAtacar = [
  [0, 1],
  [1, 2],
  [0, 2],
  [3, 4],
  [4, 5],
  [3, 5],
  [6, 7],
  [7, 8],
  [6, 8],
  [0, 3],
  [3, 6],
  [0, 6],
  [1, 4],
  [4, 7],
  [1, 7],
  [2, 5],
  [5, 8],
  [2, 8],
  [0, 4],
  [0, 8],
  [6, 4],
  [4, 2],
  [6, 2],
];
const arrRandom = [[4], [0, 2, 6, 8], [1, 3, 5, 7]];
const verificaVitoria = currentPlayer => {
  return arrWinning.some(combinacao => {
    return combinacao.every(index => {
      return boxElements[index].value === currentPlayer;
    });
  });
};
const verificaAtaque = currentPlayer => {
  return arrAtacar.some(combinacao => {
    return combinacao.every(index => {
      return boxElements[index].value === currentPlayer;
    });
  });
};

const verificaEmpate = () => {
  return arrWinning.every(combinacao => {
    combinacao.every(index => {
      return boxElements[index].value != "";
    });
  });
};

const modalDaVitoria = () => {
  verificaVitoria("X");
  verificaVitoria("O");
  const vitoriaDoBot = verificaVitoria("O");
  const vitoriadoPlayer = verificaVitoria("X");

  if (vitoriaDoBot) return console.log("Vitoria do Bot");
  if (vitoriadoPlayer) return console.log("Vitoria do Player");
  else return console.log("Continue a jogar");
};
