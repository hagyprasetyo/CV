import LandingPage from '../features'
import Navbar from './navbar'
import ProjectCard from './project-card'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div>
            <LandingPage/>
        </div>
        <ProjectCard name={''} year={''} desc={''}/>
    </div>
  )
}

export default Layout