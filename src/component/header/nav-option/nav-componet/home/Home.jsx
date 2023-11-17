import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import EachElement from './eachElement/EachElement'
import './home.css'
import Filter from './filter/Filter'
import { dataprovider } from '../../../../../provider/Provider'


export const Home = () => {
  const data = useSelector((state) => state.data.data);

  const { filter } = useContext(dataprovider)

  const FilterData = (filter) => {

    const sortData = data;

    switch (filter.type) {
      case 'instock':
        return sortData.filter(el => el.instock > 0)
      case 'outofstock':
        return sortData.filter(el => el.instock === 0)
      case 'assending':
        return sortData.sort((a, b) => filter.check === 'LowToHigh' ? a.price - b.price : b.price - a.price)
      case 'filterrating':
        return sortData.filter((el) => el.rating === filter.paylod) 
      case 'clearfilter':
        return data;

      default:
        return data;
    }
  }


  return (

    <>
      <div className="  main-container">
        <Filter />
        <div className="row-cols-4 row card-container">
          {FilterData(filter).map((el) => {
            return (
              <div key={el.userId} className=' gap' style={{ width: '18rem' }}>
                <EachElement prod={el} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

