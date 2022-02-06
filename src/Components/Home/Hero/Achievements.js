import Counter from "./Counter";

const Achievements = () => {
    const achievements = [
        {
            id:0,
            count: "30000",
            text: "Trusted Users"
        },
        {
            id:1,
            count: "10000",
            text: "Verified Properties PAN India"
        },
        {
            id:2,
            count: "18",
            text: "Total Brokerage Saved"
        },
    ]
    return ( 
        <div className="achievements">
            {
                achievements.map((achievement,index)=>(
                  <Counter text={achievement.text} key={index} id={index} count={achievement.count}/>
                ))
            }
        </div>
     );
}
 
export default Achievements;