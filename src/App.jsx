import React from "react";
import Section1 from "./components/section1/section1.jsx";
import Section2 from "./components/section2/section2.jsx";

const App = () => {
  const users = [
    { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      color: "Red",
      intro: "", 
      tag: "Satisfied"
     
    },
    { img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D", 
      color: "lightblue",
      intro: "", 
      tag: "Underserved" 
    },
    { img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D", 
      color: "royalblue",
      intro: "", 
      tag: "Underbanked" 
    },
    { img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D", 
      color: "orange",
      intro: "", 
      tag: "Freelancers" 
    },
    { img: "https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D", 
      color: "pink",
      intro: "", 
      tag: "SMEs" 
    }
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
