import ListaTarefa from "../../model/listaTarefas";
import ListaBotao from "./ListaBotao";

interface ListaRodapeProps {
  tarefas: ListaTarefa
  mudou: (tarefas: ListaTarefa) => void
}

const ListaRodape = (props: ListaRodapeProps) => {
	const { tarefas, mudou } = props;
	function renderizarQtdeItens() {
		return (
			<>
				<span className={`
          text-gray-400 hidden lg:inline
        `}>
					{tarefas.quantidade}
					{tarefas.quantidade === 0
						? " Nenhuma Tarefa Encontrada"
						: tarefas.quantidade === 1
							? " Tarefa Encontrada"
							: " Tarefas Encontradas"}
				</span>
				<span className={`
          flex-1 hidden lg:inline
        `}></span>
			</>
		);
	}

	function renderizarBotoesFiltro() {
		return (
			<>
				<ListaBotao
					selecionado={tarefas.exibindoTodas()}
					onClick={() => mudou(tarefas.Removerfiltro())}
					className={`
            hidden md:inline
          `}
				>
          Todas
				</ListaBotao>
				<ListaBotao
					selecionado={tarefas.exibindoSomenteAtivas()}
					onClick={() => mudou(tarefas.filtrarAtivas())}
					className={`
            mx-4
          `}
				>
          Ativas
				</ListaBotao>
				<ListaBotao
					selecionado={tarefas.exibindoSomenteConcluidas()}
					onClick={() => mudou(tarefas.filtrarConcluidas())}
				>
          Concluídas
				</ListaBotao>
			</>
		);
	}

	function renderizarExcluirConcluidas() {
		return (
			<>
				<span className={"flex-1"}></span>
				<ListaBotao
					onClick={() => mudou(tarefas.excluirConcluidas())}
				>
          Excluir <span className={"hidden md:inline"}>Concluídas</span>
				</ListaBotao>
			</>
		);
	}

	return (
		<li className={"flex p-5"}>
			{renderizarQtdeItens()}
			{renderizarBotoesFiltro()}
			{renderizarExcluirConcluidas()}
		</li>
	);
};

export default ListaRodape;
