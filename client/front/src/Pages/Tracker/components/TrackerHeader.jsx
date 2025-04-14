import { Users } from "../../../DATA/UserData";

const TrackerHeader = ( {className, username} ) => {

    return (
        <header className = {className}>
            <h1 id = "Display-User-Name" style = {{ fontSize: "3rem", margin: 0, 
                      fontFamily: "var(--font-heading)", fontWeight: "var(--font-weight-bold)"}}>
                {username}
            </h1>
        </header>
    );
};

export default TrackerHeader;