let valorConta = parseFloat(prompt('Quanto deu a conta?'))
let quantClientes = parseInt(prompt('Quantos clientes pagarão?'))
let valorPorCliente = valorConta / quantClientes
alert('Valor da conta R$: ' + valorConta + ' Número de clientes: ' + quantClientes + ' Valor por cliente R$: ' + valorPorCliente)