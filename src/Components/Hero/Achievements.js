const Achievements = () => {
    const achievements = [
        {
            id:0,
            count: "25000+",
            text: "Trusted Users"
        },
        {
            id:1,
            count: "4000+",
            text: "Verified Properties PAN India"
        },
        {
            id:2,
            count: "17.5+ Lakhs",
            text: "Total Brokerage Saved"
        },
    ]
    return ( 
        <div className="achievements">
            {
                achievements.map((achievement)=>(
                   <div className="achievement" key={achievement.id}>
                        <p>{achievement.count}</p>
                        <p>{achievement.text}</p>
                   </div>
                ))
            }
        </div>
     );
}
 
export default Achievements;