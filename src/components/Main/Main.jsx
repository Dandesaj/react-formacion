import './Main.css'

const Main = ({text,data={}}) => {
  let candles = [];
  for(let i = 0;i<data.age;i++){
    candles.push(<a> &#x1F56F; </a>)
  }

  if(data?.name){
    return (
      <div className="main">
        
        <h1>{text} {data.name}</h1>
          <p>1 candle for each year</p>
        <div className = "cake">
          {candles}
        </div>                  
      </div>
    )
  }else{
    return (  
      <div className="main">
        <h1>{text}</h1>
        <p>no data to show</p>
      </div>
    )
  } 
}
export default Main