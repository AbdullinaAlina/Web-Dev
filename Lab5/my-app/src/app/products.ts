export interface Product {
  id: number;
  name: string;
  categoryId: number;
  price: number;
  rating: number;
  image: string;
  href: string;
  description: string;
}

export const products = [
  {
    id: 1,
    categoryId: 1,
    name: 'Skin1004 Madagascar Centella Light гидрофильное масло 200 мл',
    price: 5999,
    rating: 4.7,
    href: "https://kaspi.kz/shop/p/skin1004-madagascar-centella-light-gidrofil-noe-maslo-200-ml-103907513/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h27/82994195300382.jpg?format=gallery-medium",
    description: 'Это универсальное гипоаллергенное гидрофильное масло, предназначенное для удаления макияжа и кожного жира. Он производится с использованием метода мицеллы, который хорошо известен эффективным удалением макияжа и микро-пыли с лица.'
  },
  {
    id: 2,
    categoryId: 2,
    name: 'Skin1004 сыворотка Madagascar Centella Ampoule для лица 55 мл',
    price: 4859,
    rating: 4.9,
    href: "https://kaspi.kz/shop/p/skin1004-syvorotka-madagascar-centella-ampoule-dlja-litsa-55-ml-104765457/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/hb3/h8b/64910388396062.jpg?format=gallery-medium",
    description: 'Имеет противовоспалительный эффект, лечит прыщи, затягивает шрамы, расширенные поры, предотвращает потерю упругости и тонких линий, делая вашу кожу более сильной, увлажненной'
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Skin1004 Madagascar Centella Ampoule пенка 125 мл',
    price: 3715,
    rating: 4.9,
    href: "https://kaspi.kz/shop/p/skin1004-madagascar-centella-ampoule-penka-125-ml-104868246/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/he2/hfa/65122471870494.jpg?format=gallery-medium",
    description: "Слабокислотная пенка для умывания, которая укрепляет и восстанавливает естественный защитный барьер кожи, успокаивает и увлажняет ее, делая цвет лица более здоровым."
  },
  {
    id: 4,
    categoryId: 3,
    name: "Skin1004 тоник Toning Toner 210 мл",
    price: 4950,
    rating: 4.8,
    href: "https://kaspi.kz/shop/p/skin1004-tonik-toning-toner-210-ml-104762771/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h6f/hea/64916331659294.jpg?format=gallery-medium",
    description: "Приносит облегчение и освежает раздраженную, чувствительную, проблемную и уставшую кожу, возвращая ей потерянную влагу, упругость и эластичность."
  },

  {
    id: 5,
    categoryId: 2,
    name: 'Skin1004 крем Madagascar Centella Cream для лица 75 мл',
    price: 6500,
    rating: 2.3,
    href: "https://kaspi.kz/shop/p/skin1004-krem-madagascar-centella-cream-dlja-litsa-75-ml-109249274/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h07/hb2/69823195480094.jpg?format=gallery-medium",
    description: "Питательный крем с центеллой SKIN1004 Madagascar Centella Cream наполняет кожу влагой, устраняет сухость, шелушение и чувство стянутости, укрепляет естественный защитный барьер, смягчает и разглаживает. Средство успокаивает, стимулирует регенерацию, снимает покраснение и раздражение."
  },
  {
    id: 6,
    categoryId: 2,
    name: "Skin1004 сыворотка Madagascar Centella Poremizing Fresh Ampoule для лица, для шеи 100 мл",
    price: 5389,
    rating: 4.8,
    href: "https://kaspi.kz/shop/p/skin1004-syvorotka-madagascar-centella-poremizing-fresh-ampoule-dlja-litsa-dlja-shei-100-ml-105500344/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h12/h1e/64537153634334.jpg?format=gallery-medium",
    description: ""
  },

  {
    id: 7,
    categoryId: 4,
    name: 'Маска для лица Skin1004 ночная Madagascar centella hyalu-cica sleeping pack 100 мл',
    price: 4990,
    rating: 4.7,
    href: "https://kaspi.kz/shop/p/skin1004-nochnaja-madagascar-centella-hyalu-cica-sleeping-pack-100-ml-104868275/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h72/h66/64536374968350.jpg?format=gallery-medium",
    description: "Ночная маска, содержащая гиалуроновую кислоту, обеспечивает интенсивное увлажнение во время сна. Эта ночная маска обеспечивает экстремальное увлажнение во время сна, пробуждая вас с более пухлым и сияющим цветом лица на следующее утро."
  },
  {
    id: 8,
    categoryId: 2,
    name: "Skin1004 Madagascar Centella Hyalu-Cica Moisture Cream крем для лица 75 мл",
    price: 5990,
    rating: 4.9,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h78/h84/64533023490078.jpg?format=gallery-medium",
    href: "https://kaspi.kz/shop/p/skin1004-madagascar-centella-hyalu-cica-moisture-cream-krem-dlja-litsa-75-ml-104985153/?c=750000000",
    description: "Высокоэффективная крем-маска ночная для лица способствует выработке коллагена, стимулируют обменные и восстановительные процессы, тонизируют, придают упругость коже и заметно ее омолаживает."
  },

  {
    id: 9,
    categoryId: 3,
    name: 'Skin1004 тонер Hyalu-cica brightening Toner 210 мл',
    price: 4990,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h46/he1/68220136849438.jpg?format=gallery-medium",
    href: "https://kaspi.kz/shop/p/skin1004-toner-hyalu-cica-brightening-toner-210-ml-108578963/?c=750000000",
    description: "Модель: ботинки"
  },
  {
    id: 10,
    categoryId: 3,
    name: "Skin1004 мист Hyalu-cica Cloudy 120 мл",
    price: 5990,
    rating: 5.0,
    href: "https://kaspi.kz/shop/p/skin1004-mist-hyalu-cica-cloudy-120-ml-104904631/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h1b/hc9/64380231843870.jpg?format=gallery-medium",
    description: "Мист-облачко, который вернет коже чувство свежести, восстановит гидролипидный баланс, а также защитит кожу от внешних раздражителей."
  },
  {
    id: 11,
    categoryId: 1,
    name: "Round Lab 1025 Dokdo Cleansing пенка 150 мл",
    price: 4990,
    rating: 5.0,
    href: "https://kaspi.kz/shop/p/round-lab-1025-dokdo-cleansing-penka-150-ml-105850453/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h25/64365023625246.jpg?format=gallery-medium",
    description: "Мягкая пенка для умывания с морской водой Round Lab1025 Dokdo Cleanser подходит для деликатного очищения сухой и чувствительной кожи. Нежно удаляет все загрязнения, не провоцирует появления сухости и стянутости, сохраняет кожу увлажнённой даже после умывания."
  },
  {
    id: 12,
    categoryId: 1,
    name: "Dr. Jart Dermaclear Micro Foam гель-пенка 120 мл",
    price: 4790,
    rating: 4.9,
    href: "https://kaspi.kz/shop/p/dr-jart-dermaclear-micro-foam-gel--penka-120-ml-21900487/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h4e/h5e/63843502948382.jpg?format=gallery-medium",
    description: "Гипоаллергенная, мягкая пенка для умывания. Благодаря содержанию микрочастиц водорода, глины, пантенола и растительного комплекса, пенка эффективно очищает от загрязнений, удаляет макияж, не вызывая раздражения и не пересушивая кожу. Обладает нежной легкой текстурой, которая мгновенно вспенивается и не травмирует кожу лица."
  },
  {
    id: 13,
    categoryId: 1,
    name: "Dr. Althea Amino Acid Gentle Bubble Cleanser пенка 140 мл",
    price: 4490,
    rating: 4.9,
    href: "https://kaspi.kz/shop/p/dr-althea-amino-acid-gentle-bubble-cleanser-penka-140-ml-101506188/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc3/hb3/64343556849694.jpg?format=gallery-medium",
    description: "В средстве содержится бисаболол, который борется с воспалениями, раздражением, покраснением, улучшает состояние кожи при дерматологических проблемах, снимает зуд и шелушение."
  },
  {
    id: 14,
    categoryId: 1,
    name: "Dr. Jart Teatreement Cleansing Foam Mousse Nettoyante гель-пенка 120 мл",
    price: 6490,
    rating: 4.9,
    href: "https://kaspi.kz/shop/p/dr-jart-teatreement-cleansing-foam-mousse-nettoyante-gel--penka-120-ml-100670034/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h22/h4d/84188524576798.png?format=gallery-medium",
    description: "Лечебная гель-пенка для умывания с чайным деревом Ctrl A Teatreement Cleansing Foam мягко и деликатно очищает кожу, удаляет все загрязнения и излишки кожного сала.Чайное дерево(41%) нормализует работу сальных желёз, снижает жирность кожи, обладает антибактериальными действием и помогает в лечении акне."
  },
  {
    id: 15,
    categoryId: 3,
    name: "Dr. Jart тонер Ceramidin Liquid Moisturizing Toner 150 мл",
    price: 10290,
    rating: 4.8,
    href: "https://kaspi.kz/shop/p/dr-jart-toner-ceramidin-liquid-moisturizing-toner-150-ml-17700767/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/hf2/hd3/63786205577246.jpg?format=gallery-medium",
    description: "Тонер с керамидами поможет увлажнить кожу, предотвратив сухость и обезвоживание. Действует как жидкий кушон, укрепляя и защищая защитный барьер кожи с помощью керамидов. Средство питает обезвоженную кожу, делая ее мягкой и нежной."
  },
  {
    id: 16,
    categoryId: 3,
    name: "Dr. Althea тонер Fresh Deep Noni Toner 130 мл",
    price: 6790,
    rating: 4.9,
    href: "https://kaspi.kz/shop/p/dr-althea-toner-fresh-deep-noni-toner-130-ml-110951086/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h03/h45/81377101611038.jpg?format=gallery-medium",
    description: "Dr.Althea Fresh Deep Noni Toner — это средство для ухода за кожей, которое сочетает в себе преимущества экстракта нони и смеси четырех натуральных ингредиентов, включая центеллу азиатскую, инжир и кору феллодендрона амурского. Эта уникальная формула творит чудеса, успокаивая раздраженную кожу и обеспечивая быстрое увлажнение."
  },
  {
    id: 17,
    categoryId: 2,
    name: "Dr. Althea крем Azulene 147HA Intensive Soothing Cream для лица 50 мл",
    price: 7490,
    rating: 4.9,
    href: "https://kaspi.kz/shop/p/dr-althea-krem-azulene-147ha-intensive-soothing-cream-dlja-litsa-50-ml-101506230/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h37/h46/64342543466526.jpg?format=gallery-medium",
    description: "Крем для лица с азуленом Dr.Althea Azulene 147 HA Intensive Soothing Cream способствует восстановлению кожи. Азулен оказывает противовосполительное действие, успокаивает раздраженную кожу. Церамиды в составе восстанавливают барьерный слой кожи, защищают ее от обезвоживания."
  },
  {
    id: 18,
    categoryId: 4,
    name: "Маска для лица Dr. Althea тканевая Herb Therapy Velvet Mask 27 мл",
    price: 1500,
    rating: 4.7,
    href: "https://kaspi.kz/shop/p/dr-althea-tkanevaja-herb-therapy-velvet-mask-27-ml-106241679/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h8e/h3a/64536543002654.jpg?format=gallery-medium",
    description: " Ускоряет процессы заживления и помогает в борьбе с проблемной и чувствительной кожей. Укрепляет защитный функции кожи и повышает эластичность тканей."
  },
  {
    id: 19,
    categoryId: 4,
    name: "Маска для лица Dr. Jart тканевая Porecting Solution 28 мл",
    price: 900,
    rating: 4.8,
    href: "https://kaspi.kz/shop/p/dr-jart-tkanevaja-porecting-solution-28-ml-100794623/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h37/h5e/63941883756574.jpg?format=gallery-medium",
    description: "Листовая пузырьковая очищающая угольная маска для пор Dr. Jart+ Dermask Porecting Solution Bubbling Black Charcoal Sheet Mask, благодаря насыщенному составу пропитывающей эссенции и плотно прилегающей микроцеллюлозной основе, обеспечивает глубокое, интенсивное очищение кожи и пор от некротического слоя клеток, накопившихся токсинов, излишков себума, одновременно увлажняя, питая, успокаивая и разглаживая кожу."
  },
  {
    id: 20,
    categoryId: 4,
    name: "Маска для лица Round Lab тканевая Pine Tree Soothing Cica 5 шт по 25 мл",
    price: 4890,
    rating: 4.8,
    href: "https://kaspi.kz/shop/p/round-lab-tkanevaja-pine-tree-soothing-cica-5-sht-po-25-ml-105850493/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h0f/he9/64446685872158.jpg?format=gallery-medium",
    description: "Экстракт из опавших сосновых иголок успокаивает кожу. Тройная гиалуроновая кислота обеспечивает насыщенный и интенсивный увлажняющий уход. Лист с двойной волной охлаждает и насыщает кожу влагой благодаря структуре отверстий для воздуха. Запатентованный комплекс сосны и CICA быстро успокаивает чувствительную кожу."
  },
  {
    id: 21,
    categoryId: 4,
    name: "Маска для лица Dr. Jart тканевая Vital Hydra Solution 25 мл",
    price: 950,
    rating: 4.8,
    href: "https://kaspi.kz/shop/p/dr-jart-tkanevaja-vital-hydra-solution-25-ml-101095500/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd0/hd3/64229473484830.jpg?format=gallery-medium",
    description: "Тканевая маска для интенсивного увлажнения Dr.Jart+ Vital Hydra Solution с гиалуроновой кислотой и акваксилом. Ультратонкая маска плотно прилегает к коже и позволяет увлажняющим компонентам проникать глубоко в эпидермис, восполняя недостаток влаги на клеточном уровне."
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/