import { Task } from "./Task";

export const TaskContainer = ({ provided, tasks }) => {
	return (
		<div className="mt-8" ref={provided.innerRef}>
			{tasks.map((task, index) => (
				<Task key={task.id} index={index} task={task} />
			))}
			{provided.placeholder}
		</div>
	);
};
