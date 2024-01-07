import { useQuery } from "@tanstack/react-query"
import { getAllUsers, getUserProfile } from "../services/userService"
import { Icons } from "./icons"

type Props = {}

const RecentConnections = ({}: Props) => {
  const {data, isPending, error} = useQuery({
    queryKey: ['allUsers'],
    queryFn: getAllUsers
  })

 const getUser = async (id: string) => {
  try {
    let res = await getUserProfile(id)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
 }

  const UserIcon = Icons['user']
  if(!isPending && !error) {
  return (
    <div className="p-5 rounded-xl bg-white">
      <h6 className="mb-3">Recent Connections</h6>
      <div className="flex flex-wrap items-center gap-5">
      {data.data?.length > 0 ?
      data?.data?.map((d:any) => (
        <div onClick={() => getUser(d.id)} key={d.id} className="flex flex-col items-center w-16">
          <UserIcon className="bg-gray-100 p-2 rounded-full text-rose-200" size={40} />
          <p className="text-gray-500 text-sm">
            {d.first_name}
          </p>
        </div>
      ))
      : null}
      </div>
    </div>
  )}
  return null
}

export default RecentConnections