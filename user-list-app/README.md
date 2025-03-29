### **React Coding Assessment**  

#### **Objective:**  
Build a simple **User List App** that fetches and displays user data from an API, with search and pagination functionality.  

#### **Requirements:**  

1. Fetch data from the following API:  
   ```plaintext
   https://jsonplaceholder.typicode.com/users
   ```
2. Display each user's:
   - **Name**
   - **Email**
   - **Phone**
   - **Website**  
3. Implement a **search bar** to filter users by name (case-insensitive).  
4. Implement **pagination**:
   - Display **5 users per page**.
   - Include **"Previous"** and **"Next"** buttons to navigate pages.  
5. Use **React functional components** and **React Hooks (`useState`, `useEffect`)**.  
6. Style the app using **CSS** (plain CSS or a framework like Tailwind/Bootstrap).  

#### **Bonus Points:**  
- Show a **"Loading..."** state while fetching data.  
- Display an **error message** if the API request fails.  
- Use **React.memo or useCallback** to optimize performance.  