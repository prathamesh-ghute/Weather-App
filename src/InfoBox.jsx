
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){

    //  const INIT_URL = "https://plus.unsplash.com/premium_photo-1661814966334-719f38911894?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1c3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL = "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=mTWF-uHN6hawvdK0rvqiWAYt5Y8E7u_i3N0XTlRRo_Q=";
    const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z-21JImEjaPh55Ek00YRctuv1VNPwKJnlSDfySyonYw=";

    return(
        <div className="InfoBox">
    <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80
            ? RAIN_URL 
            : info.temp >25 
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city }
          {
            info.humidity > 80
            ? <ThunderstormIcon />
            : info.temp >25 
            ? <WbSunnyIcon />
            : <AcUnitIcon />
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        
        <div>
             <p>Temperature = {info.temp}&deg;C</p>
             <p>Humidity = {info.humidity}</p>
             <p>Min Temp = {info.tempMin}&deg;C</p>
             <p>Max Temp = {info.tempMax}&deg;C</p>
             <p>The weather can be describe as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>

        </div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}