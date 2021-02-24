import React from 'react';

import './styles.css'

export interface Caixa {
    id: number;
    // comprimentoX: number;
    // alturaY: number;
    // larguraZ: number;
    volume: number;
    idGrupoCaixas: string;
    itemMatriz: ItemMatriz;
    posicao: ItemMatriz;
}

interface ItemMatriz {
    x: number,
    y: number,
    z: number
}

interface CaixaItemProps {
    caixa: Caixa;
}

const CaixaItem: React.FC<CaixaItemProps> = ({ caixa }) => {
    return (
        <article className="caixa-item">
            <header>
                <div>
                    <strong>Caixa {caixa.id+1} do grupo de caixas {caixa.idGrupoCaixas}</strong>
                </div>
            </header>
            
            {/* <p>Comprimento: {caixa.comprimentoX}</p>
            <p>Altura: {caixa.alturaY}</p>
            <p>Largura: {caixa.larguraZ}</p> */}
            <p>Volume: {caixa.volume}</p>

            <p>Posição: [x: {caixa.posicao.x} | y: {caixa.posicao.y} | z: {caixa.posicao.z} ]</p>
            
            <footer>
                
            </footer>

        </article>
    )
}

export default CaixaItem;