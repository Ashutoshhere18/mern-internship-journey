
# ⚛️ React Fast-Track Roadmap (Beginner → Interview Ready)

> A complete, structured guide to mastering React fundamentals with **concepts, examples, tasks, and interview questions**.

---

# 🚀 Phase 1: Core Basics

## 🧩 1. JSX (JavaScript XML)

### 🧠 Concept

JSX allows writing HTML inside JavaScript.
It gets compiled into `React.createElement()`.

### 📌 Rules

* Must return **one parent element**
* Use `{}` for JavaScript expressions
* Use `className` instead of `class`

### 💻 Example

```jsx
const name = "John";

function App() {
  return <h1>Hello, {name}</h1>;
}
```

### 🛠️ Practice

* Show current year dynamically
* Display `2 + 2` in JSX
* Create dynamic `className`

---

### 🎯 Interview Q: Why single parent element?

👉 JSX must return **one root element** because:

* Functions return only one value
* React builds a **single virtual DOM tree**

### ✅ Solutions

```jsx
// Using div
<div>
  <h1>Hello</h1>
  <p>World</p>
</div>

// Using Fragment (Best)
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

💡 **Tip:** Fragments avoid unnecessary DOM nodes.

---

## 🧩 2. Functional Components

### 🧠 Concept

Simple JavaScript functions that return JSX.

### 💻 Example

```jsx
function Welcome() {
  return <h2>Welcome to React</h2>;
}
```

---

### 🔥 Functional vs Class Components

| Feature | Functional | Class      |
| ------- | ---------- | ---------- |
| Syntax  | Simple     | Complex    |
| State   | Hooks      | this.state |
| Usage   | ✅ Modern   | ❌ Legacy   |

👉 **Golden Line:**
**“Hooks replaced classes.”**

---

## 🧩 3. Props

### 🧠 Concept

Props are **read-only inputs** passed from parent to child.

### 💻 Example

```jsx
function User({ name }) {
  return <h3>{name}</h3>;
}

<User name="Rahul" />
```

### ❗ Important

* Props are **immutable**
* Follow **one-way data flow (Parent → Child)**

---

# ⚡ Phase 2: State & Interaction

## 🧩 4. State (`useState`)

### 🧠 Concept

State = dynamic data inside a component.

### 💻 Example

```jsx
const [count, setCount] = useState(0);
```

### 🛠️ Practice

* Increment / Decrement
* Reset button
* Toggle ON/OFF

---

## 🧩 5. Events

### 🧠 Concept

React uses **synthetic events**.

### 💻 Example

```jsx
<button onClick={() => alert("Clicked!")}>
  Click
</button>
```

### 🎯 Interview Q

👉 `onClick={fn}` vs `onClick={fn()}`

* `fn` → runs on click ✅
* `fn()` → runs immediately ❌

💡 Analogy:

* `fn` → “call later”
* `fn()` → “call now”

---

## 🧩 6. Conditional Rendering

### 🧠 Concept

Render UI based on conditions.

### 💻 Example

```jsx
{isLoggedIn ? <h1>Welcome</h1> : <h1>Login</h1>}
```

---

# ⚡ Phase 3: Lists, Forms & Effects

## 🧩 7. Lists & Keys

### 🧠 Concept

Render lists using `.map()` with unique keys.

### 💻 Example

```jsx
users.map(user => <li key={user.id}>{user.name}</li>);
```

### 🎯 Interview Q

👉 Why keys?

* Helps React identify elements
* Improves performance

---

## 🧩 8. Forms

### 🧠 Concept

Forms usually use **controlled components**.

### 🔄 Controlled vs Uncontrolled

#### Controlled

* React controls input via state
* Full control

#### Uncontrolled

* DOM controls input
* Use `ref`

👉 **Memory Trick:**

* Controlled = React driven
* Uncontrolled = DOM driven

---

## 🧩 9. useEffect

### 🧠 Concept

Handles **side effects** (API, timers, etc.)

### 💻 Example

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

### 🎯 Interview Q

👉 Missing dependency array?

* Runs on every render ⚠️

---

## 🧩 10. API Calls

### 🧠 Concept

Fetch data inside `useEffect`.

### 💻 Example

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

---

# ⚡ Phase 4: Intermediate Concepts

## 🧩 11. Lifting State Up

### 🧠 Concept

Move state to a **common parent**.

👉 Used when multiple components share data.

---

## 🧩 12. Reusable Components

### 🧠 Concept

Create reusable UI blocks.

### 💻 Example

```jsx
function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
```

---

## 🧩 13. Optimization

### 🧠 Concept

Prevent unnecessary re-renders.

### 💻 Example

```jsx
export default React.memo(MyComponent);
```

---

# 🔥 Final Project Challenge

Build a mini app with:

* Input field (form)
* Add items to list
* Delete items
* Show count
* Conditional message (empty state)
* Reusable Button component

---



