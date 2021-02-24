import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import GrupoCaixasItem, { GrupoCaixas } from '../../components/GrupoCaixasItem';
import api from '../../services/api';
import './styles.css'

function GrupoCaixasList() {
    const [gruposCaixas, setGruposCaixas] = useState([]);

    async function searchCaixas(e: FormEvent) {
        e.preventDefault();
        const response = await api.get('gruposCaixas');
        setGruposCaixas(response.data);
    }

    return (
        <div id="page-container-list" className="container">
            <PageHeader title="Estes são os grupos de caixas disponíveis.">
                <form id="search-grupos-caixas" onSubmit={searchCaixas}>
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {gruposCaixas.map((grupoCaixas: GrupoCaixas) => {
                    return <GrupoCaixasItem key={grupoCaixas._id} grupoCaixas={grupoCaixas} />
                })}
            </main>
        </div>
    )
}

export default GrupoCaixasList;