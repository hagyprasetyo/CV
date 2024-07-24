
const Navbar = () => {
  return (
    <div className='flex flex-row w-full justify-between p-5 shadow-md bg-gray-200'>
    <div className=''>Hagy</div>
    <div className='flex flex-row gap-5'>
    <a href='#'>Home</a>
    <a href='#summary'>Summary</a>
    <a href='#projects'>Projects</a>
    <a href='#education'>Education</a>
    </div>
    </div>
  )
}

export default Navbar