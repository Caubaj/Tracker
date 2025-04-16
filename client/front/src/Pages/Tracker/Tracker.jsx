
import './Tracker.css'; 

import TrackerHeader from "./TrackerComponents/TrackerHeader";
import Progress from './TrackerComponents/Progress';
import NutrientsGoals from './TrackerComponents/NutrientsGoals';
import { userNutrientGoals, userInfo } from '../../DATA/UserData';
import { useEffect, useState } from 'react';

const Tracker = ( {id} ) => {


    const [userData, setUserData] = useState(null)

    const [userGoals, setUserGoals] = useState(null)

    useEffect( () => {
        if (!id) return; // prevent running if id is not ready!
        const fetchUserInfo = async () => {
            try {
                console.log("hey")
                const [userInfoData, nutrientGoalData ] = await Promise.all( [userInfo(id), userNutrientGoals(id)]); 
            
                const mergeData = {...userInfoData, ...nutrientGoalData}
            
                setUserData(mergeData);
                setUserGoals(nutrientGoalData)
               

            }catch (err)
            {
                console.error("Error fetching data", err)
            }
        }
        fetchUserInfo()
    }, [id] ) 
    useEffect(() => {
        if (userData) {
            console.log("userData has updated:", userData);
        }
    }, [userData]);
    return (

        <div id='tracker-container'>
              <TrackerHeader className= "username-container" username = {userData?.username} />
              <Progress className = "progress-container" calorieGoal = {userData?.goal_calories}  />
              <NutrientsGoals Protein = {userData?.goal_protein} Carbs = {userData?.goal_carbs} Fats = {userData?.goal_carbs}/>
        </div>
    );
};

export default Tracker;