export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  href: string;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Skin1004 Madagascar Centella Light гидрофильное масло 200 мл',
    price: 5999,
    rating: 4.7,
    href: "https://kaspi.kz/shop/p/skin1004-madagascar-centella-light-gidrofil-noe-maslo-200-ml-103907513/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h27/82994195300382.jpg?format=gallery-medium",
    description: 'Это универсальное гипоаллергенное гидрофильное масло, предназначенное для удаления макияжа и кожного жира. Он производится с использованием метода мицеллы, который хорошо известен эффективным удалением макияжа и микро-пыли с лица. Это легкое очищающее масло не вызывает раздражения на лице, а также воспаление глаз. После умывания не оставляет масляную пленку. Легкая текстура оставляет ощущение мягкости и прохлады после нанесения.'
  },
  {
    id: 2,
    name: 'Skin1004 сыворотка Madagascar Centella Ampoule для лица 55 мл',
    price: 4859,
    rating: 4.9,
    href: "https://kaspi.kz/shop/p/skin1004-syvorotka-madagascar-centella-ampoule-dlja-litsa-55-ml-104765457/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/hb3/h8b/64910388396062.jpg?format=gallery-medium",
    description: 'Имеет противовоспалительный эффект, лечит прыщи, затягивает шрамы, расширенные поры, предотвращает потерю упругости и тонких линий, делая вашу кожу более сильной, увлажненной'
  },
  {
    id: 3,
    name: 'Skin1004 Madagascar Centella Ampoule пенка 125 мл',
    price: 3715,
    rating: 4.9,
    href: "https://kaspi.kz/shop/p/skin1004-madagascar-centella-ampoule-penka-125-ml-104868246/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/he2/hfa/65122471870494.jpg?format=gallery-medium",
    description: "Слабокислотная пенка для умывания, которая укрепляет и восстанавливает естественный защитный барьер кожи, успокаивает и увлажняет ее, делая цвет лица более здоровым."
  },
  {
    id: 4,
    name: "Skin1004 тоник Toning Toner 210 мл",
    price: 4950,
    rating: 4.8,
    href: "https://kaspi.kz/shop/p/skin1004-tonik-toning-toner-210-ml-104762771/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h6f/hea/64916331659294.jpg?format=gallery-medium",
    description: "Приносит облегчение и освежает раздраженную, чувствительную, проблемную и уставшую кожу, возвращая ей потерянную влагу, упругость и эластичность."
  },

  {
    id: 5,
    name: 'Skin1004 крем Madagascar Centella Cream для лица 75 мл',
    price: 6500,
    rating: 2.3,
    href: "https://kaspi.kz/shop/p/skin1004-krem-madagascar-centella-cream-dlja-litsa-75-ml-109249274/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h07/hb2/69823195480094.jpg?format=gallery-medium",
    description: "Питательный крем с центеллой SKIN1004 Madagascar Centella Cream наполняет кожу влагой, устраняет сухость, шелушение и чувство стянутости, укрепляет естественный защитный барьер, смягчает и разглаживает. Средство успокаивает, стимулирует регенерацию, снимает покраснение и раздражение."
  },
  {
    id: 6,
    name: "Skin1004 сыворотка Madagascar Centella Poremizing Fresh Ampoule для лица, для шеи 100 мл",
    price: 5389,
    rating: 4.8,
    href: "https://kaspi.kz/shop/p/skin1004-syvorotka-madagascar-centella-poremizing-fresh-ampoule-dlja-litsa-dlja-shei-100-ml-105500344/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h12/h1e/64537153634334.jpg?format=gallery-medium",
    description: ""
  },

  {
    id: 7,
    name: 'Маска для лица Skin1004 ночная Madagascar centella hyalu-cica sleeping pack 100 мл',
    price: 4990,
    rating: 4.7,
    href: "https://kaspi.kz/shop/p/skin1004-nochnaja-madagascar-centella-hyalu-cica-sleeping-pack-100-ml-104868275/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h72/h66/64536374968350.jpg?format=gallery-medium",
    description: "Ночная маска, содержащая гиалуроновую кислоту, обеспечивает интенсивное увлажнение во время сна. Эта ночная маска обеспечивает экстремальное увлажнение во время сна, пробуждая вас с более пухлым и сияющим цветом лица на следующее утро."
  },
  {
    id: 8,
    name: "Skin1004 Madagascar Centella Hyalu-Cica Moisture Cream крем для лица 75 мл",
    price: 5990,
    rating: 4.9,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h78/h84/64533023490078.jpg?format=gallery-medium",
    href: "https://kaspi.kz/shop/p/skin1004-madagascar-centella-hyalu-cica-moisture-cream-krem-dlja-litsa-75-ml-104985153/?c=750000000",
    description: "Высокоэффективная крем-маска ночная для лица способствует выработке коллагена, стимулируют обменные и восстановительные процессы, тонизируют, придают упругость коже и заметно ее омолаживает."
  },

  {
    id: 9,
    name: 'Skin1004 тонер Hyalu-cica brightening Toner 210 мл',
    price: 4990,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h46/he1/68220136849438.jpg?format=gallery-medium",
    href: "https://kaspi.kz/shop/p/skin1004-toner-hyalu-cica-brightening-toner-210-ml-108578963/?c=750000000",
    description: "Модель: ботинки"
  },
  {
    id: 10,
    name: "Skin1004 мист Hyalu-cica Cloudy 120 мл",
    price: 5990,
    rating: 5.0,
    href: "https://kaspi.kz/shop/p/skin1004-mist-hyalu-cica-cloudy-120-ml-104904631/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h1b/hc9/64380231843870.jpg?format=gallery-medium",
    description: "Мист-облачко, который вернет коже чувство свежести, восстановит гидролипидный баланс, а также защитит кожу от внешних раздражителей."
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/