/*Open and Close Button "+Nova Transação" */
const Modal = {

  open() {
    //abrindo modal adicionando a classe "active"
    document.querySelector('.modal-overlay').classList.add('active');

  },
  close() {
    //fechando o modal removendo a classe 'active'
    document.querySelector('.modal-overlay').classList.remove('active');

  }
}
const transactions = [

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
    amount: -20000,
    date: '21/01/2022',
  },
  {
    id: 4,
    description: 'App',
    amount: 210000,
    date: '21/01/2022',
  },
]
const Transaction = {
  incomes() {
    //Somar as entradas
  },
  expenses() {
    //Somar as sáidas
  },
  total() {
    // Entradas - Saídas
  }
}
//Substituir od dados do HTML com os dados do JS
const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement('tr');
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);
    DOM.transactionsContainer.appendChild(tr)
  },

  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? 'income' : 'expense'
    const amount = utils.formatCurrency(transaction.amount)
    const html = `<td class="description">${transaction.description}</td>
                        <td class="${CSSclass}">${amount}</td>
                        <td class="date">${transaction.date}</td>
                        <td><img src="./assets/image/minus.svg" alt="Remover transação">
                  </td>`;
    return html;
  },
  updateBalance() {
    document
      .getElementById('incomeDisplay')
      .innerHTML = "soma das Entradas"
    document
      .getElementById('expenseDisplay')
      .innerHTML = "Soma das Saídas"
    document
      .getElementById('totalDisplay')
      .innerHTML = " Entradas - Saídas"
  }
}
// Formatando os números para R$
const utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : ""

    value = String(value).replace(/\D/g, "")

    value = Number(value) / 100

    value = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })
    return signal + value
  }
}
transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction)
})

DOM.updateBalance()