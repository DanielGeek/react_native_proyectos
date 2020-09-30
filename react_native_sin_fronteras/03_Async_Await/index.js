// function sinPromesa() {
//     return Promise.resolve(1)
//         .then(x => x + 1)
//         .then(x => x + 1)
//         .then(console.log)
// }

// sinPromesa();

async function conPromesa() {
    const resultado = await Promise.resolve(1)
    console.log(resultado + 1 + 1);
}

conPromesa();