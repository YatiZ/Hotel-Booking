import { Room } from "@/models/room";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries";

export async function getFeaturedRoom() {
  const result = await sanityClient.fetch<Room>(
    queries.getFeaturedRoomQueries,
    {},
    { cache: "no-cache" }
  );

  return result;
}

export async function getRooms() {
  const result = await sanityClient.fetch(
    queries.getRoomsQuery,
    {},
    {cache : 'no-cache'}
    );
  return result;
}

export async function getRoom(slug: string) {
  const result = await sanityClient.fetch<Room>(
    queries.getRoomQuery,
    {slug},
    {cache: 'no-cache'}
  );
  return result
}