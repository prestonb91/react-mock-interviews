### Backend Take-Home Coding Challenge  

#### **Challenge: Task Management API**  
You are tasked with building a backend API for a simple task management system. Users should be able to create an account, log in, and manage tasks. The API should support role-based access control (RBAC) with two roles:  
- **Admin**: Can manage all users and tasks.  
- **User**: Can only manage their own tasks.  

---

### **Requirements**  

#### **1. Authentication & Authorization**  
- Implement **JWT-based authentication** (email/password login).  
- Users should be able to register and log in.  
- Admins can promote users to admin roles.  
- Protect API routes based on user roles.  

#### **2. CRUD for Tasks**  
- Users can create, read, update, and delete their own tasks.  
- Admins can manage (CRUD) any task.  
- A task has the following fields:  
  - `id` (UUID)  
  - `title` (string, required)  
  - `description` (string, optional)  
  - `status` (enum: `"todo" | "in_progress" | "done"`, default: `"todo"`)  
  - `createdAt` (timestamp)  
  - `updatedAt` (timestamp)  
  - `userId` (reference to the user who created the task)  

#### **3. Unit & Integration Tests**  
- Use **Mocha/Chai** to write tests for:  
  - User authentication and role assignment.  
  - Task CRUD operations (ensuring role-based permissions).  

#### **4. Tech Stack**  
- **Backend**: Node.js with Express  
- **Database**: PostgreSQL (use Prisma ORM or Sequelize)  
- **Auth**: JWT  
- **Testing**: Mocha/Chai  

---

### **Submission Requirements**  
1. **GitHub Repository** with a README containing:  
   - Setup instructions  
   - API documentation (routes & expected responses)  
   - Example `.env` file  
2. **Code Quality**:  
   - Proper error handling  
   - Use TypeScript for type safety  
   - Organize code into controllers, services, and models  
   - Write clean and maintainable code  