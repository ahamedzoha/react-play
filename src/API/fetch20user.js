import axios from "axios"
import { flattenObject } from "../Utils/flattenObject"

export const fetchUsers = async () => {
  let peopleData = []

  console.log("Fetching Users")
  const response = await axios.get("https://randomuser.me/api/?results=20")
  const users = response.data

  for (let people of users.results) {
    const flattened = flattenObject(people)
    peopleData.push(flattened)
  }

  console.log(`Fetch Completed - Users: ${users.results}`)
  console.log(peopleData)

  return peopleData
}
