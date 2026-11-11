import col from "../../images/Col.png"


const Section4 = () => {
  return (
    <div className="flex items-center justify-between max-w-[1200px] m-auto mt-20">
        <img src={col} alt="" />
        <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold">Meet international <br /> students & teachers</h1>
            <p>Morbi sit egestas dignissim pharetra, sed amet. Tempus justo <br /> senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam <br /> facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, <br /> faucibus aenean lorem faucibus integer.</p>
            <p className="text-[#2563EB] font-black">Explore teachers and students</p>
        </div>
    </div>
  )
}

export default Section4
