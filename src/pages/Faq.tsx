import foot from "../images/Group 1183.png"





const Faq = () => {
  return (
    <div>

      <div className="max-w-[1200px] m-auto py-10">
        <div className="flex flex-col gap-5">
      <h1 className="text-4xl">Популярные вопросы и ответы на них</h1>
      <h1 className="text-2xl">Популярные вопросы</h1>
      <p>+ Почему круглую пиццу ставят в квадратную коробку, а <br /> нарезают треугольниками?</p>
      <p>- Почему после ремонта дорога опять проваливается? <br />
      Потому что делают ее без соблюдения технологических <br /> процессов.
      </p>
      <p>+ Почему вода мокрая?</p>
      <p>+ Видят ли микробы друг друга?</p>
      <p>+ Почему кровь красная а вены синие?</p>
      <p>+ Из чего сделана радуга? </p>

        </div>

      <div className="flex flex-col gap-8 mt-10">
        <h1 className="text-2xl">Настройка работы в Signy +</h1>
        <p>Ответов на вопросы 25</p>
        <h1 className="text-2xl">Работа с документами +</h1>
        <p>Ответов на вопросы 15</p>
        <h1 className="text-2xl">Информация по безопасности +</h1>
        <p>Ответов на вопросы 17</p>
        <h1 className="text-2xl">Технические вопросы +</h1>
        <p>Ответов на вопросы 16</p>
        <h1 className="text-2xl">Интеграция +</h1>
        <p>Ответов на вопросы 15</p>
        <h1 className="text-2xl">Общие вопросы +</h1>
        <p>Ответов на вопросы 57</p>
      </div>
    </div>
<div className="bg-[#DCEFEE] py-16 max-w-[100%] m-auto">
      <div className="max-w-[1200px] m-auto text-center">
        <h1 className="text-5xl">Нет ответа на интересующий вопрос?</h1>
        <p className="text-xl mt-4">Заполни форму и наши менеджеры свяжутся с тобой</p>

        <form className="w-[540px] m-auto mt-10 flex flex-col items-start gap-2 text-left">
          <label className="text-xl ml-6">Имя*:</label>
          <input
            placeholder="Иван"
            className="w-full bg-white border border-black rounded-full px-6 py-4 text-xl outline-none"
          />

          <label className="text-xl ml-6 mt-4">Электронная почта*:</label>
          <input
            placeholder="ivan@mail.com"
            className="w-full bg-white border border-black rounded-full px-6 py-4 text-xl outline-none"
          />

          <label className="text-xl ml-6 mt-4">Телефон*:</label>
          <input
            placeholder="+38 000 000 00 00"
            className="w-full bg-white border border-black rounded-full px-6 py-4 text-xl outline-none"
          />

          <label className="text-xl ml-6 mt-4">Твой вопрос:</label>
          <textarea
            placeholder="введите тут"
            className="w-full h-[180px] bg-white border border-black rounded-lg px-6 py-4 text-xl outline-none resize-none"
          />

          <button
            type="button"
            className="bg-[#1064E5] text-white font-bold px-16 py-4 rounded-full cursor-pointer mt-6 mx-auto"
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
      
    </div>
      <img className="max-w-[100%] m-auto" src={foot} alt="" />
    </div>
  )
}

export default Faq
