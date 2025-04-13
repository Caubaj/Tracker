import { Users } from "../../DATA/UserData"; 
import './Tracker.css'; 
import { FoodData } from "../../DATA/UserData"; 


const Tracker = ( {id} ) => {

    return (
        <div className="username-container" > 
            <h1 >
                {Users.map(user => (
                        user.idx === id ? <div>{ user.userName }</div> : <div>N/A</div>
                ))}
            </h1>
        </div>

        


        

    );
};

export default Tracker;