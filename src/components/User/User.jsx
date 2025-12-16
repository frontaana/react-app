import { useState } from "react";
import "./User.css";

function User() {
  const [person, setPerson] = useState({
    name: "Anna",
    surname: "Andreeva",
    age: 35,
    sex: "female",
    interests: ["плавание", "фридайвинг"],
  });

  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: 0,
    sex: "male",
    interests: [],
  });

  const [isError, setError] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleBtnClick(key) {
    let value = form[key];

    if (!value) {
      setError(true);

      return;
    }

    setError(false);

    if (Array.isArray(person[key])) {
      value = [...person[key], form[key]];
    }

    setPerson({
      ...person,
      [key]: value,
    });
  }

  return (
    <div>
      {isError ? <p>Ошибка в форме</p> : ""}
      <div className="field">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />

        <button onClick={() => handleBtnClick("name")}>Задать имя</button>
      </div>

      <div className="field">
        <input
          type="text"
          name="surname"
          value={form.surname}
          onChange={handleInputChange}
        />

        <button onClick={() => handleBtnClick("surname")}>
          Задать фамилию
        </button>
      </div>

      <div className="field">
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleInputChange}
        />

        <button onClick={() => handleBtnClick("age")}>Задать возраст</button>
      </div>

      <div className="field">
        Пол:
        <label>
          <input
            type="radio"
            name="sex"
            value="male"
            checked={form.sex === "male"}
            onChange={handleInputChange}
          />
          мужской
        </label>
        <label>
          <input
            type="radio"
            name="sex"
            value="female"
            checked={form.sex === "female"}
            onChange={handleInputChange}
          />
          женский
        </label>
        <button onClick={() => handleBtnClick("sex")}>Задать пол</button>
      </div>

      <div className="field">
        <input
          type="text"
          name="interests"
          value={form.interest}
          onChange={handleInputChange}
        />

        <button onClick={() => handleBtnClick("interests")}>
          Добавить интересы
        </button>
      </div>

      <ol>
        <li>Имя: {person.name}</li>
        <li>Фамилия: {person.surname}</li>
        <li>Возраст: {person.age}</li>
        <li>Пол: {person.sex === "male" ? "мужской" : "женский"}</li>
        <li>Интересы:</li>
        <ul>
          {person.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </ol>
      <p></p>
    </div>
  );
}

export default User;
