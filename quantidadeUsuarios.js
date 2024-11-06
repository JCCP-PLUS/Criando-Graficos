import { getCSS, tickConfig } from ".common.js"

async function quantidadeUsuariosPorRede() {
    const url = https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS(--primary-color)
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS(--bg-color),
        paper_bgcolor: getCSS
    }