
interface Props{
    eduname: string;
    eduyear: string;
    edudesc: string;
    bgColor?: string;
}

const Education = (props: Props) => {
    const {eduname, eduyear, edudesc, bgColor} = props
    
  return (<div className={`flex flex-col gap-3 ${bgColor} p-5 rounded-sm`}>
    <div className='flex flex-row justify-between'>
        <label>{eduname}</label>
        <div>{eduyear}</div>
    </div>
    <p className='text-justify'>
        {edudesc}
    </p>
  </div>
  )
}

export default Education