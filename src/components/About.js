import React from "react";



  function About(){
    return (
      <>
        <div className="text-center">
          <main role="main" className="inner cover">
            <h1 className="text-6xl mt-20 text-bold leading-11 font-mono text-[#a9a9a9]">
              Tasking, the App to help maintain a steady work-flow!
            </h1>
            <p className=" text-2xl mt-20 ">
              <i>
                Make life easier by using this task manager to create a list of
                priorities that need to be completed throughout the day to
                enhance your productivity and work-flow.
              </i>
            </p>
            <p className="lead">
              <a href="./Form" className="btn btn-lg bg-[#ff3b3f] mt-20">
                Get started
              </a>
            </p>
          </main>

          <footer class="mastfoot mt-60">
            <div class="inner">Tasking, Copyright 2022</div>
          </footer>
        </div>
      </>
    );  
  }
export default About;