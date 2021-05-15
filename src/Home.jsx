import React from 'react';

const Home = () => {
  const [score,setScore] = React.useState(999);
  const scoreStorage = localStorage.getItem('score');
  console.log(scoreStorage);
  React.useEffect(()=>{
    if(scoreStorage){
      // alert(1);
      setScore(scoreStorage);
  
    }else{
      // alert(2);
      setScore(5);
      localStorage.setItem('score', 5);
    }
  },[]);
  if(score === 0){
    alert('Congratulations');
    setScore(5);

  }
  return (
    <div className="mainpage">
        <div>
          <p className="dashboardFirstLine">
            Please choose an option from the sidebar.
          </p>
          <p className="dashboardFirstLine">Games left to win: {score}</p>
          <button onClick={()=>{setScore(5);localStorage.setItem('score', 5);
          }}>Reset</button>
          <button onClick={()=>{setScore(x=>x-1);localStorage.setItem('score', scoreStorage-1);}}>-score</button>
        </div>
    </div>
  );
};
export default Home;
