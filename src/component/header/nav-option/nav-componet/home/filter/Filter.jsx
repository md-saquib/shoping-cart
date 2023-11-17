import React, { useContext, useState } from 'react'
import './filter.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { assending, clearfilter, dessending, filterrating, instock, outofstock } from '../../../../../../redux/ActionCreater/filterAction/FilterAction';
import { dataprovider } from '../../../../../../provider/Provider';

const Filter = () => {
    const [rating, setrating] = useState(3);

    const ratingFilter = (rating) => {
        setrating(rating)
        setFilter(filterrating(rating))
    }

    const { setFilter } = useContext(dataprovider);

    return (
        <>

                <div className="filter-body" >
                    <div>
                        <input type="radio" name="radio" id="InStock" onChange={() => setFilter(instock())} />
                        <label htmlFor="InStock">InStock</label>
                    </div>
                    <div>
                        <input type="radio" name="radio" id="Out-of-stock" onChange={() => setFilter(outofstock())} />
                        <label htmlFor="Out-of-stock">Out-of-stock</label>
                    </div>
                    <div>
                        <input type="radio" name="radio" id="Low-To-high" onChange={() => setFilter(assending())} />
                        <label htmlFor="Low-To-high">Low-To-high</label>
                    </div>
                    <div>
                        <input type="radio" name="radio" id="dessending-order" onChange={() => setFilter(dessending())} />
                        <label htmlFor="dessending-order">Hight-To-Low</label>
                    </div>
                    <div>
                        {[...Array(5)].map((el, i) => {
                            return <span onClick={() => ratingFilter(i + 1)} key={i}>{rating > i ? <AiFillStar /> : <AiOutlineStar />}</span>
                        })}
                    </div>
                    <div>
                        <button className='btn btn-light' onClick={() => setFilter(clearfilter())}>Clear Filter</button>
                    </div>

                </div>
        </>
    )
}

export default Filter