import "./Section.css"
import ava from "../../assets/Img(1) copy.png"


function Section2() {
  return (
    <section className="sec2">
      <img src={ava} alt="" />
      <div className="text2">
        <h1>Sobre nós</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu <br /> quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed <br /> consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta,<br /> pellentesque massa vitae, vehicula risus. </p>
        <p>In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna <br /> turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus <br /> elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed. </p>
        <p>Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a <br /> leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur <br /> fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum  <br />lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.</p>
      </div>
    </section>
  )
}

export default Section2
