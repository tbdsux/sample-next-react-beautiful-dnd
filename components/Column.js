import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";
import { TaskContainer } from "./TaskContainer";

export const Column = ({ column, tasks }) => {
	console.log(column);
	console.log(tasks);
	return (
		<div className="w-5/6 mx-auto border p-8 rounded-md">
			<h1 className="text-lg font-bold">{column.title}</h1>

			<Droppable droppableId={column.id}>
				{(provided) => (
					<TaskContainer
						{...provided.droppableProps}
						provided={provided}
						tasks={tasks}
					/>
				)}
			</Droppable>
		</div>
	);
};
