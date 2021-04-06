import { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import { login, logout, auth } from "./services/firebase";
export default function App() {
  const [state, setState] = useState({
    user: null,
    skills: [{ skill: "JavaScript", level: "4" }],
    newSkill: {
      skill: "",
      level: "3",
    },
  });
  async function getAppData() {
    const BASE_URL = "http://localhost:3001/api/skills";
    const skills = await fetch(BASE_URL).then((res) => res.json());
    setState((prevState) => ({
      ...prevState,
      skills,
    }));
  }
  useEffect(() => {
    getAppData();
    auth.onAuthStateChanged(user => {
      if(user) {
        setState(prevState => ({
          ...prevState,
          user,
        }));
      } else {
        setState(prevState => ({
          ...prevState,
          user: null
        }))
      }
    })
  }, []);
  async function addSkill(e) {
    if(!state.user) return;
    e.preventDefault();
    const BASE_URL = "http://localhost:3001/api/skills";
    const skill = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(state.newSkill),
    }).then((res) => res.json());
    // so it doesnt wipe the user 
    setState((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, prevState.newSkill],
      newSkill: {
        skill: "",
        level: "3",
      },
    }));
  }
  function handleChange(e) {
    setState((prevState) => ({
      ...prevState,
      newSkill: {
        ...prevState.newSkill,
        [e.target.name]: e.target.value,
      },
    }));
  }
  return (
    <>
      <Header user={state.user} />
      <main>
        <section>
          {state.skills.map((s) => (
            <article key={s.skill}>
              <div>{s.skill}</div> <div>{s.level}</div>
            </article>
          ))}
          {
            state.user &&
            <>
            <hr />
            </>
          }
          <form onSubmit={addSkill}>
            <label>
              <span>SKILL</span>
              <input
                name="skill"
                value={state.newSkill.skill}
                onChange={handleChange}
              />
            </label>
            <label>
              <span>LEVEL</span>
              <select
                name="level"
                value={state.newSkill.level}
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <button>ADD SKILL</button>
          </form>
        </section>
      </main>
    </>
  );
}