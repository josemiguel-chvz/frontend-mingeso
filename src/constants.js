const pages = [
    {href: '/', text:'Inicio'},
    {href:'/store', text: 'Catalogo Empanadas'},
    {href: '/weapon', text: 'Arma tu Empanada'}
];

const empanadas = [
    {'id': 1, 'name': 'Queso', 'type': 'frita', 'sizes': [10,25,24]},
    {'id': 2, 'name': 'Pino', 'type': 'horno', 'sizes': [10,25,24]},
    {'id': 3, 'name': 'Napolitana', 'type': 'horno', 'sizes': [10,25,24]},
    {'id': 4, 'name': 'Camaron Queso', 'type': 'frita', 'sizes': [10,25,24]}
]

const constants = [
    {'pages': pages},
    {'empanadas': empanadas}
]

export default constants;