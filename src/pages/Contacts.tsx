import image from "../images/Group 1333.png"
import image1 from "../images/Group 1334.png"
import foot from "../images/Group 1183.png"




const Contacts = () => {
  return (
    <div>
    <div className="max-w-[1200px] m-auto py-10">
      <h1 className="text-4xl">Наши контакты</h1>
      <img className="w-[100%] pt-10" src={image} alt="" />
      <h1 className="text-4xl pt-2">...или напишите нам:</h1>
      <img className="pt-10" src={image1} alt="" />

    </div>
      <div className="pt-10">
        <img className="max-w-[100%] m-auto" src={foot} alt="" />
      </div>
    </div>
  )
}

export default Contacts