import Card from "../components/delivery/CardProps";
import OrderingMethods from "../components/delivery/OrderingMethods ";

const DeliveryPage = () => {
  return (
    <div className="text-white text-center">
      <OrderingMethods />
      <div className="w-[90%] m-auto mb-[80px]">
        <h1 className="text-[30px] mb-[30px] text-center uppercase font-bold w-[400px] leading-[54px] font-aqum text-white">
          Доставка и оплата
        </h1>
        <div className="flex gap-20">
          <Card
            iconSrc="/images/COURIER-DELIVERY.png"
            title="ДОСТАВКА КУРЬЕРОМ"
            description="Вы оплачивайте за сервис доставки курьеру в руки"
          />
          <Card
            iconSrc="/images/Pickup.png"
            title="Самовывоз"
            description="Вы можете сами забрать заказ со скидкой 5%  на суши и роллы, кроме акционных ролл"
          />
        </div>
      </div>
      <div className="w-[90%] m-auto mb-[80px]">
        <h1 className="text-[30px] mb-[30px] text-center uppercase font-bold w-[400px] leading-[54px] font-aqum text-white">
          Условия доставки
        </h1>
        <div className="flex gap-20">
          <Card
            iconSrc="/images/Accepting orders.png"
            title="Прием заказов"
            description="Ежедневно, с 10:00 до 22:00"
          />
          <Card
            iconSrc="/images/Delivery territory.png"
            title="Территория доставки"
            description="г.Душанбе"
          />
          <Card
            iconSrc="/images/COURIER-DELIVERY.png"
            title="Стоимость доставки"
            description="Первые 3 км=10сомон Каждый последующий км=2.5 сомони"
          />
        </div>
      </div>
      <div className="w-[90%] m-auto mb-[80px]">
        <h1 className="text-[30px] mb-[30px] text-center uppercase font-bold w-[180px] leading-[54px] font-aqum text-white">
          Оплата
        </h1>
        <div className="flex gap-20">
          <Card
            iconSrc="/images/Cash to courier.png"
            title="Наличными курьеру"
            description="Заранее предупредите сотрудника кол-центра о купюре, с которого нужен размен"
          />
          <Card
            iconSrc="/images/Via mobile application.png"
            title="Через Аlif mobi"
            description=""
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
