import Avatar from "../assets/hagy.png"
import ProjectCard from "../components/project-card"

interface Project {
  name: string;
  year: string;
  desc: string;
}

const LandingPage = () => {

  const Projects: Project[]=[
    {
      name: "Project 1",
      year: "2024",
      desc: "My CV"
    },
    {
      name: "Project 2",
      year: "2024",
      desc: "TMDB API"
    },
    {
      name: "Project 3",
      year: "2020-2024",
      desc: "Poke API"
    },
  ]

  const education: Project[]=[
    {
      name: "SMK Negeri 1 Jakarta",
      year: "2020-2024",
      desc: "Sistem Informatika Jaringan dan Aplikasi"
    },
    {
      name: "SMP Negeri 77 Jakarta",
      year: "2017-2020",
      desc: ""
    },
  ]
  
  return (
    <div className='flex flex-col'>
      <section className='flex flex-row justify-evenly items-center m-5'>
        <div className='flex flex-col'>
        <h1>Hello World!</h1>
        <p className="font font-bold">Hagy Priyo Prasetyo</p>
        </div>
        <img src={Avatar} className="w-60 rounded-2xl"/>
      </section>
      
      <section className="flex flex-col px-5 py-10 gap-5">
        <label className="text-base text-justify font-bold">Summary</label>
        <p className="text-base text-justify">Seorang pelajar yang mempunyai pengalaman dasar dan ketertarikan lebih lanjut di bidang pemrograman. Telah mengerjakan projek landing page dan welcome page yang berbasis HTML dan CSS dasar dan mendapatkan penilaian yang baik. Mempelajari, memahami sejarah Java dan mempraktikkannya pada tingkat dasar. Memiliki kemampuan bekerja sama yang baik dan mampu untuk melakukan problem solving.</p>
      </section>

      <section className="flex flex-col px-5 py-10 gap-5">
        <label className="font font-semibold text-lg font-bold">Projects</label>
        {Projects.map((item: Project, index: number) =>(
          <ProjectCard
          key={index}
          name={item.name}
          year={item.year}
          desc={item.desc}
          bgColor={`${index % 2 === 0 ? "bg-gray-200 rounded-xl" : ""}`}/>
        ))}
        
      </section>

      <section className="flex flex-col px-5 py-10 gap-5">
        <label className="font font-semibold text-lg">Education</label>
        {education.map((item: Project, index: number) =>(
          <ProjectCard
          key={index}
          name={item.name}
          year={item.year}
          desc={item.desc}
          bgColor={`${index % 2 === 0 ? "bg-gray-200 rounded-xl" : ""}`}/>
        ))}
        
      </section>
    </div>
  )
}

export default LandingPage