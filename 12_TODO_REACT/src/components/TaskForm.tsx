import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "./TaskForm.module.css";

//interface
import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

export default function TaskForm({
  btnText,
  taskList,
  task,
  setTaskList,
  handleUpdate,
}: Props) {
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDifficulty(task.difficulty);
      setId(task.id);
    }
  }, [task]);

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addOrUpdateTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      return;
    }
    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };

      const newTaskList = [...taskList, newTask];
      setTaskList!(newTaskList);
      localStorage.setItem("taskList", JSON.stringify(newTaskList));

      setTitle("");
      setDifficulty(0);
    }
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addOrUpdateTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          name="title"
          placeholder="titulo da tarefa"
          onChange={handlerChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="range"
          name="difficulty"
          list="listDifficulty"
          placeholder="titulo da tarefa"
          onChange={handlerChange}
          value={difficulty}
          min="0"
          max="10"
          step="5"
        />

        <datalist id="listDifficulty">
          <option value="0" label="0"></option>
          <option value="5" label="5"></option>
          <option value="10" label="10"></option>
        </datalist>
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
}
