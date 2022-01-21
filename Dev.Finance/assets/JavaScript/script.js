/*Open and Close Button "+Nova Transação" */
const Modal = {
  
  open() {
    document.querySelector('.modal-overlay').classList.add('active');
  
  },
  close() {
    document.querySelector('.modal-overlay').classList.remove('active');

  }, 
}
const transaction = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '21/01/2022',
  },
  {
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '21/01/2022',
  },
  {
    id: 3,
    description: 'Internet',
    amount: 20000,
    date: '21/01/2022',
  },
];
 

//Eu Preciso somar as entradas
// depois eu preciso somar as saídas
//Eu preciso do Total, Removendo das entradas o valor das sáidas
//
const Transaction = {
  incomes() { //Somar as entradas    

  },
  expense() { //Somar as sáidas

  },
  total() { // Entradas - Saídas

  },
};
//Substituir od dados do HTML com os dados do JS
const DOM = {
  addTransaction(transaction, index){
      console.log(transaction)
    const tr = document.createElement('tr');
    tr.innerHTML = DOM.innerHTMLTransaction();
  },
  innerHTMLTransaction() {
    const html = `<td class="description">Luz</td>
                        <td class="expense">- R$ 500,00</td>
                        <td class="date">18/01/2022</td>
                        <td><img src="./assets/image/minus.svg" alt="Remover transação">
                  </td>`;
    return html;
  },
}
DOM.addTransaction(transaction[1]);