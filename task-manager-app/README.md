## **React Coding Assessment: Build a Task Manager with a Simple API**  

### **Objective:**  
Build a simple **Task Manager App** that allows users to **view, add, update, and delete tasks** using a **React frontend** and a **mock API**.

---

### **Requirements:**  

#### **1. API Setup (Mock JSON Server or Express.js)**
Create a simple **REST API** with the following **endpoints**:  

| Method | Endpoint       | Description                |
|--------|--------------|----------------------------|
| GET    | `/tasks`      | Retrieve all tasks         |
| POST   | `/tasks`      | Add a new task             |
| PUT    | `/tasks/:id`  | Update a task (mark as done) |
| DELETE | `/tasks/:id`  | Delete a task              |

Each task should have the following properties:  
```json
{
  "id": 1,
  "title": "Learn React",
  "completed": false
}
```

---

#### **2. React Frontend Requirements**  
1. Fetch tasks from the API and display them in a **list**.  
2. Add a new task using an input field and a submit button.  
3. Mark a task as **completed** (toggle status).  
4. Delete a task using a **delete button**.  
5. Use **React Hooks** (`useState`, `useEffect`).  
6. Use **CSS** for basic styling.  

---

### **Bonus Requirements:**  
✅ Implement **optimistic UI updates** (update UI first, then API).  
✅ Use **React Context or Zustand** for state management.  
✅ Add **loading and error handling**.  
✅ Implement **pagination** (show 5 tasks per page).  

---

### **Expected Deliverables:**  
- A **GitHub repository** with the code.  
- A **README** with setup instructions.  
- A **deployed frontend** (on Netlify/Vercel) if possible.  

---