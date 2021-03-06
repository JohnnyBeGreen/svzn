export default [
  {
    id: 44,
    name: "Покупай со Сбером",
    type: 1,
    show_courier: 1,
    show_pickup: 1,
    show_postamat: 1,
    description:
      "Для владельцев дебетовой карты Сбера с подключенными услугами Сбер Онлайн и Мобильный банк",
    sort: 0,
    linked_payment_type_id: 20,
    has_tradein: 0,
    device_types: ""
  },
  {
    id: 32,
    name: "Apple Pay",
    type: 1,
    show_courier: 1,
    show_pickup: 1,
    show_postamat: 1,
    description:
      "Для оплаты в Safari на iPhone, iPad или Mac просто используйте Apple Pay.",
    sort: 1,
    linked_payment_type_id: 20,
    has_tradein: 0,
    device_types: "ios"
  },
  {
    id: 33,
    name: "Google Pay",
    type: 1,
    show_courier: 1,
    show_pickup: 1,
    show_postamat: 1,
    description: "Быстрая и удобная оплата через Google Pay.",
    sort: 2,
    linked_payment_type_id: 20,
    has_tradein: 0,
    device_types: ""
  },
  {
    id: 17,
    name: "Онлайн-оплата банковскими картами",
    type: 1,
    show_courier: 1,
    show_pickup: 1,
    show_postamat: 1,
    description:
      "Безопасная оплата заказа картой онлайн. Форма оплаты появится сразу после оформления заказа.",
    sort: 3,
    linked_payment_type_id: 20,
    has_tradein: 0,
    device_types: "ios,android"
  },
  {
    id: 46,
    name: "Онлайн-оплата банковскими картами + Трейд-ин",
    type: 1,
    show_courier: 0,
    show_pickup: 1,
    show_postamat: 0,
    description:
      "Безопасная оплата заказа картой онлайн + Трейд-ин. Форма оплаты появится сразу после оформления заказа.",
    sort: 3,
    linked_payment_type_id: 20,
    has_tradein: 1,
    device_types: ""
  },
  {
    id: 39,
    name: "Оплата по QR-коду",
    type: 1,
    show_courier: 1,
    show_pickup: 1,
    show_postamat: 1,
    description: "Система быстрых платежей",
    sort: 7,
    linked_payment_type_id: 20,
    has_tradein: 0,
    device_types: "android"
  },
  {
    id: 40,
    name: "VK Pay",
    type: 1,
    show_courier: 1,
    show_pickup: 1,
    show_postamat: 1,
    description:
      "Cервис для быстрой и безопасной оплаты покупок с банковской карты, баланса кошелька или мобильного, а также в рассрочку без процентов.",
    sort: 7,
    linked_payment_type_id: 20,
    has_tradein: 0,
    device_types: ""
  },
  {
    id: 2,
    name: "Оплата банковской картой при получении заказа",
    type: 0,
    show_courier: 1,
    show_pickup: 0,
    show_postamat: null,
    description:
      "Курьер интернет-магазина приедет с товаром и переносным терминалом, с помощью которого можно будет осуществить оплату.",
    sort: 10,
    linked_payment_type_id: 2,
    has_tradein: 0,
    device_types: "ios,android"
  },
  {
    id: 38,
    name: "Оплата заказа в постамате (банковской картой)",
    type: 0,
    show_courier: 0,
    show_pickup: 0,
    show_postamat: 1,
    description:
      "При получении заказа в постамате оплатите его банковской картой.",
    sort: 10,
    linked_payment_type_id: 2,
    has_tradein: 0,
    device_types: "ios,android"
  },
  {
    id: 13,
    name: "Рассрочка онлайн",
    type: 1,
    show_courier: 1,
    show_pickup: 1,
    show_postamat: 0,
    description:
      "Нажмите «Подтвердить заказ» и заполните банковскую анкету онлайн. Одобрение заявки занимает несколько минут.",
    sort: 12,
    linked_payment_type_id: 14,
    has_tradein: 0,
    device_types: "ios,android"
  },
  {
    id: 48,
    name: "Кредит онлайн",
    type: 1,
    show_courier: 1,
    show_pickup: 1,
    show_postamat: 0,
    description:
      "Нажмите «Подтвердить заказ» и заполните банковскую анкету онлайн. Одобрение заявки занимает несколько минут.",
    sort: 12,
    linked_payment_type_id: 14,
    has_tradein: 0,
    device_types: ""
  },
  {
    id: 19,
    name: "Купить c Мокка",
    type: 1,
    show_courier: 1,
    show_pickup: 1,
    show_postamat: 0,
    description: "Оплата заказа в кредит с Мокка. ",
    sort: 13,
    linked_payment_type_id: 14,
    has_tradein: 0,
    device_types: "ios"
  },
  {
    id: 1,
    name: "Оплата заказа в магазине картой или наличными",
    type: 0,
    show_courier: 0,
    show_pickup: 1,
    show_postamat: 0,
    description:
      "При получении заказа в магазине оплатите его наличными, банковской картой или подарочным сертификатом.",
    sort: 15,
    linked_payment_type_id: 1,
    has_tradein: 1,
    device_types: "ios,android"
  },
  {
    id: 3,
    name: "Наличный расчет",
    type: 0,
    show_courier: 1,
    show_pickup: 0,
    show_postamat: null,
    description: "Оплата заказа наличными курьеру при доставке.",
    sort: 15,
    linked_payment_type_id: 1,
    has_tradein: 0,
    device_types: "ios,android"
  },
  {
    id: 37,
    name: "Оплата заказа в постамате (наличными)",
    type: 0,
    show_courier: 0,
    show_pickup: 0,
    show_postamat: 1,
    description:
      "При получении заказа в постамате оплатите его наличными без сдачи.",
    sort: 15,
    linked_payment_type_id: 1,
    has_tradein: 0,
    device_types: "ios,android"
  },
  {
    id: 12,
    name: "Рассрочка / кредит в магазине",
    type: 0,
    show_courier: 0,
    show_pickup: 1,
    show_postamat: 0,
    description:
      "Оформите заказ на сайте и при получении заполните заявку на рассрочку / кредит в магазине.",
    sort: 25,
    linked_payment_type_id: 13,
    has_tradein: 1,
    device_types: "ios,android"
  },
  {
    id: 5,
    name: "Безналичный расчет (для юр. лиц)",
    type: 0,
    show_courier: 1,
    show_pickup: 1,
    show_postamat: 0,
    description:
      "Только для юридических лиц с возможностью вернуть НДС. Счет на оплату формируется после оформления заказа.",
    sort: 50,
    linked_payment_type_id: 6,
    has_tradein: 0,
    device_types: "ios,android"
  }
];
