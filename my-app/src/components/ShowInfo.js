import { useParams } from 'react-router-dom'
import useSingleShow from '../hooks/useSingleShow';
import { useEffect } from 'react';
import SingleShowBanner from './SingleShowBanner';
import ShowDetails from './ShowDetails';
import ShowCast from './ShowCast';
import ShimmerSingleShow from './ShimmerSingleShow';
import { addSingleShow } from '../utils/showsSlice';
import { useDispatch } from 'react-redux';

const ShowInfo = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => 
    window.scrollTo(0, 0)
, []);

  const singleShowData = useSingleShow(id);
  if(singleShowData !== null)
    dispatch(addSingleShow(singleShowData));
  

  return singleShowData === null ? (
    <ShimmerSingleShow />
  ) : (
    <div className='bg-[#141414]'>
      {singleShowData && <SingleShowBanner showData={singleShowData} />}
      <div className='max-w-full md:w-[80vw] md:max-w-[956px] mx-auto sm:px-4'>
        {singleShowData && <ShowDetails />}
      </div>
      <div className='max-w-full md:w-[80vw] md:max-w-[956px] mx-auto sm:px-4'>
        <ShowCast />
      </div>
    </div>
  )
}

export default ShowInfo;