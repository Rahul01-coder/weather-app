import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
    // const img = "https://www.shutterstock.com/image-photo/landscape-heavy-foggy-road-winter-260nw-1594521517.jpg"
    const rain = "https://assamtribune.com/h-upload/2024/10/09/1659003-0910-imd-issues-rainfall-warning.webp"
    const hot = "https://hips.hearstapps.com/hmg-prod/images/summer-solstice-6853f22fa71fa.jpg?crop=1.00xw:0.752xh;0,0.168xh&resize=1200:*"
    const cold = "https://www.christmascentral.com/product_images/uploaded_images/sunny-winter-scene-lars-eberhardt-bcg-yva8tha-unsplash-960x600.jpg"

    return(
        <div className='info-box'>
            <Card sx={{ maxWidth: 345 }} className='card'>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 70 ? rain : info.temp > 15 ? hot : cold}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='Typography'>
                    {info.weather}
                    {
                            info.humidity > 70 ? <CloudySnowingIcon/> : 
                            info.temp > 15 ? <SunnyIcon/> : 
                            <AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                        <p>City : {info.city}</p>
                        <p>Temprature : {info.temp}&deg;C</p>
                        <p>Min Temprature : {info.tempMin}&deg;C</p>
                        <p>Max Temprature : {info.tempMax}&deg;C</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>The weather can be discribed as {info.weather} and feels like {info.feelsLike}&deg;C and </p>
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}