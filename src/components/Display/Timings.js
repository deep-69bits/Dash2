import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import ReactSimplyCarousel from 'react-simply-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios';
import { app } from '../../firebase';
import { Auth, getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { Audio, FidgetSpinner, Watch } from 'react-loader-spinner'
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Timings = () => {
  const [searchparams, setSearchParms] = useSearchParams();
  const [email, setEmail] = useState(searchparams.get("email"))
  const [region,setRegion]=useState(searchparams.get("region"))
  const [dataa, setdataa] = useState([])
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [imsak,setimsak]=useState('')
  const [subuh,setsubuh]=useState('')
  const [syuruk,setsyuruk]=useState('')
  const [zohor,setzohor]=useState('')
  const [asar,setasar]=useState('')
  const [maghrib,setmaghrib]=useState('')
  const [isyak,setisyak]=useState('')
  const [bigdata,setBigdata]=useState(null)
  const [loading, setLoading] = useState(true);

  const db =  getFirestore(app);
  const auth =  getAuth(app);
  const user =  auth.currentUser;
 
  
  useEffect(() => {

    axios.get("https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json")
      .then(function (response) {
        if(region==="gombak"){
          setimsak(response.data.data.negeri[10].zon[0].waktu_solat[0].time)
          setsubuh(response.data.data.negeri[10].zon[0].waktu_solat[1].time)
          setsyuruk(response.data.data.negeri[10].zon[0].waktu_solat[2].time)
          setzohor(response.data.data.negeri[10].zon[0].waktu_solat[3].time)
          setasar(response.data.data.negeri[10].zon[0].waktu_solat[4].time)
          setmaghrib(response.data.data.negeri[10].zon[0].waktu_solat[5].time)
          setisyak(response.data.data.negeri[10].zon[0].waktu_solat[6].time)
        }
        if(region==="petaling"){
          setimsak(response.data.data.negeri[10].zon[1].waktu_solat[0].time)
          setsubuh(response.data.data.negeri[10].zon[1].waktu_solat[1].time)
          setsyuruk(response.data.data.negeri[10].zon[1].waktu_solat[2].time)
          setzohor(response.data.data.negeri[10].zon[1].waktu_solat[3].time)
          setasar(response.data.data.negeri[10].zon[1].waktu_solat[4].time)
          setmaghrib(response.data.data.negeri[10].zon[1].waktu_solat[5].time)
          setisyak(response.data.data.negeri[10].zon[1].waktu_solat[6].time)
        }
        if(region==="sepang"){
          setimsak(response.data.data.negeri[10].zon[2].waktu_solat[0].time)
          setsubuh(response.data.data.negeri[10].zon[2].waktu_solat[1].time)
          setsyuruk(response.data.data.negeri[10].zon[2].waktu_solat[2].time)
          setzohor(response.data.data.negeri[10].zon[2].waktu_solat[3].time)
          setasar(response.data.data.negeri[10].zon[2].waktu_solat[4].time)
          setmaghrib(response.data.data.negeri[10].zon[2].waktu_solat[5].time)
          setisyak(response.data.data.negeri[10].zon[2].waktu_solat[6].time)
        }
        if(region==="hulu langat"){
          setimsak(response.data.data.negeri[10].zon[3].waktu_solat[0].time)
          setsubuh(response.data.data.negeri[10].zon[3].waktu_solat[1].time)
          setsyuruk(response.data.data.negeri[10].zon[3].waktu_solat[2].time)
          setzohor(response.data.data.negeri[10].zon[3].waktu_solat[3].time)
          setasar(response.data.data.negeri[10].zon[3].waktu_solat[4].time)
          setmaghrib(response.data.data.negeri[10].zon[3].waktu_solat[5].time)
          setisyak(response.data.data.negeri[10].zon[3].waktu_solat[6].time)
        }
        if(region==="hulu selangor"){
          setimsak(response.data.data.negeri[10].zon[4].waktu_solat[0].time)
          setsubuh(response.data.data.negeri[10].zon[4].waktu_solat[1].time)
          setsyuruk(response.data.data.negeri[10].zon[4].waktu_solat[2].time)
          setzohor(response.data.data.negeri[10].zon[4].waktu_solat[3].time)
          setasar(response.data.data.negeri[10].zon[4].waktu_solat[4].time)
          setmaghrib(response.data.data.negeri[10].zon[4].waktu_solat[5].time)
          setisyak(response.data.data.negeri[10].zon[4].waktu_solat[6].time)
        }
        if(region==="s. alam"){
          setimsak(response.data.data.negeri[10].zon[5].waktu_solat[0].time)
          setsubuh(response.data.data.negeri[10].zon[5].waktu_solat[1].time)
          setsyuruk(response.data.data.negeri[10].zon[5].waktu_solat[2].time)
          setzohor(response.data.data.negeri[10].zon[5].waktu_solat[3].time)
          setasar(response.data.data.negeri[10].zon[5].waktu_solat[4].time)
          setmaghrib(response.data.data.negeri[10].zon[5].waktu_solat[5].time)
          setisyak(response.data.data.negeri[10].zon[5].waktu_solat[6].time)
        }
        if(region==="kuala selangor"){
          setimsak(response.data.data.negeri[10].zon[6].waktu_solat[0].time)
          setsubuh(response.data.data.negeri[10].zon[6].waktu_solat[1].time)
          setsyuruk(response.data.data.negeri[10].zon[6].waktu_solat[2].time)
          setzohor(response.data.data.negeri[10].zon[6].waktu_solat[3].time)
          setasar(response.data.data.negeri[10].zon[6].waktu_solat[4].time)
          setmaghrib(response.data.data.negeri[10].zon[6].waktu_solat[5].time)
          setisyak(response.data.data.negeri[10].zon[6].waktu_solat[6].time)
        }
        if(region==="sabak bernam"){
          setimsak(response.data.data.negeri[10].zon[7].waktu_solat[0].time)
          setsubuh(response.data.data.negeri[10].zon[7].waktu_solat[1].time)
          setsyuruk(response.data.data.negeri[10].zon[7].waktu_solat[2].time)
          setzohor(response.data.data.negeri[10].zon[7].waktu_solat[3].time)
          setasar(response.data.data.negeri[10].zon[7].waktu_solat[4].time)
          setmaghrib(response.data.data.negeri[10].zon[7].waktu_solat[5].time)
          setisyak(response.data.data.negeri[10].zon[7].waktu_solat[6].time)
        }
        if(region==="klang"){
          setimsak(response.data.data.negeri[10].zon[8].waktu_solat[0].time)
          setsubuh(response.data.data.negeri[10].zon[8].waktu_solat[1].time)
          setsyuruk(response.data.data.negeri[10].zon[8].waktu_solat[2].time)
          setzohor(response.data.data.negeri[10].zon[8].waktu_solat[3].time)
          setasar(response.data.data.negeri[10].zon[8].waktu_solat[4].time)
          setmaghrib(response.data.data.negeri[10].zon[8].waktu_solat[5].time)
          setisyak(response.data.data.negeri[10].zon[8].waktu_solat[6].time)
        }
        if(region==="kuala langat"){
          setimsak(response.data.data.negeri[10].zon[9].waktu_solat[0].time)
          setsubuh(response.data.data.negeri[10].zon[9].waktu_solat[1].time)
          setsyuruk(response.data.data.negeri[10].zon[9].waktu_solat[2].time)
          setzohor(response.data.data.negeri[10].zon[9].waktu_solat[3].time)
          setasar(response.data.data.negeri[10].zon[9].waktu_solat[4].time)
          setmaghrib(response.data.data.negeri[10].zon[9].waktu_solat[5].time)
          setisyak(response.data.data.negeri[10].zon[9].waktu_solat[6].time)
        }
        
        setLoading(false)
      })
      .catch(function (error) { console.log(error); })
      .finally(function () { });

    const getevents = async () => {
   
      const eventss = collection(db, email);
      const data = await getDocs(eventss);
    
         data.forEach((doc) => {
           console.log(doc)
          setdataa(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        
        });
      console.log(data)
      setBigdata(data)
      
      console.log(bigdata)
    };

    getevents();
    var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
    }
   
  }, [])
  

  const [date, setDate] = useState(new Date());

  
  // function refreshClock() {
  //   setDate(new Date());
  // }
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const Month=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const isalmicmonth=[
    "Muharram",
    "Safar",
    "Rabi al-Awwal",
    "Rabi al-Thani",
    "Jumada al-Awwal",
    "Jumada al-Thani",
    "Rajab",
    "Shaban",
    "Ramadan",
    "Shawwal",
    "Dhu al-Qadah",
    "Dhu al-Hijjah"
  ]
  
 

  
  // if(  (hournow===a && (minnow>=b && minnow<=b+20 )) || 
  //      (hournow===c && (minnow>=d && minnow<=d+20 )) || 
  //      (hournow===e && (minnow>=f && minnow<=f+20 )) || 
  //      (hournow===g && (minnow>=h && minnow<=h+20 )) || 
  //      (hournow===i && (minnow>=j && minnow<=j+20 )) 
  //  ){
  //   return(
  //     <div className='min-h-screen bg-[#02062a] w-full text-[#E1C49A]'>
  //     <img  className='m-auto' src="./LogoDashMasjid.png" alt="" />
  //          <h1 className=' text-5xl font-semibold m text-center py-[2%]'>Prayer Going On
  //         <br /> <br />
  //          <span className='my-2 block'>
  //          Please ensure your 
  //          mobile phone is silent
  //          </span>
  //          <br />
           
  //          in the prayer hall</h1>
  //     </div>
  //   )
  // }
  var now = new Date()
  var dayOfYear = Math.floor((new Date() - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))-2
  var hijriDate = ((now.getFullYear()-621.5643)*365.24225 + dayOfYear) / 354.36707
  var hijriYear = Math.floor(hijriDate)
  var hijriMonth = Math.ceil((hijriDate - Math.floor(hijriDate)) * 354.36707 / 29.530589)
  var hijriDay = Math.floor((hijriDate - Math.floor(hijriDate)) * 354.36707 % 29.530589)
  return (
    <div className=' min-h-screen bg-gradient-to-r from-[#02062a] to-[#343857] text-[#E1C49A] w-full'>
    <Swiper
    spaceBetween={30}
    
    slidesPerView={1}
    autoplay={{
      delay: 5000,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    loop={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    
       <SwiperSlide >
          
       <div className=' max-h-screen text-center grid grid-cols-2'>
       <div>
       
       <h1 className=" block float-right text-left absolute m-8 mx-20  ">
       <span className="text-7xl font-bold">{date.toLocaleTimeString()}</span>
       <br />
       <span className='text-2xl  text-left font-semibold my-2 block'>
         {weekday[date.getDay()]} <br />
         <span className=''>
         {date.getDate()}  {Month[date.getMonth()]}  {date.getUTCFullYear()}
         </span>
       </span>
      
       <span className='text-2xl  text-left font-semibold my-2 block'>
        
         <span className=''>
         {hijriDay}  {isalmicmonth[hijriMonth-1]}   {hijriYear}
         </span>
       </span>
       </h1>
        <img className='mx-auto mt-[270px]' width={550}
              height={550} src="./LogoDashMasjid.png" alt="" />


       </div>

      
       <div className='mx-20'>
       
       <div className=' mt-52 text-4xl font-semibold mr-20  text-[#E1C49A]'>
       <h1 className='flex justify-between my-10'><span className='text-5xl font-bold'>Imsak</span> <span className='text-5xl font-bold'>{imsak}</span></h1>
       <h1 className='flex justify-between my-10'><span className='text-5xl font-bold'>Subuh</span> <span className='text-5xl font-bold'>{subuh}</span></h1>
       <h1 className='flex justify-between my-10'><span className='text-5xl font-bold'>Syuruk</span> <span className='text-5xl font-bold'>{syuruk}</span></h1>
       <h1 className='flex justify-between my-10'><span className='text-5xl font-bold'>Zohor</span> <span className='text-5xl font-bold'>{zohor}</span></h1>
       <h1 className='flex justify-between my-10'><span className='text-5xl font-bold'>Asar</span> <span className='text-5xl font-bold'>{asar}</span></h1>
       <h1 className='flex justify-between my-10'><span className='text-5xl font-bold'>Maghrib</span> <span className='text-5xl font-bold'>{maghrib}</span></h1>
       <h1 className='flex justify-between my-10'><span className='text-5xl font-bold'>Isyak</span> <span className='text-5xl font-bold'>{isyak}</span></h1>
       </div>
       </div>
     
      </div>
       </SwiperSlide>
        {
          dataa.map((item, index) => {
            if (item.type === "event") {
              return (
                <SwiperSlide key={index} className=' max-h-screen text-center'>
                <h1 className=" block float-right text-left absolute m-8 mx-20  ">
                <span className="text-7xl font-bold">{date.toLocaleTimeString()}</span>
                <br />
                <span className='text-2xl  text-left font-semibold my-2 block'>
                  {weekday[date.getDay()]} <br />
                  <span className=''>
                  {date.getDate()}  {Month[date.getMonth()]}  {date.getUTCFullYear()}
                  </span>
                </span>
               
                <span className='text-2xl  text-left font-semibold my-2 block'>
                 
                  <span className=''>
                  {hijriDay}  {isalmicmonth[hijriMonth-1]}   {hijriYear}
                  </span>
                </span>
                </h1>
                  <h1 className='text-4xl py-20 font-semibold'>{item.NameOfEvent}</h1>
                  <img className='m-auto  max-w-2/3  max-h-[400px]  rounded-xl' src={item.image} alt="" />
                  <h1 className='text-4xl  px-20 font-semibold'>{item.DateOfEvent}</h1>
                  <h1 className='text-4xl  px-20 font-semibold'>{item.DescriptionOfEvent}</h1>
                </SwiperSlide>
              )
            }
          })
        }
       

        {
          dataa.map((item, index) => {
            if (item.type === "hadid") {
              return (
                <SwiperSlide key={index} className='max-h-screen   text-center   text-xl '>
                <h1 className=" block float-right text-left absolute m-8 mx-20  ">
                <span className="text-7xl font-bold">{date.toLocaleTimeString()}</span>
                <br />
                <span className='text-2xl  text-left font-semibold my-2 block'>
                  {weekday[date.getDay()]} <br />
                  <span className=''>
                  {date.getDate()}  {Month[date.getMonth()]}  {date.getUTCFullYear()}
                  </span>
                </span>
               
                <span className='text-2xl  text-left font-semibold my-2 block'>
                 
                  <span className=''>
                  {hijriDay}  {isalmicmonth[hijriMonth-1]}   {hijriYear}
                  </span>
                </span>
                </h1>
                  <h1 className='text-4xl py-20 font-semibold '>Hadid of the day</h1>
                  {
                    item.image?
                    <img  className='m-auto max-w-2/3 mt-5 rounded-xl h-[400px]' src={item.image} alt="" />
                    :
                    ""
                  }
                  {
                    item.image?
                    <h2 className='py-5 text-4xl   px-40 text-center  font-semibold'>
                    {item.hadid}
                    </h2>:
                    <h2 className=' text-4xl py-40  px-40 text-center  font-semibold'>
                    {item.hadid}
                    </h2>

                  }
                </SwiperSlide>
              )
            }
          })
        }
        <SwiperSlide className='max-h-screen'>
        <h1 className=" block float-right text-left absolute m-8 mx-20  ">
        <span className="text-7xl font-bold">{date.toLocaleTimeString()}</span>
        <br />
        <span className='text-2xl  text-left font-semibold my-2 block'>
          {weekday[date.getDay()]} <br />
          <span className=''>
          {date.getDate()}  {Month[date.getMonth()]}  {date.getUTCFullYear()}
          </span>
        </span>
       
        <span className='text-2xl  text-left font-semibold my-2 block'>
         
          <span className=''>
          {hijriDay}  {isalmicmonth[hijriMonth-1]}   {hijriYear}
          </span>
        </span>
        </h1>
        <div className='  text-center text-xl px-40 '>
       
          <h1 className='text-4xl py-20 font-semibold'>Member of the day</h1>
          <div className='grid grid-flow-row grid-cols-2 gap-x-20 gap-y-10' >
            {
              dataa.map((item, index) => {
                if (item.type === "member") {
                  return (
                    <div key={index} className='bg-white transition-all my-5 duration-500 hover:scale-105 rounded-lg text-black '>
                      <h1 className='text-2xl text-black font-bold my-2'>{item.name}</h1>
                      <h3 className='text-2xl text-black font-semibold my-2'>{item.position}</h3>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Timings