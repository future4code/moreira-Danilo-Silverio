
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

let salarioFixoMensal = 2000

let comissaoDeVendedores = (100*qtdeCarrosVendidos) + (0.05 * valorTotalVendas)`

let salarioFinal = comissaoDeVendedores + salarioFixoMensal`

return salarioFinal
}

