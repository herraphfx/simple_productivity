import React from 'react'
import {useState} from  'react';
import '../workspace/styles/task.scss'

export default function Task(props) {
    const { addTask, deleteTask, moveTask, task } = props;
  
    const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
    const [collapsed, setCollapsed] = useState(task.isCollapsed);
    const [formAction, setFormAction] = useState("");
  

    //take value from radio button
    function setUrgency(event) {
      setUrgencyLevel(event.target.attributes.urgency.value);
    }
    function handleSubmit(event) {
      event.preventDefault();
  
      if (formAction === "save") {
        if (collapsed) {
          setCollapsed(false);
        } else {
          let newTask = {
            id: task.id,
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            urgency: urgencyLevel,
            status: task.status,
            isCollapsed: true,
          };
  
          addTask(newTask);
          setCollapsed(true);
        }
      }
  
      if (formAction === "delete") {
        deleteTask(task.id);
      }
    }
  
    function handleMoveLeft() {
      let newStatus = "";
  
      if (task.status === "In Progress") {
        newStatus = "Backlog";
      } else if (task.status === "Done") {
        newStatus = "In Progress";
      }
  
      if (newStatus !== "") {
        moveTask(task.id, newStatus);
      }
    }
    function handleMoveRight() {
      let newStatus = "";
  
      if (task.status === "Backlog") {
        newStatus = "In Progress";
      } else if (task.status === "In Progress") {
        newStatus = "Done";
      }
  
      if (newStatus !== "") {
        moveTask(task.id, newStatus);
      }
    }
  
    return (
      <div className={`task_1 ${collapsed ? "collapsedTask" : ""}`}>
        <button onClick={handleMoveLeft} className="button_12 moveTask">
          &#171;
        </button>
        <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
          <input
            type="text"
            className="title_1 input_1"
            name="title"
            placeholder="Enter Title"
            disabled={collapsed}
            defaultValue={task.title}
          />
          <textarea
            rows="2"
            className="description_1 input_1"
            name="description"
            placeholder="Enter Description"
            defaultValue={task.description}
          />
          <hr/>
          <div className="urgencyLabels">
            <label id="label" className={`low ${urgencyLevel === "low" ? "selected" : ""}`}>
              <input
                urgency="low"
                onChange={setUrgency}
                type="radio"
                name="urgency"
              />
              low
            </label>
            <label
             id="label" className={`medium ${urgencyLevel === "medium" ? "selected" : ""}`}
            >
              <input
             
                urgency="medium"
                onChange={setUrgency}
                type="radio"
                name="urgency"
              />
              medium
            </label>
            <label
             id="label" className={`high ${urgencyLevel === "high" ? "selected" : ""}`}
            >
              <input
                urgency="high"
                onChange={setUrgency}
                type="radio"
                name="urgency"
              />
              high
            </label>
          </div>
          {/* save */}
          <button
            onClick={() => {
              setFormAction("save");
            }}
            className="button_1"
          >
            {collapsed ? "Edit" : "Save"}
          </button>

          {collapsed && (
            <button
              onClick={() => {
                setFormAction("delete");
              }}
              className="button_1 delete"
            >
              X
            </button>
          )}
        </form>
        <button onClick={handleMoveRight} className="button_12 moveTask">
          &#187;
        </button>
      </div>
    );
  }