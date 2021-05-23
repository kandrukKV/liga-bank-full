import React from 'react';
import vaultIcon from "./img/vault.svg";
import cardsIcon from "./img/cards.svg";
import securityIcon from "./img/security.svg";
import phoneIcon from "./img/phone.svg";
import piggy from "./img/piggybank.jpg";
import car from "./img/car.jpg";
import lock from "./img/lock.jpg";
import phone from "./img/phone_tab.jpg";

export const ESC_KEY = `Escape`;

export const MENU_LIST = [
  {name: `Услуги`, id: 1},
  {name: `Рассчитать кредит`, id: 2},
  {name: `Конвертер валют`, id: 3},
  {name: `Контакты`, id: 4},
];

export const THUMBS = [
  {name: `Вклады`, icon: vaultIcon},
  {name: `Кредиты`, icon: cardsIcon},
  {name: `Страхование`, icon: securityIcon},
  {name: `Онлайн-сервисы`, icon: phoneIcon},
];

export const TABS = [
  {
    title: `Вклады Лига Банка – это выгодная инвестиция в свое будущее`,
    listItems: [`Проценты по вкладам до 7%`, `Разнообразные условия`, `Возможность ежемесячной капитализации или вывод процентов на банковскую карту`],
    decorImg: piggy,
    link: <a className="tab__btn" href="#">Узнать подробнее</a>
  },

  {
    title: `Лига Банк выдает кредиты под любые цели`,
    listItems: [`Ипотечный кредит`, `Автокредит`, `Потребительский кредит`],
    decorImg: car,
    link: <>Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим <a className="tab__link" href="#calculator">кредитным калькулятором</a></>
  },

  {
    title: `Лига Страхование - застрахуем всё, что захотите`,
    listItems: [`Автомобильное страхование`, `Страхование жизни и здоровья`, `Страхование недвижимости`],
    decorImg: lock,
    link: <a className="tab__btn" href="#">Узнать подробнее</a>
  },

  {
    title: `Лига Банк — это огромное количество онлайн-сервисов для вашего удобства`,
    listItems: [`Мобильный банк,который всегда под рукой`, `Приложение Лига-проездной позволит вам оплачивать билеты по всему миру`],
    decorImg: phone,
    link: <a className="tab__btn" href="#">Узнать подробнее</a>
  }
];

export const SLIDES = [
  {
    subtitle: `Кредиты на любой случай`,
    linkName: `Рассчитать кредит`,
    link: `#calculator`,
    isWhite: true,
    background: `first`
  },
  {
    subtitle: `Ваша уверенность в завтрашнем дне`,
    linkName: `Рассчитать кредит`,
    link: `#calculator`,
    isWhite: false,
    background: `second`
  },
  {
    subtitle: `Всегда радом`,
    linkName: `Найти отделение`,
    link: `#map`,
    isWhite: false,
    background: `third`
  }
];

export const CreditGoals = {
  MORTGAGE: `Ипотечное кредитование`,
  AUTO: `Автомобильное кредитование`
};

export const MONTHS_OF_THE_YEAR = 12;

export const NUMBER_OF_DIGITAL = 4;

export const REGULAR_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ProductSitting = {
  [CreditGoals.MORTGAGE]: {
    purpose: `Ипотека`,
    percent: {
      salary: 45,
      border: 15,
      min: 9.4,
      max: 8.5
    },
    maternalCapital: 470000,
    minSumOfCredit: 500000,
    propertyCost: {
      name: `Стоимость недвижимости`,
      min: 1200000,
      max: 25000000,
      step: 100000,
      fieldSuffixes: [`рубль`, `рубля`, `рублей`]
    },
    initialFee: {
      name: `Первоначальный взнос`,
      min: 10,
      max: 100,
      step: 5,
      rangeSuffixes: [`%`, `%`, `%`],
      fieldSuffixes: [`рубль`, `рубля`, `рублей`]
    },
    creditTerm: {
      name: `Срок кредитования`,
      min: 5,
      max: 30,
      step: 1,
      rangeSuffixes: [`год`, `года`, `лет`],
      fieldSuffixes: [`год`, `года`, `лет`]
    },
    options: [
      {
        id: 3,
        name: `Использовать материнский капитал`,
        checked: false
      }
    ],
    names: [`ипотеки`, `ипотечные`]
  },
  [CreditGoals.AUTO]: {
    purpose: `Авто`,
    minSumOfCredit: 200000,
    percent: {
      salary: 45,
      border: 2000000,
      min: 15,
      max: 16,
      oneInsurance: 8.5,
      bothInsurance: 3.5
    },
    propertyCost: {
      name: `Стоимость автомобиля`,
      min: 500000,
      max: 5000000,
      step: 50000,
      fieldSuffixes: [`рубль`, `рубля`, `рублей`]
    },
    initialFee: {
      name: `Первоначальный взнос`,
      min: 20,
      max: 100,
      step: 5,
      rangeSuffixes: [`%`, `%`, `%`],
      fieldSuffixes: [`рубль`, `рубля`, `рублей`]
    },
    creditTerm: {
      name: `Срок кредитования`,
      min: 1,
      max: 5,
      step: 1,
      rangeSuffixes: [`год`, `года`, `лет`],
      fieldSuffixes: [`год`, `года`, `лет`]
    },
    options: [
      {
        id: 1,
        name: `Оформить КАСКО в нашем банке`,
        checked: false
      },
      {
        id: 2,
        name: `Оформить Страхование жизни в нашем банке`,
        checked: false
      },
    ],
    names: [`авто кредит`, `авто`]
  }
};

export const LOCAL_STORAGE_KEY = {
  data: `l_bank_form`,
  user: `i_bank_user`
};

export const BANK_BRANCH_COORDINATES = [[55.755814, 37.617635], [51.533557, 46.034257], [55.796127, 49.106405], [57.152985, 65.541227]];
