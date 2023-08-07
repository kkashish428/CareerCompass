import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "../components/Sidebar";
import RoadmapStep from "../components/RoadmapStep";
import Card from "../components/Card";
import bookmark from "../assets/bookmark.svg";
import book from "../assets/book.svg";
import yt from "../assets/yt.png";
import roadmap from "../assets/roadmap.png"
import { useNavigate, useSearchParams, useActionData, useNavigation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CollectInfo from "../components/CollectInfo";
import MentorCard from "../components/MentorCard";
import mentor from "../assets/mentor.svg"

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const formData = await request.formData();

  const email = searchParams.get("email");
  formData.append("email", email);
  const res = await axios.post("http://127.0.0.1:8000/api/user-info", formData);
  return res.data;
}


export default function Profile() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [, setSearchParams] = useSearchParams()
  const actionData = useActionData();

  useEffect(() => {
    async function getUserDetails() {
      const res = await axios.get(`http://127.0.0.1:8000/api/user-info?email=${user.email}`);
      if (res.data?.error) {
        console.log("Error");
      } else {
        setUserDetails(res.data);
      }
    }
    if (user) {
      getUserDetails();
    }
  }, [user, isAuthenticated, actionData]);

  const form = useRef();
  const navigation = useNavigation();
  useEffect(function resetFormOnSuccess() {
    if (navigation.state === "idle" && actionData) {
      form.current?.reset();
      setShowForm(false);
    }
  }, [navigation.state, actionData]);

  if (isLoading || !isAuthenticated) {
    return <div>Loading...</div>
  }

  function handleClick() {
    setShowForm(true);
    setSearchParams(prevParams => {
      prevParams.set("email", user.email);
      return prevParams;
    });
  }

  return (
    !showForm
      ? <div className="flex mb-[10rem]">
        <div className="col-1 max-w-[26.9375rem] max-h-[54rem] ml-[17.5rem] mt-[5.1875rem] mr-[2.875rem]">
          <Sidebar
            img={user.picture}
            name={user.name}
            email={user.email}
            strength={userDetails?.strength}
            interest={userDetails?.interest}
            aspiration={userDetails?.aspiration}
            education={userDetails?.education}
          />
          <div className="flex justify-center items-center">
            <button onClick={handleClick} className="bg-green-600 px-8 py-4 text-white rounded-2xl font-semibold">{userDetails ? "Update Details" : "Add Details"}</button>
          </div>
          <div className="mentor mt-10 flex flex-col gap-1">
            <div className="title flex items-center gap-2">
              <img className="w-[80px] h-[80px]" src={mentor} alt="" />
              <div className="text-3xl font-bold">MENTORS</div>
            </div>
            <MentorCard 
              name = "ABHISHEK KUMAR"
              content = "SKILLS : Full Stack Developer"
              num = "+91 9998887777"
              mail = "abhishekkumar123@gmail.com"
            />
            <MentorCard 
              name = "ABHISHEK KUMAR"
              content = "SKILLS : Full Stack Developer"
              num = "+91 9998887777"
              mail = "abhishekkumar123@gmail.com"
            />
          </div>
        </div>
        <div className="col-2 pl-8 mt-[5.1875rem] mr-[11.25rem]">
          <div className="bookmark flex">
            <img className="w-[3.75rem] h-[3.75rem]" src={bookmark} alt="" />
            <div className="font-bold text-3xl ml-[0.815rem]">BOOKMARKS</div>
          </div>
          <div className="steps mt-8 flex gap-4">
            <div className="mt-[11px]"><img src={roadmap} alt="" /></div>
            <div className="step-con flex flex-col gap-5">
              <div className="flex gap-10">
                <div className="text-3xl mt-6 font-bold">ROADMAPS</div>
                <div className="mt-6">
                  <button className="bg-green-600 px-4 py-2 text-white rounded-2xl font-semibold">View All</button>
                </div>
              </div>
              <RoadmapStep
                number="1"
                content="Master programming languages like Python, Java, or C++."
              />
              <RoadmapStep
                number="2"
                content="Master programming languages like Python, Java, or C++."
              />
              <RoadmapStep
                number="3"
                content="Master programming languages like Python, Java, or C++."
              />
              <RoadmapStep
                number="4"
                content="Master programming languages like Python, Java, or C++."
              />
              <RoadmapStep
                number="5"
                content="Master programming languages like Python, Java, or C++."
              />
            </div>
          </div>
          <div className="book flex gap-4 mt-[45px]">
            <div className="w-[65px] h-[65px]">
              <img src={book} alt="" />
            </div>
            <div className="book-con flex flex-col gap-4">
              <div className="flex">
                <div className="text-3xl font-bold flex items-center">BOOKS</div>
                <div className="mt-1">
                  <button className="bg-green-600 px-4 py-2 text-white rounded-2xl font-semibold ml-[3rem]">View All</button>
                </div>
              </div>
              <Card
                title="Full Stack Web Development For Beginners"
                content="This book is written for absolute beginners who want to become full stack web application developer."
                type="price"
                priceAmount="Rs 4599.00"
                link="Amazon.in"
              />
            </div>
          </div>
          <div className="yt flex gap-4 mt-[45px]">
            <div className="">
              <img src={yt} alt="" />
            </div>
            <div className="yt-con flex flex-col gap-4 w-[785px]">
              <div className="flex">
                <div className="text-3xl font-bold flex items-center">YOUTUBE</div>
                <div className="mt-1">
                  <button className="bg-green-600 px-4 py-2 text-white rounded-2xl font-semibold ml-[3rem]">View All</button>
                </div>
              </div>
              <Card
                title="Complete Web Developer Bootcamp"
                content="Web Development Tutorials"
                type="yt"
                style={{ width: "557px" }}
              />
            </div>
          </div>
        </div>
      </div>
      : <CollectInfo form={form} />
  )
}
