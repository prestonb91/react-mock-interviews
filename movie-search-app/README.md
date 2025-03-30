### **React Coding Assessment - Filtering, Search, API Calls, Prop Passing**  

#### **Task: Build a Movie Search & Filter App**  

#### **Requirements:**  

1. **Fetch Movie Data:**  
   - Use the provided API endpoint to fetch a list of movies.  
   - The API returns a list of movies with fields: `id`, `title`, `genre`, `releaseYear`, and `rating`.  
   - Fetch data on **component mount** and display the movie list.  

2. **Search Functionality:**  
   - Implement a search bar where users can type a movie title.  
   - The displayed list should dynamically filter movies based on the search term.  
   - Search should be **case-insensitive** and match partial titles.  

3. **Filter by Genre & Release Year:**  
   - Implement dropdown filters for **genre** and **release year**.  
   - Selecting a genre should show only movies of that genre.  
   - Selecting a release year should filter movies released in that year.  
   - Filters should work **together** (e.g., filtering by both genre and year should return matching results).  

4. **Sort by Rating:**  
   - Implement a button to **sort movies by rating** (descending order).  
   - The sorting should toggle between ascending and descending order.  

5. **Prop Passing & Componentization:**  
   - Create a **`MovieList` component** that receives the filtered/sorted list as a prop.  
   - Each movie should be rendered inside a **`MovieCard` component**, displaying its title, genre, and rating.  

6. **Error Handling & Loading State:**  
   - Display a **loading message** while fetching data.  
   - If the API request fails, show an **error message** instead of crashing.  

#### **Bonus (Optional Enhancements):**  
- Implement **debounced search** to reduce API calls while typing.  
- Add a **"Clear Filters"** button to reset search and filters.  
- Allow users to **bookmark/favorite movies** and persist the selection in `localStorage`.  

**Time Limit:** **60-90 minutes**  
**Focus Areas:** API calls, filtering logic, prop passing, functional components/hooks, minimal styling.