import AcosoInfantil from './assets/acosoinfantil.png';
import AcosoFamiliar from './assets/acosofamiliar.png';
import AcosoEscolar from './assets/acosoescolar.png';


export const imgs = [
	AcosoInfantil,
	AcosoFamiliar,
	AcosoEscolar,

];

export const categories = {
	acosoinfantil: 'Acoso Infantil',
	acosofamiliar: 'Acoso Familiar',
	acosoescolar: 'Acoso Escolar',

};

const {
	acosoinfantil,
	acosofamiliar,
	acosoescolar,
} = categories;

export const questions = [
	
	{
		id: 1,
		question: '¿Te han puesto algún apodo alguna vez? ¿Te gusta?',
		category: acosoinfantil,
		correct_answer: 'Sí, pero no me gusta mucho',
		incorrect_answers: ['Mis amigos más cercanos, hay confianza', 'No, no me han puesto apodos', 'Sí, en forma de resaltar mis virtudes'],
	},
	{
		id: 2,
		question:
			"¿Te han puesto apodos que no te gusten y te lo repiten a menudo'?",
		category: acosofamiliar,
		correct_answer: 'Sí, es un poco tedioso',
		incorrect_answers: ['No, hay respeto entre todos', 'En realidad no me afecta mucho la opinión de los demás', 'Sí me han puesto apodos, pero no lo suelen usar para ofenderme'],
	},
	{
		id: 3,
		question:
			'¿Cual es la persona con la que mejor te llevas en clases?',
		category: acosoescolar,
		correct_answer: 'Con el chico/a con el cual hay más respeto y buena onda',
		incorrect_answers: ['Con el chico/a con el que nos hacemos bromas muy pesadas', 'Con el chico/a al que le paso la tarea por compromiso', 'Con nadie'],
	},

	{
		id: 4,
		question: '¿Cual es la persona con la que peor te llevas en clases?',
		category: acosofamiliar,
		correct_answer: 'Con el chico/a que no me respeta y me trata indiferente',
		incorrect_answers: [
			'Con el chico/a que respeta mi espacio',
			'Con el chico/a que puedo resolver los problemas teniendo una conversación',
			'Con el chico/a con quien hay buena onda',
		],
	},
	{
		id: 5,
		question: '¿Has sentido que alguien te vigila cuando vas por la calle?',
		category: acosoinfantil,
		correct_answer: 'Sí, en ocaciones camino más rápido',
		incorrect_answers: ['No, además siempre voy acompañado', 'No he vivido esta situación', 'No recuerdo'],
	},
	{
		id: 6,
		question: '¿Te han hecho sentir menos por hacer poco?',
		category: acosofamiliar,
		correct_answer:
			'Sí, aunque haga cosas siempre resaltan lo negativo',
		incorrect_answers: [
			'Realmente hay un muy buen ambiente y solemos ayudarnos entre todos',
			'No, de hecho, me alientan a mejorar',
			'No debido a que entienden que aveces estoy cansado',
		],
	},
	{
		id: 7,
		question:
			'¿Algunos de tus amigos se ha burlado de tu estado social?',
		category: acosoinfantil,
		correct_answer: 'Si, es un poco molesto',
		incorrect_answers: ['No, no tengo este tipo de problemas', 'No, de hecho, en mi grupo de amigos hay de toda clase', 'No, tampoco lo he hecho'],
	},
	{
		id: 8,
		question: '¿Has tenido que encerrarte en la noche en tu cuarto por miedo de que algún familiar entre?',
		category: acosofamiliar,
		correct_answer: 'Sí, algunas veces revisan mis cosas aunque no se den cuenta',
		incorrect_answers: ['No he vivido esta situación', 'No, de hecho, abro la puerta para que entre frío', 'No, respetan mi privacidad'],
	},
	
	{
		id: 9,
		question:
			'¿Has escuchado que alguien habla mal de otra personas?',
		category: acosofamiliar,
		correct_answer: 'Sí, pasa muy a menudo',
		incorrect_answers: ['No he vivido esta situación', 'Realmente no', 'EN MI PRESENCIA JAMÁS'],
	},

	{
		id: 10,
		question:
			'¿Te han obligado a pasar la tarea?',
		category: acosoescolar,
		correct_answer: 'Sí, aveces es tedioso',
		incorrect_answers: ['No, no he vivido esta', 'Todos hacemos nuestra tarea', 'No recuerdo'],
	},
	{
		id: 11,
		question: '¿Te han roto aparatos electrónicos?',
		category: acosofamiliar,
		correct_answer: 'Sí, al enojarse',
		incorrect_answers: [
			'No, no tengo este tipo de problemas',
			'No, hay otras maneras de solucionar los conflictos',
			'No, aunque no hay razones',
		],
	},

	{
		id: 12,
		question: '¿Han hablado mal de ti estando tu cerca?',
		category: acosofamiliar,
		correct_answer: 'Sí, pero no se dan cuenta',
		incorrect_answers: ['No, no tengo este tipo de problemas', 'No, de hecho, hay un ambiente agradable', 'No creo'],
	},
	
	{
		id: 13,
		question: '¿Te sientes menospreciado?',
		category: acosofamiliar,
		correct_answer: 'Algunas veces',
		incorrect_answers: ['No', 'No muy seguido', 'Nunca'],
	},

	{
		id: 14,
		question: '¿Te han gritado tus familiares?',
		category: acosofamiliar,
		correct_answer: 'Sí, aveces por cosas innecesarias',
		incorrect_answers: ['No', 'No he vivido esta situacion aún', 'No, ni teniendo razones'],
	},
	{
		id: 15,
		question:
			'¿Te has sentido intimidado por alguno de tus compañeros?',
		category: acosoinfantil,
		correct_answer: 'Sí, es un poco tedioso',
		incorrect_answers: [
			'No, no he vivido esta situacion',
			'No, no hay motivos',
			'En ningun momento',
		],
	},

	{
		id: 16,
		question: '¿Qué has hecho en caso de sentirte intimidado por un/a mayor?',
		category: acosoinfantil,
		correct_answer: 'Buscar ayuda',
		incorrect_answers: ['No he tenido este tipo de problemas', 'Si me pasa... corro', 'No me pasó'],
	},
	{
		id: 17,
		question: '¿Algunas veces te han hecho sentir menos por lo que eres?',
		category: acosoinfantil,
		correct_answer: 'Sí...',
		incorrect_answers: ['No, no debería', 'No, y tampoco me importaría', 'No me interesa la opinión de los demás'],
	},
	{
		id: 18,
		question:
			'¿Personas por la calle te han chiflado?',
		category: acosoinfantil,
		correct_answer: 'Sí, es muy molesto',
		incorrect_answers: ['No, aunque conozco situaciones similares', 'La suya por las dudas', 'Realmente no he vivido esta situación'],
	},
	{
		id: 19,
		question:
			'¿La frase "te haces o sos" te ofendería? ¿Qué responderías?',
		category: acosoinfantil,
		correct_answer: 'Me incomodaría',
		incorrect_answers: ['No he vivido esta situación', 'No me molesta', 'Me hago y soy'],
	},
	{
		id: 20,
		question:
			'¿Alguna vez te ofendieron en un videojuego?',
		category: acosoinfantil,
		correct_answer: 'Sí, muy usualmente',
		incorrect_answers: ['No he vivido esta situación', 'No, tampoco me importa la opinión de los demás', 'Los juegos son para divertirse'],
	},
	{
		id: 21,
		question:
			'¿La frase "Sos o te haces" te ofendería? ¿Qué responderías?',
		category: acosoinfantil,
		correct_answer: 'Me incomodaría',
		incorrect_answers: ['No he vivido esta situación', 'No me molesta', 'Me hago y soy'],
	},
	{
		id: 22,
		question:
			'¿Te has sentido triste por comentarios sobre ti?',
		category: acosoinfantil,
		correct_answer: 'Sí, aunque algunos no son ciertos',
		incorrect_answers: [
			'No, no tengo este tipo de problemas',
			'No, tampoco me importaria la opinión de cualquier vago',
			'Jamás, el autoestima por el cielo',
		],
	},
	{
		id: 23,
		question: '¿En alguna red social has recibido spam?',
		category: acosoinfantil,
		correct_answer: 'Sí, de una persona desconocida',
		incorrect_answers: ['No, no tengo este tipo de problemas', 'Jamás', 'Nunca'],
	},
	{
		id: 24,
		category: acosoescolar,
		question: '¿Te han escondido tus materiales de estudio?',
		correct_answer: 'Sí, muy seguido',
		incorrect_answers: ['No, no he vivido esta situacion', 'Alguna que otra vez en broma', 'No recuerdo'],
	},
	{
		id: 25,
		category: acosoescolar,
		question:
			'¿Te han dejado fuera de actividades escolares?',
		correct_answer: 'Sí, por no tener habilidades específicas',
		incorrect_answers: [
			'No, siempre es por decision propia',
			'No, no tengo este tipo de problemas',
			'No, además siempre nos turnamos',
		],
	},
	{
		id: 26,
		category: acosoescolar,
		question: '¿Te han tratado mal por no llevar algún aparato de moda?',
		correct_answer:
			'Si, en especial porque todos tienen cosas de marca',
		incorrect_answers: [
			'No he vivido esta situación',
			'No, tampoco debería',
			'No, pienso que nos respetamos entre todos',
		],
	},
	{
		id: 27,
		category: acosoescolar,
		question: '¿Te han tratado mal por tu color de piel?',
		correct_answer: 'Sí, me pasa seguido',
		incorrect_answers: [
			'No he vivido esta situación',
			'No, nos tratamos por igual',
			'No, tampoco deberiamos',
		],
	},
	{
		id: 28,
		category: acosoescolar,
		question:
			'¿Alguien de otro salón ha entrado a causar problemas?',
		correct_answer:
			'Sí, los de curso avanzado molestan a mis amigos',
		incorrect_answers: [
			'No he vivido esta situación',
			'No, nos llevamos bien con nuestros otros compañeros',
			'No, tampoco tenemos por qué',
		],
	},
	{
		id: 29,
		category: acosoescolar,
		question: 'Te han tirado la comida?',
		correct_answer:
			'Sí, es muy vergonzoso',
		incorrect_answers: [
			'No he vivido esta situación',
			'No, tampoco he visto a alguien hacerlo',
			'No, de hecho, nos compartimos nuestra comida',
		],
	},
	{
		id: 30,
		category: acosoescolar,
		question:
			'¿Algun profesor le ha tirado algun objeto hacia algun alumno?',
		correct_answer:
			'Sí, pasa seguido',
		incorrect_answers: [
			'No he vivido esta situación',
			'No, de hecho, el profesor es educado',
			'No, el profesor es respetuoso con todos',
		],
	},
	{
		id: 31,
		question: '¿Han habido conflictos peleas o discusiones entre tus compañeros o amigos? Has sido parte?',
		category: acosoescolar,
		correct_answer: 'Si, en algunos casos es contra mi persona',
		incorrect_answers: ['No he vivido esta situaión', 'No, de hecho, las discuciones siempre intentamos terminarlas de la mejor manera', 'Realmente, no he sido parte de algún conflicto con mis compañeros'],
	},
	{
		id: 32,
		question:
			'¿Alguno de tus compañeros te hizo pasar verguenza en público alguna vez?',
		category: acosoescolar,
		correct_answer: 'Sí, me pasa muy seguido',
		incorrect_answers: ['No, no he vivido esta situación', 'No, siempre bromeamos pero nunca a un extremo grande', 'No, mis compañeros no harían esas cosas'],
	},
	{
		id: 33,
		question:
			'¿Alguno de tus compañeros te ha robado alguna de tus propiedades?',
		category: acosoescolar,
		correct_answer: 'Sí, pero no se como actuar',
		incorrect_answers: [
			'No, mis compañeros no hacen estas cosas',
			'No he vivido esta situación',
			'No, siempre avisan en caso de necesitarlo prestado',
		],
	},
	{
		id: 34,
		question: '¿Sientes que hay un desequilibrio en cuanto a las tareas diarias del hogar?',
		category: acosofamiliar,
		correct_answer: 'Sí, usualmente personas específicas hacen todas las tareas',
		incorrect_answers: ['No he vivido esta situación', 'No, de hecho todos colaboramos en lo que podemos', 'No, cada uno tiene un rol asignado'],
	},
	{
		id: 35,
		category: acosofamiliar,
		question: '¿Te han pegado sin razón?',
		correct_answer:
			'Sí, de hecho, algunas veces son por cosas estúpidas',
		incorrect_answers: [
			'No, aunque he entendido en que estuve mal en algunas ocaciones',
			'No he vivido esta situación',
			'Sí(?), por razones que entiendo que he estado mal',
		],
	},
	{
		id: 36,
		category: acosofamiliar,
		question: '¿Te han gritado sin razón?',
		correct_answer:
			'Sí, aveces por cosas innecesarias',
		incorrect_answers: [
			'No tengo este tipo de problemas',
			'No, gritan en casos de emergencias o miedo',
			'Siempre hablan de manera adecuada ante cualquier tipo de situación',
		],
	},
	

];
