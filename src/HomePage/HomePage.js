import { useState , useEffect } from 'react';
import './HomePage.css'
import UserCard from '../UserCard/UserCard'

const HomePage = ()=>{
    const [data,setData] = useState(null);
    useEffect(() =>{
        fetch('https://randomuser.me/api/?results=9')
        .then(res =>  res.json()
        )
        .then(res =>{
          setData(res.results)
        })
      },[]);
   
        return(
            data && data.map(user => (
                <UserCard
                photo={user.picture.large}
                key={user.login.md5}
                name={user.name.first}
                secondname={user.name.last}
                gender={user.gender}
                id={user.login.uuid}
                user={user}
                />
               )
              )
        )
        
}

export default HomePage;