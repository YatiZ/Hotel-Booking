'use client'

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import { getRooms } from '@/libs/apis';
import { Room } from '@/models/room';
import Search from '@/components/Search/Search';
import RoomCard from '@/components/RoomCard/RoomCard';

const Rooms = () => {
    const [RoomTypeFilter, setRoomTypeFilter] = useState('')
    const [searchQuery, setSearchQuery] = useState('');
    const searchParams = useSearchParams();

    useEffect(()=> {
        const searchQuery = searchParams.get('searchQuery');
        const roomType = searchParams.get('roomType');
        console.log(roomType)
        if(roomType) setRoomTypeFilter(roomType);
        if(searchQuery) setSearchQuery(searchQuery);
    },[searchParams])

    async function fetchData(){
       return getRooms()
    }

    const {data,error, isLoading} = useSWR("get/hotelRooms",fetchData);

    if(error) throw new Error("Cannot fetch data")
    if(typeof data === 'undefined' && !isLoading){
        throw new Error('Cannot fetch data')
    }
    const filterRooms = (rooms:Room[])=>{
        return rooms.filter(room =>{
            if(RoomTypeFilter && RoomTypeFilter.toLowerCase() !== 'all' && room.type.toLowerCase() !== RoomTypeFilter.toLowerCase()){
                return false;
            }


            // apply search query filter
            if(searchQuery && !room.name.toLowerCase().includes(searchQuery.toLowerCase())){
                return false;
            }

            return true;
        });
    };

    const filteredRoom = filterRooms(data || [])
    console.log(filteredRoom)
  return (
    <div className='container mx-auto pt-10'>
        <Search roomTypeFilter={RoomTypeFilter} searchQuery={searchQuery} setRoomTypeFilter={setRoomTypeFilter} setSearchQuery={setSearchQuery}/>
        <div className='flex mt-20 gap-4 flex-wrap'>
            {filteredRoom.map(room => <>
             <RoomCard key={room._id} room={room}/>
            </>)}
        </div>
    </div>
  )
}

export default Rooms;