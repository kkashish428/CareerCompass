import { useLocation } from "react-router";
import roadmap from "../assets/roadmap.png";
import bookmark from "../assets/bookmark.svg";
import books from "../assets/books.png";
import yt from "../assets/yt.png"
import RoadmapStep from "../components/RoadmapStep";
import Card from "../components/Card";

export default function RoadmapDetail() {
  // const location = useLocation();
  // const roadmapSteps = location.state.roadmap;
  // console.log(roadmapSteps);
  return (
    <div className="flex mt-[90px] ml-[216px] mb-[117px] mr-[174px] h-[1991px]">
      <div className="col-1">
        <div className="job max-w-[700px] h-[248px] bg-[#D9FEDC] rounded-3xl p-10">
          <div className="job-title text-3xl font-bold mb-6">
            Software Engineer
          </div>
          <div className="job-des text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.

          </div>
        </div>
        <div className="roadmap mt-[55px] max-w-[700px]">
          <div className="title-con flex mb-[55px]">
            <div className="title flex ml-[190px] mt-[25px]">
              <img src={roadmap} alt="" />
              <div className="font-bold text-3xl mt-[25px]">ROADMAP</div>
            </div>
            <div className="bookmark h-[40px] w-[40px] mt-[50px] ml-[176px]">
              <img src={bookmark} alt="" />
            </div>
          </div>
          <div className="steps">
            <RoadmapStep number='1' content='Master programming languages like Python, Java, or C++.'/>
            <RoadmapStep number='2' content='Explore web development, databases, and APIs.'/>
            <RoadmapStep number='3' content='Learn data structures, algorithms, and problem-solving.'/>
            <RoadmapStep number='4' content='Gain practical experience through internships or personal projects.'/>
            <RoadmapStep number='5' content='Specialize in an area like AI/ML, cloud computing, or cybersecurity.'/>
          </div>
          
        </div>
      </div>
      <div className="col-2 ml-[57px]">
        <div className="book">
          <div className="title flex gap-2 mb-[39px]">
            <img src={books} alt="" />
            <div className="text-3xl font-bold">REFERNCE BOOKS</div>
          </div>
          <Card 
          title = "Full Stack Web Development For Beginners"
          content = "This book is written for absolute beginners who want to become full stack web application developer."
          type = "price"
          priceAmount = "Rs 4599.00"
          link = "Amazon.in"
          /><Card 
          title = "Full Stack Web Development For Beginners"
          content = "This book is written for absolute beginners who want to become full stack web application developer."
          type = "price"
          priceAmount = "Rs 4599.00"
          link = "Amazon.in"
          /><Card 
          title = "Full Stack Web Development For Beginners"
          content = "This book is written for absolute beginners who want to become full stack web application developer."
          type = "price"
          priceAmount = "Rs 4599.00"
          link = "Amazon.in"
          />
        </div>
        <div className="yt">
          <div className="title flex gap-2 mb-[39px]">
            <img src={yt} alt="" />
            <div className="text-3xl font-bold">YOUTUBE CHANNELS</div>
          </div>
          <Card 
          title = "Complete Web Developer Bootcamp"
          content = "Web Development Tutorials"
          type = "yt"
          /><Card 
          title = "Complete Web Developer Bootcamp"
          content = "Web Development Tutorials"
          type = "yt"
          /><Card 
          title = "Complete Web Developer Bootcamp"
          content = "Web Development Tutorials"
          type = "yt"
          />
        </div>
        <div className="community">

        </div>
      </div>
    </div>
  );
}