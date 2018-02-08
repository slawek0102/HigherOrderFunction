https://www.youtube.com/watch?v=LTunyI2Oyzw&list=PL8V1empgrpJb--IOBFEY_54SHF-Ft5SAa
// https://www.youtube.com/watch?v=jE7MAh2EgSQ

// https://www.youtube.com/watch?v=rRgD1yVwIvE


const companies = [
    {name: 'Company1', category: 'finance', start: 1996, end: 2000},
    {name: 'Company2', category: 'home', start: 196, end: 200},
    {name: 'Company3', category: 'finance', start: 1996, end: 2000},
    {name: 'Company4', category: 'home', start: 196, end: 200},
    {name: 'Company5', category: 'finance', start: 1996, end: 4000}
];

const ages = [1,5,7,4,66,44,22,11]


const wybor = companies.filter((comp) => {
        return (comp.category === 'home' && comp.name === 'Company2')
})

console.log(wybor)