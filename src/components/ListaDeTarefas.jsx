import React, {useState} from 'react';
import './ListaDeTarefa.css'

function ListaDeTarefas(){
    const[tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if(novaTarefa.trim() !== '') {
            setTarefas([...tarefas, novaTarefa]);
            setNovaTarefa('');
        }
    };

    const removerTarefa = (index) => {
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);
        setTarefas(novasTarefas);
    };

    return(
        <>
        
            <div className='body'>
            <section className="corpo">
        <h2>Lista De Tarefas</h2>

        <input 
        type="text" 
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Adicione uma nova Tarefa" 
        />
        <br />
        <button onClick={adicionarTarefa}>Adicionar</button>
        <ul>
            {tarefas.map((tarefa, index) => (<li key={index}>
                {tarefa}{' '}
                <button onClick={() => removerTarefa(index)}>Remover</button>
            </li>))}
        </ul>
        </section>
        </div>
        </>
    );
}

export default ListaDeTarefas