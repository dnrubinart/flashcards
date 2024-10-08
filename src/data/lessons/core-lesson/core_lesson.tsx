const core_data = {
  lessonTitle: "Core Concepts",
  slug: "modules-core",
  units: [
    {
      title: "Core Concepts",
      slug: "core",
      items: [
        {
          frontSide: "Защо дефинираме функции?",
          backSide:
            "Функциите са удобни за повторно използване, подобряват четимостта на кода и са по-лесни за тестване.",
        },
        {
          frontSide: "Как дефинираме функция?",
          backSide:
            "Използваме def, последвано от името на функцията и параметрите и в скоби, ако има такива.",
        },
        {
          frontSide: "Как се извиква функция с или без параметри?",
          backSide:
            "Пишем името на функцията и, ако има параметри, те трябва да бъдат поставени в скобите.",
        },
        {
          frontSide: "Каква е целта на *args и **kwargs?",
          backSide:
            "*args позволява работа с произволен брой аргументи, които са представени в tuple формат. **kwargs позволява работа с произволен брой ключови аргументи, които са представени като ключовe и техните стойности в dictionary формат.",
        },
        {
          frontSide: "Какво връща функция без return statement?",
          backSide:
            "Функция без return statement връща None, тъй като не връща никаква стойност.",
        },
        {
          frontSide: "Колко return statements са позволени в една функция?",
          backSide:
            "Може да има повече от един return, но когато се срещне първият, изпълнението на функцията се приключва и връща дадената стойност.",
        },
        {
          frontSide: "Какво е multidimensional list?",
          backSide:
            "Списък от списъци, където всеки от вътрешните списъци може да има различна дължина и стойности.",
        },
        {
          frontSide: "Как можем да итерираме през multidimensional list?",
          backSide:
            "Използват се вложени цикли. Външният цикъл обхожда първия списък(редовете), а вложеният – елементите във всеки ред.",
        },
        {
          frontSide: "Колко 'измерения' можем да имаме?",
          backSide:
            "Няма фиксиран лимит за броя измерения, но обикновено се използват до 2 или 3 измерения.",
        },
        {
          frontSide: "Какво е scope?",
          backSide: "Обхватът, в който променлива може да бъде използвана.",
        },
        {
          frontSide: "Какви са видовете scopes в Python?",
          backSide: "Global, local, enclosing, built-in.",
        },
        {
          frontSide: "Какви са разликите между set, list и tuple?",
          backSide:
            "Set(immutable) - съдържа уникални елементи без определен ред. List(mutable) - последователност от елементи в конкретен ред, може да достъпваме елементите по index, да добавяме, махаме или да ги променяме. Tuple(immutable) - подобни на листовете, но елементите им не могат да бъдат променяни, което ги прави перфектни за съхранение на данни",
        },
        {
          frontSide: "Какво е dictionary?",
          backSide:
            "Dictionary е колекция, която съдържа ключове и техните съответстващи стойности (key:value pairs). Той е подредена колекция, която позволява промени, но не може да съдържа дублиращи се ключове като set-овете. За достъпване на елементи се използват ключовете.",
        },
        {
          frontSide: "Какво е list comprehension?",
          backSide:
            "Позволява създаването на списъци по по-кратък и по-четим начин.",
        },
      ],
    },
  ],
};

export default core_data;
