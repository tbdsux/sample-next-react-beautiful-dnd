import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, index }) => {
	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided, snapshot) => (
				<div
					className="py-2 px-4 my-2 rounded-md border"
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{task.content}
				</div>
			)}
		</Draggable>
	);
};
