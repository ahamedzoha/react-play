import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../../API/fetch20user"

const Home = () => {
  const { data, isLoading, isSuccess, isError, error, refetch } = useQuery(
    ["users"],
    fetchUsers,
    { staleTime: 1000 * 60 * 60 }
  )

  return (
    <>
      <h1 className="text-3xl">Home</h1>

      <div className="flex flex-col">
        {isLoading && <p>Loading...</p>}
        {isSuccess &&
          data.map((person) => (
            <span key={person.value + person.last}>
              {person.first + " " + person.last}
            </span>
          ))}
      </div>
    </>
  )
}

export default Home
