let labs = ["Histology", "Microbiology", "Cytology", "Biochemistry", "Serology"];
let lastlabs = labs.pop();

labs[1] = 'Molecular Pathology'
labs[4] = 'Virology'
labs.unshift('Immunology')

console.log(labs)
console.log(lastlabs)