
export default function SubheaderLogin({ title, image, subTitle  }: { title: string, image: string, subTitle: string}) {
  return (
    <div
      className="h-[250px] md:h-[300px] bg-black bg-cover w-full bg-center relative bg-no-repeat flex items-end pb-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-black/0"></span>
      <div className="main_container">
        <div className="relative py-4">
          <h2 className="text-3xl font-bold text-center md:text-start font-thin text-white">
            {title}
          </h2>
          <div className="flex gap-1 mb-2 text-white text-lg text-center md:text-start ">
            <p className='montserrat-light'>Você esta em Home -</p> 
            <p className='font-bold'>{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
