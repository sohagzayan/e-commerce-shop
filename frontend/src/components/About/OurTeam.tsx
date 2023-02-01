import React from "react";
import team1 from "../../assets/team1_800x.jpg";
import team2 from "../../assets/team2_800x.jpg";
import team3 from "../../assets/team3_800x.webp";
import team4 from "../../assets/team-4_800x.webp";
const OurTeam = () => {
  return (
    <div>
      <div className="mt-10 px-4">
        <div>
          <h2 className="text-4xl text-own-secondary underline dark:text-own-white font-bold text-center">
            Our Team
          </h2>
          <p className="text-own-text-light md:w-[50%] mx-auto dark:text-own-text-dark text-center mt-5">
            When we take care of our employees, knowing very well, they will
            feel the same towards the customers and would do everything in their
            power to take care of them!
          </p>
          <div className="grid mt-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  container_c mx-auto gap-10">
            <div className="text-center flex flex-col ">
              <img className="w-[250px] mx-auto mb-2" src={team1} alt="" />
              <h2 className="text-2xl text-own-secondary dark:text-own-white">
                Mable Barton
              </h2>
              <p className="text-own-secondary dark:text-own-white">
                Fashion Designer
              </p>
            </div>
            <div className="text-center flex flex-col ">
              <img className="w-[250px] mx-auto mb-2" src={team2} alt="" />
              <h2 className="text-2xl text-own-secondary dark:text-own-white">
                Janice Kim
              </h2>
              <p className="text-own-secondary dark:text-own-white">
                Front Office Manager
              </p>
            </div>
            <div className="text-center flex flex-col ">
              <img className="w-[250px] mx-auto mb-2" src={team3} alt="" />
              <h2 className="text-2xl text-own-secondary dark:text-own-white">
                Willie Fuller
              </h2>
              <p className="text-own-secondary dark:text-own-white">
                Design Analyst
              </p>
            </div>
            <div className="text-center flex flex-col ">
              <img className="w-[250px] mx-auto mb-2" src={team4} alt="" />
              <h2 className="text-2xl text-own-secondary dark:text-own-white">
                Mandy Payne
              </h2>
              <p className="text-own-secondary dark:text-own-white">
                Human Resources
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
