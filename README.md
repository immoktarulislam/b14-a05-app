# 🛍️ React Product Card

A simple and beautiful React product card application that displays multiple products using reusable components and props.

## 🚀 Project Description

This project is built to practice the basic concepts of React, including components, props, state, event handling, `map()`, conditional rendering, and loading JSON data.

## 🛠️ Technologies Used

- ⚛️ React.js
- 🟨 JavaScript (JSX)
- 🎨 CSS
- 📦 JSON
- 🧰 Vite
- 🔧 Git & GitHub

## ✨ Features

### 1. 📦 Multiple Product Cards
Displays multiple products dynamically using reusable React components.

### 2. 🔄 Dynamic Data
Product information is loaded from JSON data and displayed using JavaScript `map()`.

### 3. 🎯 Interactive UI
Users can interact with the application through buttons and state-based UI updates.

---

# 📚 React Questions & Answers

## i. What is JSX, and why is it used in React?

JSX stands for JavaScript XML.  
It allows us to write HTML-like code inside JavaScript.

React uses JSX because it makes creating and understanding UI easier.

---

## ii. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is data that belongs to a component and can change over time.

---

## iii. What does the useState hook do, and where did you use it in this project?

`useState` allows a React component to create and manage changing data.

In this project, I used `useState` to manage the application's changing UI data, such as product-related or user interaction data.

---

## iv. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component.

I used useEffect to load the JSON product data when the component starts.

---

## v. Why does every item in a map() list need a unique key prop?

React needs a unique key to identify each item in a list.

It helps React understand which item was added, removed, or changed.

---

## vi. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

---

## vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

<ProductCard product={product} />

The child receives the data through props.

A child can send something back to the parent by calling a function that the parent passes as a prop.

<ProductCard onAdd={handleAdd} />

The child can then call:

onAdd(product);

So:

Parent → Child: Props
Child → Parent: Callback function through props

...Thank you
...Moktarul Islam
⭐ If you like this project, give it a star!