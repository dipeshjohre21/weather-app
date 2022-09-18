const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');


const getInfo = async(event) =>{
	event.preventDefault();
	let cityVal = cityName.value;
	if(cityVal == ""){
		city_name.innerText = `plz write the name before search`;
	}else{
		try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=da3c50e490cc3b4beeab428446979412`;
            const fetch_response = await fetch(url);
            const json = await fetch_response.json();
           
            const arrData = [json];

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;
            
            
            const tempMood=arrData[0].weather[0].main;
            //condition to show pic of clouds
            if(tempMood=="clear"){
                 temp_status.innerHTML = 
                 "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if(tempMood=="clouds"){
            	temp_status.innerHTML =
            	"<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempMood=="Rain"){
            	temp_status.innerHTML =
            	"<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else{
            	temp_status.innerHTML =
            	"<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
		}catch{
			city_name.innerText = `plz enter the city name properly`;

		}
	}
	

}

submitBtn.addEventListener('click', getInfo);
 