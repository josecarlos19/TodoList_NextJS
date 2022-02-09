import ListaTarefa from "../model/listaTarefas";
import Tarefa from "../model/Tarefa";
import TipoFiltro from "../model/TipoFiltro";

const tarefasIniciais: Tarefa[] = [
	Tarefa.criarAtiva(Math.random(), "Atividade exemplo")
];

export default new ListaTarefa(tarefasIniciais, TipoFiltro.NENHUM);
