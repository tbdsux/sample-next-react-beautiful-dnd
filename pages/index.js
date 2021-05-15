import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Column } from "../components/Column";
import { initialData } from "../data/initial";

const data = initialData;

export default function Home() {
	const [state, setState] = useState(data);

	const getTasks = (column) => {
		return state.columns[column].taskIds.map((id) => data.tasks[id]);
	};

	function onDragEnd(result) {
		const { destination, source, draggableId } = result;

		if (!destination) return;

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;

		const column = state.columns[source.droppableId];
		const newTaskIds = Array.from(column.taskIds);

		newTaskIds.splice(source.index, 1);
		newTaskIds.splice(destination.index, 0, draggableId);

		const newColumn = {
			...column,
			taskIds: newTaskIds,
		};

		console.log(newTaskIds);

		const newState = {
			...state,
			columns: {
				...state.columns,
				[newColumn.id]: newColumn,
			},
		};

		setState(newState);
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div>
				{state.columnOrder.map((column, index) => (
					<Column
						key={index}
						column={data.columns[column]}
						tasks={getTasks(column)}
					/>
				))}
			</div>
		</DragDropContext>
	);
}
