import Image from "next/image";
import hamayopic from "./pictures/hamayo.jpeg";
import meesam from "./pictures/meesam.png";
import aneesbibi from "./pictures/anees bibi.jpeg";
import ikram from "./pictures/ikram.jpeg";
import qulbabas from "./pictures/Qalbeabas.png";
import qurbanali from "./pictures/qurbanali.jpeg";
import samad from "./pictures/samad.jpeg";
import body from "./pictures/bodyshop.jpeg";
import sameer from "./pictures/sameer.jpeg";
import farooq from "./pictures/farooq.png";
const teamMembers = [

  {
    id: 1,
    img: hamayopic,
    name: "Hamayun Gulzar Bhatti",
    title: "Manager Sales",
  },
  {
    id: 10,
    img: farooq,
    name: "Farooq Omer khan",
    title: "Head of Sales & Marketing",
  },
  {
    id: 2,
    img: qurbanali,
    name: "Qurban Ali",
    title: " Manager Parts",
  },
  {
    id: 3,
    img: samad,
    name: "Abdul Sammad Nadeem",
    title: "Manager Used Car ",
  },
  {
    id: 4,
    img: ikram,
    name: "Amir Sohail",
    title: " Manager Aftersales",
  },


  {
    id: 5,
    img: aneesbibi,
    name: "Anees Bibi",
    title: "Manager Suzuki Finance ",
  },
  {
    id: 6,
    img: sameer,
    name: "Sameer Aslam",
    title: "Accounts Manager ",
  },
  {
    id: 7,
    img: qulbabas,
    name: "Qalb e Abbas",
    title: "  IT Manager",
  },
  {
    id: 8,
    img: body,
    name: "Ikram Ali",
    title: "Manager BodyShop ",
  },
  {
    id: 9,
    img: meesam,
    name: "Meesam khan",
    title: "HR Manager",
  },
];

export default function Team() {
  return (
      <section className=" bg-light overflow-hidden">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Meet Our Experts</h2>

          </div>

          <div className="row g-2 g-xl-5 mb-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-md-6 col-lg-4">
                <div className="team-card">
                  <div className="team-image">
                    <Image
                      src={member.img}
                      alt={member.name}
                      layout="responsive"
                      style={{  }}
                    />
                  </div>

                  <div className="team-content">
                    <h4>{member.name}</h4>
                    <p>{member.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
   
  );
}
