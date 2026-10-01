import { Question } from './types.ts';

export const QUESTIONS_DATA: Question[] = [
  // 1-20: Presente — Preguntas con 4 respuestas
  {
    id: 1,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué haces por la mañana?',
    hy: 'Ի՞նչ ես անում առավոտյան։',
    options: [
      { id: 'a', es: 'Desayuno y tomo café.', hy: 'Նախաճաշում եմ և սուրճ եմ խմում։', isCorrect: true },
      { id: 'b', es: 'Vivo en Madrid.', hy: 'Ապրում եմ Մադրիդում։', isCorrect: false },
      { id: 'c', es: 'Mi hermano es médico.', hy: 'Եղբայրս բժիշկ է։', isCorrect: false },
      { id: 'd', es: 'Tengo una bicicleta.', hy: 'Հեծանիվ ունեմ։', isCorrect: false }
    ]
  },
  {
    id: 2,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Dónde trabajas?',
    hy: 'Որտե՞ղ ես աշխատում։',
    options: [
      { id: 'a', es: 'Trabajo en una oficina.', hy: 'Աշխատում եմ գրասենյակում։', isCorrect: true },
      { id: 'b', es: 'Como pasta.', hy: 'Մակարոն եմ ուտում։', isCorrect: false },
      { id: 'c', es: 'Hablo con mi amigo.', hy: 'Խոսում եմ ընկերոջս հետ։', isCorrect: false },
      { id: 'd', es: 'Tengo treinta años.', hy: 'Երեսուն տարեկան եմ։', isCorrect: false }
    ]
  },
  {
    id: 3,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿A qué hora te levantas?',
    hy: 'Ժամը քանի՞սին ես արթնանում։',
    options: [
      { id: 'a', es: 'Me levanto a las siete.', hy: 'Արթնանում եմ յոթին։', isCorrect: true },
      { id: 'b', es: 'Vivo cerca del centro.', hy: 'Ապրում եմ կենտրոնի մոտ։', isCorrect: false },
      { id: 'c', es: 'Me gusta el fútbol.', hy: 'Սիրում եմ ֆուտբոլ։', isCorrect: false },
      { id: 'd', es: 'Trabajo con mi hermano.', hy: 'Աշխատում եմ եղբորս հետ։', isCorrect: false }
    ]
  },
  {
    id: 4,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué comes normalmente al mediodía?',
    hy: 'Սովորաբար ի՞նչ ես ուտում կեսօրին։',
    options: [
      { id: 'a', es: 'Como arroz con pollo.', hy: 'Ուտում եմ բրինձ հավի մսով։', isCorrect: true },
      { id: 'b', es: 'Voy al trabajo en coche.', hy: 'Աշխատանքի եմ գնում մեքենայով։', isCorrect: false },
      { id: 'c', es: 'Mi casa es grande.', hy: 'Իմ տունը մեծ է։', isCorrect: false },
      { id: 'd', es: 'Estudio español.', hy: 'Իսպաներեն եմ սովորում։', isCorrect: false }
    ]
  },
  {
    id: 5,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Con quién vives?',
    hy: 'Ո՞ւմ հետ ես ապրում։',
    options: [
      { id: 'a', es: 'Vivo con mi familia.', hy: 'Ապրում եմ ընտանիքիս հետ։', isCorrect: true },
      { id: 'b', es: 'Trabajo hasta las seis.', hy: 'Աշխատում եմ մինչև վեցը։', isCorrect: false },
      { id: 'c', es: 'Me gusta cocinar.', hy: 'Սիրում եմ պատրաստել։', isCorrect: false },
      { id: 'd', es: 'Voy al supermercado.', hy: 'Գնում եմ սուպերմարկետ։', isCorrect: false }
    ]
  },
  {
    id: 6,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué haces cuando estás cansado?',
    hy: 'Ի՞նչ ես անում, երբ հոգնած ես։',
    options: [
      { id: 'a', es: 'Descanso un poco.', hy: 'Մի քիչ հանգստանում եմ։', isCorrect: true },
      { id: 'b', es: 'Vivo en un piso pequeño.', hy: 'Ապրում եմ փոքր բնակարանում։', isCorrect: false },
      { id: 'c', es: 'Tengo dos hermanos.', hy: 'Երկու եղբայր ունեմ։', isCorrect: false },
      { id: 'd', es: 'El café cuesta dos euros.', hy: 'Սուրճն արժե երկու եվրո։', isCorrect: false }
    ]
  },
  {
    id: 7,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Cómo vas al trabajo?',
    hy: 'Ինչպե՞ս ես գնում աշխատանքի։',
    options: [
      { id: 'a', es: 'Voy en autobús.', hy: 'Գնում եմ ավտոբուսով։', isCorrect: true },
      { id: 'b', es: 'Trabajo ocho horas.', hy: 'Աշխատում եմ ութ ժամ։', isCorrect: false },
      { id: 'c', es: 'Tengo mucho trabajo.', hy: 'Շատ աշխատանք ունեմ։', isCorrect: false },
      { id: 'd', es: 'Empiezo a las nueve.', hy: 'Սկսում եմ իննին։', isCorrect: false }
    ]
  },
  {
    id: 8,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Por qué estudias español?',
    hy: 'Ինչո՞ւ ես իսպաներեն սովորում։',
    options: [
      { id: 'a', es: 'Porque quiero hablar con más personas.', hy: 'Որովհետև ուզում եմ խոսել ավելի շատ մարդկանց հետ։', isCorrect: true },
      { id: 'b', es: 'Porque vivo en una casa.', hy: 'Որովհետև ապրում եմ տանը։', isCorrect: false },
      { id: 'c', es: 'Porque desayuno a las ocho.', hy: 'Որովհետև նախաճաշում եմ ութին։', isCorrect: false },
      { id: 'd', es: 'Porque mi camiseta es azul.', hy: 'Որովհետև իմ շապիկը կապույտ է։', isCorrect: false }
    ]
  },
  {
    id: 9,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué haces los fines de semana?',
    hy: 'Ի՞նչ ես անում հանգստյան օրերին։',
    options: [
      { id: 'a', es: 'Salgo con mis amigos.', hy: 'Դուրս եմ գալիս ընկերներիս հետ։', isCorrect: true },
      { id: 'b', es: 'Mi amigo tiene un perro.', hy: 'Ընկերս շուն ունի։', isCorrect: false },
      { id: 'c', es: 'La farmacia está cerca.', hy: 'Դեղատունը մոտ է։', isCorrect: false },
      { id: 'd', es: 'El libro cuesta diez euros.', hy: 'Գիրքն արժե տասը եվրո։', isCorrect: false }
    ]
  },
  {
    id: 10,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué deporte practicas?',
    hy: 'Ի՞նչ սպորտով ես զբաղվում։',
    options: [
      { id: 'a', es: 'Juego al fútbol.', hy: 'Ֆուտբոլ եմ խաղում։', isCorrect: true },
      { id: 'b', es: 'Leo una novela.', hy: 'Վեպ եմ կարդում։', isCorrect: false },
      { id: 'c', es: 'Cocino muy bien.', hy: 'Շատ լավ եմ եփում։', isCorrect: false },
      { id: 'd', es: 'Voy al banco.', hy: 'Գնում եմ բանկ։', isCorrect: false }
    ]
  },
  {
    id: 11,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué haces antes de dormir?',
    hy: 'Ի՞նչ ես անում քնելուց առաջ։',
    options: [
      { id: 'a', es: 'Leo un poco.', hy: 'Մի քիչ կարդում եմ։', isCorrect: true },
      { id: 'b', es: 'Compro pan.', hy: 'Հաց եմ գնում։', isCorrect: false },
      { id: 'c', es: 'Trabajo en un hospital.', hy: 'Աշխատում եմ հիվանդանոցում։', isCorrect: false },
      { id: 'd', es: 'Mi amigo vive lejos.', hy: 'Ընկերս հեռու է ապրում։', isCorrect: false }
    ]
  },
  {
    id: 12,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué bebes con el desayuno?',
    hy: 'Ի՞նչ ես խմում նախաճաշի հետ։',
    options: [
      { id: 'a', es: 'Bebo café.', hy: 'Սուրճ եմ խմում։', isCorrect: true },
      { id: 'b', es: 'Veo una película.', hy: 'Ֆիլմ եմ դիտում։', isCorrect: false },
      { id: 'c', es: 'Escucho a mi profesor.', hy: 'Լսում եմ ուսուցչիս։', isCorrect: false },
      { id: 'd', es: 'Escribo mensajes.', hy: 'Հաղորդագրություններ եմ գրում։', isCorrect: false }
    ]
  },
  {
    id: 13,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Dónde compras comida?',
    hy: 'Որտե՞ղ ես սնունդ գնում։',
    options: [
      { id: 'a', es: 'En el supermercado.', hy: 'Սուպերմարկետում։', isCorrect: true },
      { id: 'b', es: 'A las ocho.', hy: 'Ժամը ութին։', isCorrect: false },
      { id: 'c', es: 'Con mi hermana.', hy: 'Քրոջս հետ։', isCorrect: false },
      { id: 'd', es: 'Porque tengo hambre.', hy: 'Որովհետև սոված եմ։', isCorrect: false }
    ]
  },
  {
    id: 14,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué haces cuando tienes hambre?',
    hy: 'Ի՞նչ ես անում, երբ սոված ես։',
    options: [
      { id: 'a', es: 'Como algo.', hy: 'Ինչ-որ բան եմ ուտում։', isCorrect: true },
      { id: 'b', es: 'Duermo ocho horas.', hy: 'Քնում եմ ութ ժամ։', isCorrect: false },
      { id: 'c', es: 'Escucho música.', hy: 'Երաժշտություն եմ լսում։', isCorrect: false },
      { id: 'd', es: 'Voy en metro.', hy: 'Մետրոյով եմ գնում։', isCorrect: false }
    ]
  },
  {
    id: 15,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué haces cuando no entiendes una palabra?',
    hy: 'Ի՞նչ ես անում, երբ բառը չես հասկանում։',
    options: [
      { id: 'a', es: 'Pregunto al profesor.', hy: 'Հարցնում եմ ուսուցչին։', isCorrect: true },
      { id: 'b', es: 'Cierro la ventana.', hy: 'Փակում եմ պատուհանը։', isCorrect: false },
      { id: 'c', es: 'Compro zapatos.', hy: 'Կոշիկներ եմ գնում։', isCorrect: false },
      { id: 'd', es: 'Preparo la cena.', hy: 'Ընթրիք եմ պատրաստում։', isCorrect: false }
    ]
  },
  {
    id: 16,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Quién prepara la cena en tu casa?',
    hy: 'Ո՞վ է ձեր տանը պատրաստում ընթրիքը։',
    options: [
      { id: 'a', es: 'Mi madre prepara la cena.', hy: 'Մայրս է պատրաստում ընթրիքը։', isCorrect: true },
      { id: 'b', es: 'La cocina es pequeña.', hy: 'Խոհանոցը փոքր է։', isCorrect: false },
      { id: 'c', es: 'Cenamos a las ocho.', hy: 'Ընթրում ենք ժամը ութին։', isCorrect: false },
      { id: 'd', es: 'Me gusta la sopa.', hy: 'Սիրում եմ ապուր։', isCorrect: false }
    ]
  },
  {
    id: 17,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué haces cuando llueve?',
    hy: 'Ի՞նչ ես անում, երբ անձրև է գալիս։',
    options: [
      { id: 'a', es: 'Uso un paraguas.', hy: 'Անձրևանոց եմ օգտագործում։', isCorrect: true },
      { id: 'b', es: 'Compro leche.', hy: 'Կաթ եմ գնում։', isCorrect: false },
      { id: 'c', es: 'Hablo español.', hy: 'Իսպաներեն եմ խոսում։', isCorrect: false },
      { id: 'd', es: 'Juego al tenis.', hy: 'Թենիս եմ խաղում։', isCorrect: false }
    ]
  },
  {
    id: 18,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Dónde guardas la ropa?',
    hy: 'Որտե՞ղ ես պահում հագուստը։',
    options: [
      { id: 'a', es: 'En el armario.', hy: 'Պահարանում։', isCorrect: true },
      { id: 'b', es: 'En la farmacia.', hy: 'Դեղատանը։', isCorrect: false },
      { id: 'c', es: 'En el estadio.', hy: 'Մարզադաշտում։', isCorrect: false },
      { id: 'd', es: 'En la panadería.', hy: 'Հացի փռում։', isCorrect: false }
    ]
  },
  {
    id: 19,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué haces con el móvil?',
    hy: 'Ի՞նչ ես անում հեռախոսով։',
    options: [
      { id: 'a', es: 'Envío mensajes.', hy: 'Հաղորդագրություններ եմ ուղարկում։', isCorrect: true },
      { id: 'b', es: 'Cocino pasta.', hy: 'Մակարոն եմ եփում։', isCorrect: false },
      { id: 'c', es: 'Abro la puerta.', hy: 'Դուռն եմ բացում։', isCorrect: false },
      { id: 'd', es: 'Lavo los platos.', hy: 'Ափսեներն եմ լվանում։', isCorrect: false }
    ]
  },
  {
    id: 20,
    category: 'basic',
    categoryTitleEs: 'Presente — Preguntas con 4 respuestas',
    categoryTitleHy: 'Ներկա ժամանակ — 4 տարբերակով հարցեր',
    es: '¿Qué haces cuando tienes frío?',
    hy: 'Ի՞նչ ես անում, երբ ցուրտ է։',
    options: [
      { id: 'a', es: 'Me pongo una chaqueta.', hy: 'Բաճկոն եմ հագնում։', isCorrect: true },
      { id: 'b', es: 'Abro todas las ventanas.', hy: 'Բացում եմ բոլոր պատուհանները։', isCorrect: false },
      { id: 'c', es: 'Bebo agua fría.', hy: 'Սառը ջուր եմ խմում։', isCorrect: false },
      { id: 'd', es: 'Voy a nadar.', hy: 'Գնում եմ լողալու։', isCorrect: false }
    ]
  },

  // 21-30: Un poco más difíciles (Մի փոքր ավելի դժվար)
  {
    id: 21,
    category: 'medium',
    categoryTitleEs: 'Un poco más difíciles',
    categoryTitleHy: 'Մի փոքր ավելի դժվար',
    es: '¿Qué dices cuando no conoces una dirección?',
    hy: 'Ի՞նչ ես ասում, երբ հասցեն չգիտես։',
    options: [
      { id: 'a', es: 'Perdona, ¿dónde está esta calle?', hy: 'Ներողություն, որտե՞ղ է այս փողոցը։', isCorrect: true },
      { id: 'b', es: 'Quiero dos kilos de tomates.', hy: 'Ուզում եմ երկու կիլո լոլիկ։', isCorrect: false },
      { id: 'c', es: '¿Cuánto cuesta esta camisa?', hy: 'Ի՞նչ արժե այս վերնաշապիկը։', isCorrect: false },
      { id: 'd', es: 'La cuenta, por favor.', hy: 'Հաշիվը, խնդրեմ։', isCorrect: false }
    ]
  },
  {
    id: 22,
    category: 'medium',
    categoryTitleEs: 'Un poco más difíciles',
    categoryTitleHy: 'Մի փոքր ավելի դժվար',
    es: '¿Qué haces si llegas tarde al trabajo?',
    hy: 'Ի՞նչ ես անում, եթե ուշանում ես աշխատանքից։',
    options: [
      { id: 'a', es: 'Aviso a mi jefe.', hy: 'Տեղեկացնում եմ ղեկավարիս։', isCorrect: true },
      { id: 'b', es: 'Compro un sofá.', hy: 'Բազմոց եմ գնում։', isCorrect: false },
      { id: 'c', es: 'Lavo el coche.', hy: 'Մեքենան եմ լվանում։', isCorrect: false },
      { id: 'd', es: 'Pido un postre.', hy: 'Աղանդեր եմ պատվիրում։', isCorrect: false }
    ]
  },
  {
    id: 23,
    category: 'medium',
    categoryTitleEs: 'Un poco más difíciles',
    categoryTitleHy: 'Մի փոքր ավելի դժվար',
    es: '¿Qué dices cuando quieres entrar en una habitación?',
    hy: 'Ի՞նչ ես ասում, երբ ուզում ես մտնել սենյակ։',
    options: [
      { id: 'a', es: '¿Puedo pasar?', hy: 'Կարո՞ղ եմ ներս մտնել։', isCorrect: true },
      { id: 'b', es: '¿Cuánto cuesta?', hy: 'Ի՞նչ արժե։', isCorrect: false },
      { id: 'c', es: '¿Qué hora es?', hy: 'Ժամը քանի՞սն է։', isCorrect: false },
      { id: 'd', es: '¿Dónde comes?', hy: 'Որտե՞ղ ես ուտում։', isCorrect: false }
    ]
  },
  {
    id: 24,
    category: 'medium',
    categoryTitleEs: 'Un poco más difíciles',
    categoryTitleHy: 'Մի փոքր ավելի դժվար',
    es: '¿Qué haces cuando tienes sed?',
    hy: 'Ի՞նչ ես անում, երբ ծարավ ես։',
    options: [
      { id: 'a', es: 'Bebo agua.', hy: 'Ջուր եմ խմում։', isCorrect: true },
      { id: 'b', es: 'Leo un periódico.', hy: 'Թերթ եմ կարդում։', isCorrect: false },
      { id: 'c', es: 'Llamo a mi amigo.', hy: 'Զանգում եմ ընկերոջս։', isCorrect: false },
      { id: 'd', es: 'Cambio de ropa.', hy: 'Հագուստս եմ փոխում։', isCorrect: false }
    ]
  },
  {
    id: 25,
    category: 'medium',
    categoryTitleEs: 'Un poco más difíciles',
    categoryTitleHy: 'Մի փոքր ավելի դժվար',
    es: '¿Qué haces cuando tu teléfono no tiene batería?',
    hy: 'Ի՞նչ ես անում, երբ հեռախոսիդ մարտկոցը դատարկ է։',
    options: [
      { id: 'a', es: 'Lo cargo.', hy: 'Լիցքավորում եմ։', isCorrect: true },
      { id: 'b', es: 'Lo cocino.', hy: 'Եփում եմ։', isCorrect: false },
      { id: 'c', es: 'Lo conduzco.', hy: 'Վարում եմ։', isCorrect: false },
      { id: 'd', es: 'Lo como.', hy: 'Ուտում եմ։', isCorrect: false }
    ]
  },
  {
    id: 26,
    category: 'medium',
    categoryTitleEs: 'Un poco más difíciles',
    categoryTitleHy: 'Մի փոքր ավելի դժվար',
    es: '¿Qué haces cuando alguien llama a la puerta?',
    hy: 'Ի՞նչ ես անում, երբ ինչ-որ մեկը դուռն է թակում։',
    options: [
      { id: 'a', es: 'Abro la puerta.', hy: 'Դուռն եմ բացում։', isCorrect: true },
      { id: 'b', es: 'Lavo el pelo.', hy: 'Մազերս եմ լվանում։', isCorrect: false },
      { id: 'c', es: 'Leo la mesa.', hy: 'Սեղանն եմ կարդում։', isCorrect: false },
      { id: 'd', es: 'Bebo la ventana.', hy: 'Պատուհանն եմ խմում։', isCorrect: false }
    ]
  },
  {
    id: 27,
    category: 'medium',
    categoryTitleEs: 'Un poco más difíciles',
    categoryTitleHy: 'Մի փոքր ավելի դժվար',
    es: '¿Qué haces si no sabes una respuesta?',
    hy: 'Ի՞նչ ես անում, եթե պատասխանը չգիտես։',
    options: [
      { id: 'a', es: 'Pregunto o digo que no lo sé.', hy: 'Հարցնում եմ կամ ասում եմ, որ չգիտեմ։', isCorrect: true },
      { id: 'b', es: 'Voy al aeropuerto.', hy: 'Գնում եմ օդանավակայան։', isCorrect: false },
      { id: 'c', es: 'Compro una camiseta.', hy: 'Շապիկ եմ գնում։', isCorrect: false },
      { id: 'd', es: 'Preparo arroz.', hy: 'Բրինձ եմ պատրաստում։', isCorrect: false }
    ]
  },
  {
    id: 28,
    category: 'medium',
    categoryTitleEs: 'Un poco más difíciles',
    categoryTitleHy: 'Մի փոքր ավելի դժվար',
    es: '¿Qué haces cuando quieres hablar con alguien por teléfono?',
    hy: 'Ի՞նչ ես անում, երբ ուզում ես հեռախոսով խոսել մեկի հետ։',
    options: [
      { id: 'a', es: 'Lo llamo.', hy: 'Զանգում եմ նրան։', isCorrect: true },
      { id: 'b', es: 'Lo cocino.', hy: 'Եփում եմ նրան։', isCorrect: false },
      { id: 'c', es: 'Lo abro.', hy: 'Բացում եմ նրան։', isCorrect: false },
      { id: 'd', es: 'Lo llevo en tren.', hy: 'Գնացքով եմ տանում նրան։', isCorrect: false }
    ]
  },
  {
    id: 29,
    category: 'medium',
    categoryTitleEs: 'Un poco más difíciles',
    categoryTitleHy: 'Մի փոքր ավելի դժվար',
    es: '¿Qué haces cuando estás enfermo?',
    hy: 'Ի՞նչ ես անում, երբ հիվանդ ես։',
    options: [
      { id: 'a', es: 'Descanso y voy al médico si es necesario.', hy: 'Հանգստանում եմ և բժշկի եմ գնում, եթե անհրաժեշտ է։', isCorrect: true },
      { id: 'b', es: 'Juego al fútbol durante cinco horas.', hy: 'Հինգ ժամ ֆուտբոլ եմ խաղում։', isCorrect: false },
      { id: 'c', es: 'Trabajo toda la noche.', hy: 'Ամբողջ գիշեր աշխատում եմ։', isCorrect: false },
      { id: 'd', es: 'No duermo nunca.', hy: 'Երբեք չեմ քնում։', isCorrect: false }
    ]
  },
  {
    id: 30,
    category: 'medium',
    categoryTitleEs: 'Un poco más difíciles',
    categoryTitleHy: 'Մի փոքր ավելի դժվար',
    es: '¿Qué haces si pierdes las llaves?',
    hy: 'Ի՞նչ ես անում, եթե կորցնում ես բանալիները։',
    options: [
      { id: 'a', es: 'Las busco.', hy: 'Փնտրում եմ դրանք։', isCorrect: true },
      { id: 'b', es: 'Las desayuno.', hy: 'Նախաճաշում եմ դրանք։', isCorrect: false },
      { id: 'c', es: 'Las escucho.', hy: 'Լսում եմ դրանց։', isCorrect: false },
      { id: 'd', es: 'Las cocino.', hy: 'Եփում եմ դրանք։', isCorrect: false }
    ]
  },

  // 31-40: Preguntas con trampa (Խաբուսիկ հարցեր)
  {
    id: 31,
    category: 'tricky',
    categoryTitleEs: 'Preguntas con trampa',
    categoryTitleHy: 'Խաբուսիկ հարցեր',
    es: '¿Qué haces con los ojos?',
    hy: 'Ի՞նչ ես անում աչքերով։',
    options: [
      { id: 'a', es: 'Veo.', hy: 'Տեսնում եմ։', isCorrect: true },
      { id: 'b', es: 'Escucho.', hy: 'Լսում եմ։', isCorrect: false },
      { id: 'c', es: 'Huelo.', hy: 'Հոտոտում եմ։', isCorrect: false },
      { id: 'd', es: 'Hablo.', hy: 'Խոսում եմ։', isCorrect: false }
    ]
  },
  {
    id: 32,
    category: 'tricky',
    categoryTitleEs: 'Preguntas con trampa',
    categoryTitleHy: 'Խաբուսիկ հարցեր',
    es: '¿Qué haces con los oídos?',
    hy: 'Ի՞նչ ես անում ականջներով։',
    options: [
      { id: 'a', es: 'Oigo.', hy: 'Լսում եմ։', isCorrect: true },
      { id: 'b', es: 'Veo.', hy: 'Տեսնում եմ։', isCorrect: false },
      { id: 'c', es: 'Como.', hy: 'Ուտում եմ։', isCorrect: false },
      { id: 'd', es: 'Camino.', hy: 'Քայլում եմ։', isCorrect: false }
    ]
  },
  {
    id: 33,
    category: 'tricky',
    categoryTitleEs: 'Preguntas con trampa',
    categoryTitleHy: 'Խաբուսիկ հարցեր',
    es: '¿Qué haces con la nariz?',
    hy: 'Ի՞նչ ես անում քթով։',
    options: [
      { id: 'a', es: 'Huelo.', hy: 'Հոտոտում եմ։', isCorrect: true },
      { id: 'b', es: 'Escribo.', hy: 'Գրում եմ։', isCorrect: false },
      { id: 'c', es: 'Leo.', hy: 'Կարդում եմ։', isCorrect: false },
      { id: 'd', es: 'Corro.', hy: 'Վազում եմ։', isCorrect: false }
    ]
  },
  {
    id: 34,
    category: 'tricky',
    categoryTitleEs: 'Preguntas con trampa',
    categoryTitleHy: 'Խաբուսիկ հարցեր',
    es: '¿Qué haces con un libro?',
    hy: 'Ի՞նչ ես անում գրքի հետ։',
    options: [
      { id: 'a', es: 'Lo leo.', hy: 'Կարդում եմ այն։', isCorrect: true },
      { id: 'b', es: 'Lo bebo.', hy: 'Խմում եմ այն։', isCorrect: false },
      { id: 'c', es: 'Lo escucho.', hy: 'Լսում եմ այն։', isCorrect: false },
      { id: 'd', es: 'Lo cocino.', hy: 'Եփում եմ այն։', isCorrect: false }
    ]
  },
  {
    id: 35,
    category: 'tricky',
    categoryTitleEs: 'Preguntas con trampa',
    categoryTitleHy: 'Խաբուսիկ հարցեր',
    es: '¿Qué haces con una canción?',
    hy: 'Ի՞նչ ես անում երգի հետ։',
    options: [
      { id: 'a', es: 'La escucho.', hy: 'Լսում եմ այն։', isCorrect: true },
      { id: 'b', es: 'La como.', hy: 'Ուտում եմ այն։', isCorrect: false },
      { id: 'c', es: 'La conduzco.', hy: 'Վարում եմ այն։', isCorrect: false },
      { id: 'd', es: 'La abro con una llave.', hy: 'Բանալիով եմ բացում այն։', isCorrect: false }
    ]
  },
  {
    id: 36,
    category: 'tricky',
    categoryTitleEs: 'Preguntas con trampa',
    categoryTitleHy: 'Խաբուսիկ հարցեր',
    es: '¿Qué haces antes de cruzar una calle?',
    hy: 'Ի՞նչ ես անում փողոցն անցնելուց առաջ։',
    options: [
      { id: 'a', es: 'Miro a los dos lados.', hy: 'Նայում եմ երկու կողմերին։', isCorrect: true },
      { id: 'b', es: 'Cierro los ojos.', hy: 'Փակում եմ աչքերս։', isCorrect: false },
      { id: 'c', es: 'Me siento en el suelo.', hy: 'Նստում եմ գետնին։', isCorrect: false },
      { id: 'd', es: 'Empiezo a cocinar.', hy: 'Սկսում եմ եփել։', isCorrect: false }
    ]
  },
  {
    id: 37,
    category: 'tricky',
    categoryTitleEs: 'Preguntas con trampa',
    categoryTitleHy: 'Խաբուսիկ հարցեր',
    es: '¿Dónde duermes normalmente?',
    hy: 'Սովորաբար որտե՞ղ ես քնում։',
    options: [
      { id: 'a', es: 'En una cama.', hy: 'Անկողնում։', isCorrect: true },
      { id: 'b', es: 'En un horno.', hy: 'Վառարանում։', isCorrect: false },
      { id: 'c', es: 'En una nevera.', hy: 'Սառնարանում։', isCorrect: false },
      { id: 'd', es: 'En una ducha.', hy: 'Ցնցուղում։', isCorrect: false }
    ]
  },
  {
    id: 38,
    category: 'tricky',
    categoryTitleEs: 'Preguntas con trampa',
    categoryTitleHy: 'Խաբուսիկ հարցեր',
    es: '¿Qué usas cuando llueve?',
    hy: 'Ի՞նչ ես օգտագործում, երբ անձրև է գալիս։',
    options: [
      { id: 'a', es: 'Un paraguas.', hy: 'Անձրևանոց։', isCorrect: true },
      { id: 'b', es: 'Un tenedor.', hy: 'Պատառաքաղ։', isCorrect: false },
      { id: 'c', es: 'Una almohada.', hy: 'Բարձ։', isCorrect: false },
      { id: 'd', es: 'Un cepillo de dientes.', hy: 'Ատամի խոզանակ։', isCorrect: false }
    ]
  },
  {
    id: 39,
    category: 'tricky',
    categoryTitleEs: 'Preguntas con trampa',
    categoryTitleHy: 'Խաբուսիկ հարցեր',
    es: '¿Qué haces cuando la habitación está oscura?',
    hy: 'Ի՞նչ ես անում, երբ սենյակը մութ է։',
    options: [
      { id: 'a', es: 'Enciendo la luz.', hy: 'Միացնում եմ լույսը։', isCorrect: true },
      { id: 'b', es: 'Abro el frigorífico.', hy: 'Բացում եմ սառնարանը։', isCorrect: false },
      { id: 'c', es: 'Lavo los zapatos.', hy: 'Լվանում եմ կոշիկները։', isCorrect: false },
      { id: 'd', es: 'Bebo una silla.', hy: 'Աթոռ եմ խմում։', isCorrect: false }
    ]
  },
  {
    id: 40,
    category: 'tricky',
    categoryTitleEs: 'Preguntas con trampa',
    categoryTitleHy: 'Խաբուսիկ հարցեր',
    es: '¿Qué haces si hace mucho calor?',
    hy: 'Ի՞նչ ես անում, եթե շատ շոգ է։',
    options: [
      { id: 'a', es: 'Bebo agua y busco un lugar fresco.', hy: 'Ջուր եմ խմում և զով տեղ եմ փնտրում։', isCorrect: true },
      { id: 'b', es: 'Me pongo tres abrigos.', hy: 'Երեք վերարկու եմ հագնում։', isCorrect: false },
      { id: 'c', es: 'Enciendo la calefacción.', hy: 'Միացնում եմ ջեռուցումը։', isCorrect: false },
      { id: 'd', es: 'Tomo sopa muy caliente.', hy: 'Շատ տաք ապուր եմ ուտում։', isCorrect: false }
    ]
  },

  // 41-50: Responde rápido (Արագ պատասխանիր)
  {
    id: 41,
    category: 'fast',
    categoryTitleEs: 'Responde rápido',
    categoryTitleHy: 'Արագ պատասխանիր',
    es: '¿Qué haces cuando alguien te dice «gracias»?',
    hy: 'Ի՞նչ ես ասում, երբ ինչ-որ մեկը քեզ ասում է «շնորհակալություն»։',
    options: [
      { id: 'a', es: 'De nada.', hy: 'Խնդրեմ (արժե չէ)։', isCorrect: true },
      { id: 'b', es: 'Buenos días.', hy: 'Բարի լույս։', isCorrect: false },
      { id: 'c', es: 'Hasta mañana.', hy: 'Մինչ վաղը։', isCorrect: false },
      { id: 'd', es: 'Buen provecho.', hy: 'Բարի ախորժակ։', isCorrect: false }
    ]
  },
  {
    id: 42,
    category: 'fast',
    categoryTitleEs: 'Responde rápido',
    categoryTitleHy: 'Արագ պատասխանիր',
    es: '¿Qué dices cuando no oyes bien?',
    hy: 'Ի՞նչ ես ասում, երբ լավ չես լսում։',
    options: [
      { id: 'a', es: '¿Puedes repetir, por favor?', hy: 'Կարո՞ղ ես կրկնել, խնդրեմ։', isCorrect: true },
      { id: 'b', es: 'Quiero pagar con tarjeta.', hy: 'Ուզում եմ քարտով վճարել։', isCorrect: false },
      { id: 'c', es: 'Tengo hambre.', hy: 'Սոված եմ։', isCorrect: false },
      { id: 'd', es: '¿Dónde está el baño?', hy: 'Որտե՞ղ է զուգարանը։', isCorrect: false }
    ]
  },
  {
    id: 43,
    category: 'fast',
    categoryTitleEs: 'Responde rápido',
    categoryTitleHy: 'Արագ պատասխանիր',
    es: '¿Qué dices cuando conoces a alguien por primera vez?',
    hy: 'Ի՞նչ ես ասում, երբ առաջին անգամ ծանոթանում ես մեկի հետ։',
    options: [
      { id: 'a', es: 'Encantado/a.', hy: 'Հաճելի է ծանոթանալ։', isCorrect: true },
      { id: 'b', es: 'Buen viaje.', hy: 'Բարի ճանապարհ։', isCorrect: false },
      { id: 'c', es: 'Buen provecho.', hy: 'Բարի ախորժակ։', isCorrect: false },
      { id: 'd', es: 'Feliz cumpleaños.', hy: 'Շնորհավոր ծնունդ։', isCorrect: false }
    ]
  },
  {
    id: 44,
    category: 'fast',
    categoryTitleEs: 'Responde rápido',
    categoryTitleHy: 'Արագ պատասխանիր',
    es: '¿Qué dices antes de comer?',
    hy: 'Ի՞նչ ես ասում ուտելուց առաջ։',
    options: [
      { id: 'a', es: 'Buen provecho.', hy: 'Բարի ախորժակ։', isCorrect: true },
      { id: 'b', es: 'Buen viaje.', hy: 'Բարի ճանապարհ։', isCorrect: false },
      { id: 'c', es: 'Buenas noches.', hy: 'Բարի գիշեր։', isCorrect: false },
      { id: 'd', es: 'Mucha suerte.', hy: 'Հաջողություն։', isCorrect: false }
    ]
  },
  {
    id: 45,
    category: 'fast',
    categoryTitleEs: 'Responde rápido',
    categoryTitleHy: 'Արագ պատասխանիր',
    es: '¿Qué dices cuando alguien tiene un examen?',
    hy: 'Ի՞նչ ես ասում, երբ ինչ-որ մեկը քննություն ունի։',
    options: [
      { id: 'a', es: '¡Mucha suerte!', hy: 'Հաջողությո՜ւն։', isCorrect: true },
      { id: 'b', es: '¡Buen provecho!', hy: 'Բարի ախորժակ։', isCorrect: false },
      { id: 'c', es: '¡Feliz viaje!', hy: 'Բարի ճանապարհ։', isCorrect: false },
      { id: 'd', es: '¡Buenos días!', hy: 'Բարի լույս։', isCorrect: false }
    ]
  },
  {
    id: 46,
    category: 'fast',
    categoryTitleEs: 'Responde rápido',
    categoryTitleHy: 'Արագ պատասխանիր',
    es: '¿Qué haces si no encuentras el supermercado?',
    hy: 'Ի՞նչ ես անում, եթե սուպերմարկետը չես գտնում։',
    options: [
      { id: 'a', es: 'Pregunto dónde está.', hy: 'Հարցնում եմ, թե որտեղ է։', isCorrect: true },
      { id: 'b', es: 'Pido la cuenta.', hy: 'Հաշիվն եմ խնդրում։', isCorrect: false },
      { id: 'c', es: 'Cocino en la calle.', hy: 'Փողոցում եմ եփում։', isCorrect: false },
      { id: 'd', es: 'Me pongo a dormir.', hy: 'Քնում եմ։', isCorrect: false }
    ]
  },
  {
    id: 47,
    category: 'fast',
    categoryTitleEs: 'Responde rápido',
    categoryTitleHy: 'Արագ պատասխանիր',
    es: '¿Qué dices en un restaurante cuando quieres pagar?',
    hy: 'Ի՞նչ ես ասում ռեստորանում, երբ ուզում ես վճարել։',
    options: [
      { id: 'a', es: 'La cuenta, por favor.', hy: 'Հաշիվը, խնդրեմ։', isCorrect: true },
      { id: 'b', es: '¿Dónde está la estación?', hy: 'Որտե՞ղ է կայարանը։', isCorrect: false },
      { id: 'c', es: 'Me llamo Carlos.', hy: 'Անունս Կառլոս է։', isCorrect: false },
      { id: 'd', es: 'Abre la ventana.', hy: 'Բացիր պատուհանը։', isCorrect: false }
    ]
  },
  {
    id: 48,
    category: 'fast',
    categoryTitleEs: 'Responde rápido',
    categoryTitleHy: 'Արագ պատասխանիր',
    es: '¿Qué haces si quieres comprar una camisa?',
    hy: 'Ի՞նչ ես անում, եթե ուզում ես վերնաշապիկ գնել։',
    options: [
      { id: 'a', es: 'Pregunto cuánto cuesta.', hy: 'Հարցնում եմ, թե ինչ արժե։', isCorrect: true },
      { id: 'b', es: 'Pregunto a qué hora sale el tren.', hy: 'Հարցնում եմ, թե որ ժամին է մեկնում գնացքը։', isCorrect: false },
      { id: 'c', es: 'Pido una habitación.', hy: 'Սենյակ եմ խնդրում։', isCorrect: false },
      { id: 'd', es: 'Pido un café.', hy: 'Սուրճ եմ խնդրում։', isCorrect: false }
    ]
  },
  {
    id: 49,
    category: 'fast',
    categoryTitleEs: 'Responde rápido',
    categoryTitleHy: 'Արագ պատասխանիր',
    es: '¿Qué dices cuando quieres saber la hora?',
    hy: 'Ի՞նչ ես ասում, երբ ուզում ես իմանալ ժամը։',
    options: [
      { id: 'a', es: '¿Qué hora es?', hy: 'Ժամը քանի՞սն է։', isCorrect: true },
      { id: 'b', es: '¿Cuánto pesas?', hy: 'Ինչքա՞ն ես կշռում։', isCorrect: false },
      { id: 'c', es: '¿Cómo se cocina?', hy: 'Ինչպե՞ս է եփվում։', isCorrect: false },
      { id: 'd', es: '¿De qué color es?', hy: 'Ի՞նչ գույնի է։', isCorrect: false }
    ]
  },
  {
    id: 50,
    category: 'fast',
    categoryTitleEs: 'Responde rápido',
    categoryTitleHy: 'Արագ պատասխանիր',
    es: '¿Qué haces si un amigo está triste?',
    hy: 'Ի՞նչ ես անում, եթե ընկերդ տխուր է։',
    options: [
      { id: 'a', es: 'Lo escucho y hablo con él.', hy: 'Լսում եմ նրան և խոսում հետը։', isCorrect: true },
      { id: 'b', es: 'Le vendo una bicicleta.', hy: 'Հեծանիվ եմ ծախում նրան։', isCorrect: false },
      { id: 'c', es: 'Le pido la cuenta.', hy: 'Հաշիվն եմ ուզում նրանից։', isCorrect: false },
      { id: 'd', es: 'Le pregunto cuánto cuesta.', hy: 'Հարցնում եմ, թե ինչ արժե։', isCorrect: false }
    ]
  }
];

export const PRIZE_LADDER = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000,
  64000, 125000, 250000, 500000, 1000000
];
