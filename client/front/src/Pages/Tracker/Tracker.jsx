
import './Tracker.css'; 
import TrackerHeader from "./components/TrackerHeader";
import Progress from './components/Progress';
import { userNutrientGoals, userInfo } from '../../DATA/UserData';
import { useEffect, useState } from 'react';

const Tracker = ( {id} ) => {


    const [userData, setUserData] = useState(null)

    useEffect( () => {
        if (!id) return; // prevent running if id is not ready!
        const fetchUserInfo = async () => {
            try {
                console.log("hey")
                const [userInfoData, nutrientGoalData ] = await Promise.all( [userInfo(id), userNutrientGoals(id)]); 
            
                const mergeData = {...userInfoData, ...nutrientGoalData}
            
                setUserData(mergeData);
                console.log(userData)

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
              <Progress className = "progress-container" calorieGoal = {userData?.goal_calories}  proteinGoal = {userData?.goal_protein} />
        </div>
    );
};


export default Tracker;