import Image from "next/image";
import hamayopic from "../public/profiles/hamayo.jpeg";
import meesam from "./pictures/meesam.png";
import aneesbibi from "./pictures/anees bibi.jpeg";
import ikram from "./pictures/ikram.jpeg";
import qulbabas from "./pictures/Qalbeabas.jpeg";
import qurbanali from "./pictures/qurbanali.jpeg";
import samad from "./pictures/samad.jpeg";
import body from "./pictures/body.jpeg";

const teamMembers = [
  
  {
    id: 1,
    img: hamayopic,
    name: "Hamayun Gulzar Bhatti",
    title: "Manager Sales",
  },
   {
    id: 6,
    img: qurbanali,
    name: "Qurban Ali",
    title: "Parts Manager",
  },
  {
    id: 4,
    img: ikram,
    name: "Amir Sohail",
    title: "Aftersales Manager ",
  },
  {
    id: 7,
    img: samad,
    name: "Samad",
    title: "Used Car Manager",
  },
 
  {
    id: 3,
    img: aneesbibi,
    name: "Anees Bibi",
    title: "Suzuki Finance Manager",
  },
  
  {
    id: 5,
    img: qulbabas,
    name: "Qulb Abbas",
    title: "IT Manager",
  },
 
    
  {
    id: 8,
    img: body,
    name: "Ikram Ali",
    title: "Body Shop Manager",
  }
  , {
    id: 2,
    img: meesam,
    name: "M Meesam Ali",
    title: "HR Manager",
  },

];

export default function Team() {
  return (
    <>
      <section className="py-1 py-xl-2 bg-light overflow-hidden">
        <div className="container">
           <div className="text-center mb-5">
          <h2 className="fw-bold">Meet Our Experts</h2>
         
        </div>

          <div className="row g-3 g-xl-5">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="equal-1-1 mb-2">
                    <Image
                      className="background"
                      src={member.img}
                      layout="responsive"
                      alt={`${member.name} image`}
                    />
                  </div>
                  <h4 className="fs-5 mb-0">{member.name}</h4>
                  <span className="text-secondary">{member.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Missions /> */}
    </>
  );
}
