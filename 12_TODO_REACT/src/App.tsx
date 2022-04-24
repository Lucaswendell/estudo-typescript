import React, { useState, useEffect } from "react";
import "./App.css";

//Componets
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import { Modal } from "./components/Modal";

//css
import styles from "./App.module.css";
import { TaskList } from "./components/TaskList";

//interface
import { ITask } from "./interfaces/Task";

function App() {
  useEffect(() => {
    if (localStorage.getItem("taskList")) {
      const taskList: ITask[] = JSON.parse(localStorage.getItem("taskList")!);
      setTaskList(taskList);
    }
  }, []);

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    const newTask = taskList.filter((task) => task.id !== id);
    localStorage.setItem("taskList", JSON.stringify(newTask));

    setTaskList(newTask);
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask) => {
    setTaskToUpdate(task);
    hideOrShowModal(true);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    setTaskList(updatedItems);

    hideOrShowModal(false);
  };

  return (
    <div>
      <Modal
        children={
          <TaskForm
            task={taskToUpdate}
            btnText="Editar tarefa"
            taskList={taskList}
            handleUpdate={updateTask}
          />
        }
      />

      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
