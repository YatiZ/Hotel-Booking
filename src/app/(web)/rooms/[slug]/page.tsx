'use client'

import { getRoom } from "@/libs/apis";
import useSWR from "swr";
import LoadingSpinner from "../../loading";
import HotelPhotoGallery from "@/components/HotelPhotoGallery/HotelPhotoGallery";

const RoomDetails = (props: {params:{slug: string}}) => {

    const {
        params: {slug},
    } = props;
  
//   async function fetchRoom(slug: string) {
//     return getRoom(slug);
//   }
 const fetchRoom = async ()=> getRoom(slug)
  const {data: room, error, isLoading} = useSWR("/api/room",fetchRoom)
  console.log(room)

  if(error) throw new Error("Cannot fetch data")
  if(typeof room === 'undefined' && !isLoading){
    throw new Error("Cannot fetch data")
  }
  if(!room) return <LoadingSpinner/>;

  return (
    <div>
        <HotelPhotoGallery photos={room.images}/>
    </div>
  )
}

export default RoomDetails