const Modal = {
  open() {
    document.querySelector('.modal-overlay').classList.add('active')
  },
  close() {
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}
const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021',
  },
  {
    id: 2,
    description: 'Agua',
    amount: -3000,
    date: '10/01/2021',
  },
  {
    id: 3,
    description: 'Salario',
    amount: 300000,
    date: '09/01/2021',
  }
]
const Transaction = {
  incomes() {
    //Somar as entradas
  },
  expenses() {
    //somar as saidas
  },
  total() {
    // total expenses - incomes
  }

}

const DOM = {
  innerHtmlTransaction() {
    const html = `
          <tr>
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/04/2021</td>
            <td>
              <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
          </tr>
    `;
  }
}