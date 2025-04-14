export const Users = [{ id: 1, userName: "Cuabaj", dailyCals: 1800, dailyProtein: 160 },
                        { id: 2, userName: "Exbmx", dailyCals: 2200, dailyProtein: 210 }
] 

export const FoodData = [{id: 1, date: "4/12/2025", Protein: 18, Fats: 30, Cals: 1250}]


export const userInfo = async (userId) => {

  try {
    const response = await fetch(`http://localhost:5000/api/user/${userId}/userInfo`)
    if(!response.ok)
    {
      throw new Error("Failed to fetch Data")
    }
    const data = await response.json();
    return data;
  }catch (err){
    console.error("Error Fetching Data", err)
    throw err;
  }
} 

export const userNutrientGoals = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/${userId}/data`);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }  
      const data = await response.json();  // Convert the response to JSON
      return data;  // Return the data
    } catch (err) {
      console.error("Error fetching data:", err);  // Log any errors
      throw err;  // Re-throw the error for the caller to handle
    }
  };
