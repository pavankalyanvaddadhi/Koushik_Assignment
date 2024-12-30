import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Displaydata = () => {
  const [categories, setCategories] = useState([]) 

  const getPostData = async () => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
      )
      console.log('Fetched data:', response.data) 
      setCategories(response.data.categories) 
    } catch (error) {
      console.error('Error fetching data:', error) 
    }
  }

  useEffect(() => {
    getPostData() 
  }, [])
  const arrayofobjects = categories.map(copyofbackenddata => {
    return (
     
        <div className="col-4" key={copyofbackenddata.idCategory}>
             <div className="card"  style={{display:"flex", margin:"10px"}}>
          <img
            src={copyofbackenddata.strCategoryThumb}
            alt={copyofbackenddata.strCategory}
          />
          <h3>{copyofbackenddata.strCategory}</h3>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="container">
        <div className="row">{arrayofobjects}</div>
      </div>
    </>
  )
}

export default Displaydata
