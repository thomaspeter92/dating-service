import { useQuery } from "@tanstack/react-query"
import { getUserProfile, updateProfile } from "../../services/userService"
import { useUserStore } from "../../stores/userStore"
import { Icons } from "../../components/icons"
import { useState } from "react"

type Props = {}

const Profile = ({}: Props) => {
  const [user] = useUserStore((state) => [state.user])
  const {data, isPending, error} = useQuery({
    queryKey: ['profile'],
    queryFn: () => getUserProfile(user.id)
  })
  const [image, setImage] = useState(null);
  const [showAdditional, setShowAdditional] = useState<boolean>(false)


  const LocationIcon = Icons['location']


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // 1 - upload image through supbase client
    // 2 - get the id of the image
    // 3 - save the image link to the db
    console.log(image)
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);
    formData.append('id', user.id)

    const response = await updateProfile(formData);
    console.log(response)
};

  if(data && !isPending){
    return (
    <section className="space-y-5">
      <div className="bg-white rounded-xl flex">
        <img src={data.data.picture} alt="" />
        <div className="p-5 space-y-1">
          <h4>{data.data.first_name}, {data.data.age}</h4>
          <div className="flex gap-2 items-center text-gray-400 ">
            <LocationIcon size={15} />
            <p>Oakland, California</p>
          </div>
          <p className="text-sm">{data.data.bio}</p>
          <div className="flex gap-5 pt-5">
            <div className="flex-1">
              <p className="font-bold">Likes</p>
            </div>
            <div className="flex-1">
              <p className="font-bold">Dislikes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 mb-5 ">
        <h5>
          About Me
        </h5>
        <div className="flex flex-wrap items-center space-y-1">
          {/* GENDER */}
        <div className="w-1/2 flex items-center">
            <p className=" text-gray-500 text-sm w-24">
              Gender 
            </p>
            <p className="font-semibold">
              {data.data.sex === "m" ? 'Male' : "Female"}
            </p>
        </div>
          {/* SMOKES */}
        <div className="w-1/2 flex items-center">
            <p className=" text-gray-500 text-sm w-24">
              Smokes 
            </p>
            <p className="font-semibold">
              {data.data.smokes || '?'}
            </p>
        </div>
        {/* HOMETOWN */}
        <div className="w-1/2 flex items-center">
            <p className=" text-gray-500 text-sm w-24">
              Hometown 
            </p>
            <p className="font-semibold">
              {data.data.hometown || '?' }
            </p>
        </div>
          {/* DRINKS */}
          <div className="w-1/2 flex items-center">
            <p className=" text-gray-500 text-sm w-24">
              Drinks 
            </p>
            <p className="font-semibold">
              {data.data.hometown || '?' }
            </p>
        </div>
          {/* LANGUAGES */}
          <div className="w-1/2 flex items-center">
            <p className=" text-gray-500 text-sm w-24">
              Languages 
            </p>
            <p className="font-semibold">
              {data.data.hometown || '?' }
            </p>
        </div>
          {/* PETS */}
          <div className="w-1/2 flex items-center">
            <p className=" text-gray-500 text-sm w-24">
              Pets 
            </p>
            <p className="font-semibold">
              {data.data.hometown || '?' }
            </p>
        </div>
          {/* EDUCATION */}
          <div className="w-1/2 flex items-center">
            <p className=" text-gray-500 text-sm w-24">
              Education 
            </p>
            <p className="font-semibold">
              {data.data.hometown || '?' }
            </p>
        </div>
          {/* CHILDREN */}
          <div className="w-1/2 flex items-center">
            <p className=" text-gray-500 text-sm w-24">
              Children 
            </p>
            <p className="font-semibold">
              {data.data.hometown || '?' }
            </p>
        </div>
        </div>
        <hr className="my-5" />
        <h5>
          Gallery
        </h5>


        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/"  onChange={(e) => setImage(e.target.files[0])}/>
          <button type="submit">submit</button>
        </form>
        <div>

        </div>
        <hr className="my-5" />
        <button className="font-bold text-rose-500 mb-5" onClick={() => setShowAdditional(true)}>See more about {data.data.first_name}</button>
        {showAdditional ? 
        <div className="space-y-5 ">
          <div className="[&>p]:text-sm [&>p]:text-gray-500">
            <h6>Self Summary</h6>
            <p>{data.data.essay0}</p>
          </div>
          <div className="[&>p]:text-sm [&>p]:text-gray-500">
            <h6>What I'm doing with my life...</h6>
            <p>{data.data.essay1}</p>
          </div>
          <div className="[&>p]:text-sm [&>p]:text-gray-500">
            <h6>I'm really good at...</h6>
            <p>{data.data.essay2}</p>
          </div>
          <div className="[&>p]:text-sm [&>p]:text-gray-500">
            <h6>The first thing people notice about me</h6>
            <p>{data.data.essay3}</p>
          </div>
          <div className="[&>p]:text-sm [&>p]:text-gray-500">
            <h6>My favorite media is...</h6>
            <p>{data.data.essay4}</p>
          </div>
          <div className="[&>p]:text-sm [&>p]:text-gray-500">
            <h6>The things I could never do without</h6>
            <p>{data.data.essay4}</p>
          </div>
          <div className="[&>p]:text-sm [&>p]:text-gray-500">
            <h6>I spend a lot of time thinking about...</h6>
            <p>{data.data.essay4}</p>
          </div>
          <div className="[&>p]:text-sm [&>p]:text-gray-500">
            <h6>On a typical Friday night I am...</h6>
            <p>{data.data.essay4}</p>
          </div>
          <div className="[&>p]:text-sm [&>p]:text-gray-500">
            <h6>The most private thing I am willing to admit</h6>
            <p>{data.data.essay4}</p>
          </div>
          <div className="[&>p]:text-sm [&>p]:text-gray-500">
            <h6>You should message me if...</h6>
            <p>{data.data.essay4}</p>
          </div>
        </div> : null}
      </div>
    </section>
  )}
}

export default Profile