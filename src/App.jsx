import { useEffect, useMemo, useState } from 'react'
import { Toaster, toast } from 'sonner';
import './App.css'
import { FaCheck, FaPlus, FaTrash } from 'react-icons/fa';
import api from './axios/api'
function App() {
  const [todos, setTodos] = useState([])
  const [new_todo_title, set_new_todo_title] = useState('')
  const [filtered, set_filtered] = useState('all')
  console.log("nt => ", new_todo_title);

  console.log("todos =>", todos);
  // console.log("ftd =>",filtered_to_do);
  useEffect(() => {
    fetchTodo()

  }, [])
  const fetchTodo = async () => {
    try {
      const res = await api.get('/todos')
      if (res.status === 200) {
        console.log('res =>', res.data);
        setTodos(res.data)

      }
    }
    catch (error) {
      console.log("error=>", error.message);

    }
  }
  // function get_all_todos() {
  //   fetch('http://localhost:3000/todos')
  //     .then(res => res.json())
  //     .then(data => setTodos(data))

  // }
  const handle_remove_todo = (todo) => {
    api.delete(`todos/${todo.id}`
    )
      .then(res => {
        if (res.status == 200) {
          toast.success("Todo Deleted Successfully", { description: `id : ${todo.id}` })
          fetchTodo()
        }
      })
  }
  const handle_do_todo = (todo) => {
    api.patch(`todos/${todo.id}`, {
      ...todo,
      isTodo: !todo.isTodo
    })
      .then(res => {
        if (res.status === 200) {
          fetchTodo()
          if (!todo.isTodo) toast.success("task Complated")
          else toast.success("task Restored")
        }
      })


  }
  const handle_add_todo = (e) => {
    e.preventDefault();
    if (new_todo_title.trim() === "") toast.error("input is null")
    else {
      api.post('/todos', {
        title: new_todo_title,
        isTodo: false

      },).then(res => {
        if (res.status === 201) {
          set_new_todo_title('')
          fetchTodo()
        }
      })
    }
  }
  const filtered_to_do = useMemo(() => {
    return todos.filter((todo) => {
      if (filtered === 'all') return todo
      if (filtered === 'completed') return todo.isTodo === true
      if (filtered === 'in-completed') return todo.isTodo === false

    })

  }, [todos, filtered])

  return (
    <>
      <Toaster expand={false} richColors/>
      <div className="ultra-scene">
        {/* لایه‌های نوری متحرک و هوشمند */}
        <div className="blob-portal"></div>
        <div className="noise-overlay"></div>
        <div className="kinetic-container">
          <header className="vanguard-header">
            <div className="logo-box">
              <div className="logo-inner"></div>
            </div>
            <h1 className="floating-title">AXIOM</h1>
            <p className="subtitle">SYSTEM OS v2.0</p>
          </header>
          <div className="quantum-card">
            <div className="card-glass-shine"></div>
            <form className="neural-input-group" onSubmit={(e) => e.preventDefault()}>
              <div className="input-glow-wrapper">
                <input
                  type="text"
                  placeholder="فرمان جدید را وارد کنید..."
                  className='neural-input'
                  value={new_todo_title}
                  onChange={(e) => set_new_todo_title(e.target.value)}
                />
                <div className="input-border-anim"></div>
              </div>
              <button className="plasma-btn" onClick={handle_add_todo}>
                <div className="plasma-core"></div>
                <FaPlus />
              </button>
            </form>
            <div className="dynamic-nav">
              {['all', 'completed', 'in-completed'].map((type) => (
                <button
                  key={type}
                  className={`nav-pill ${filtered === type ? 'active' : ''}`}
                  onClick={() => set_filtered(type)}
                >
                  <span className="pill-text">{type === 'all' ? 'FULL' : type === 'completed' ? 'DONE' : 'PENDING'}</span>
                  {filtered === type && <div className="pill-glow"></div>}
                </button>
              ))}
            </div>
            <div className='scroll-engine'>
              <ul className='task-stream'>
                {filtered_to_do.length === 0 ? (
                  <div className="zero-state">
                    <div className="atom-spinner">
                      <div className="electron"></div>
                    </div>
                    <p>NO ACTIVE DATA</p>
                  </div>
                ) : (
                  filtered_to_do.map((todo, index) => (
                    <li
                      className={`stream-item ${todo.isTodo ? 'state-complete' : ''}`}
                      key={todo.id}
                      style={{ "--order": index }}
                    >
                      <div className="item-backdrop"></div>
                      <div className="status-indicator"></div>
                      <span className='item-label'>{todo.title}</span>
                      <div className="item-actions">
                        <button className='action-hex check' onClick={() => handle_do_todo(todo)}>
                          <FaCheck />
                        </button>
                        <button className='action-hex trash' onClick={() => handle_remove_todo(todo)}>
                          <FaTrash />
                        </button>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
