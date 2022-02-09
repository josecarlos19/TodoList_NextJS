import { useState } from "react";
import Formulario from "../components/formulario/Formulario";
import Lista from "../components/lista/Lista";
import Cabecalho from "../components/template/Cabecalho";
import Conteudo from "../components/template/Conteudo";
import tarefasIniciais from "../data/mock";
import ListaTarefa from "../model/listaTarefas";
import Tarefa from "../model/Tarefa";

const index = () => {
	const [tarefas, setTarefas] = useState(tarefasIniciais);

	function novaTarefaCriada(novaTarefa: Tarefa) {
		setTarefas(tarefas.adicionarTarefa(novaTarefa));
	}

	function mudou(novasTarefas:ListaTarefa) {
		setTarefas(novasTarefas);
	}

	return (
		<div className={"flex flex-col bg-gray-300 h-screen"}>
			<Cabecalho>
				<Formulario novaTarefaCriada={novaTarefaCriada}/>
			</Cabecalho>
			<Conteudo>
				<Lista tarefas={tarefas} mudou={mudou} />
			</Conteudo>
		</div>
	);
};

export default index;
