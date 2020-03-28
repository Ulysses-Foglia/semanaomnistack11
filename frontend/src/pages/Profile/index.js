import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();

    //useEffect possui 2 parâmetros. O primeiro, é qual função será executada. 
    //E o segunda é um array, de quando será executada. Se deixar vazio [], será executado 1 vez
    //Se fosse inserido [ongNema], toda vez que o parâmetro ongName fosse alterado, a função seria executada novamente
    useEffect(() => {
        api.get('profile', {
            headers: {
               Authorization: ongId, 
            }
        //then() mesma função do await
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident (id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            //comando para atualizar a lista de casos após exclusão
            setIncidents(incidents.filter(incident => incident.id !== id));
        }
        catch (err) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
        <header>
            <img src={logoImg} alt="Be THe Hero"/>
            <span>Bem vinda, {ongName}</span>

            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#e02041"/>
            </button>
        </header>

        <h1>Casos cadastrados</h1>

        <ul>
            {/* map vai percorrer todos os incidentes. Para cada um deles a variável irá
            definir o conteúdo que será recebido. Foi utilizado () após => pois será descrito
            um conteúdo jsx. Mas poderia também ser aberto {} havendo a necessidade de um return
            no inico  */}
            {incidents.map(incident => (
                // sempre dentro do primeiro elemento de um map ou foreach, deve-se identificar
                // seu elemento chave (primaryKey) para buscar os outros casos com maior agilidade
                <li key={incident.id}>
                <strong>CASO:</strong>
                <p>{incident.title}</p>

                <strong>DESCCRIÇÃO:</strong>
                <p>{incident.description}</p>
                
                <strong>VALOR:</strong>
                <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                {/* deste modo abaixo, o retorno da função handleDeleteIncident() será passado
                como parâmetro no onClick, se estiver apenas assim handleDeleteIncident(incident.id) 
                todos os incidents serão deletados, por isso a inserção de uma função nula,
                pois será o retorno de uma nova função, e não o retorno da função padrão "() =>"*/}
                <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>
            </li>
            ))}
        </ul>
        </div>
    );
}