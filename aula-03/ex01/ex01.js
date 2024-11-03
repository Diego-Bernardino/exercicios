/* 
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima sua média e sua classificação conforme a tabela abaixo:

    Média = (nota 1 + nota 2 + nota 3) / 3;
    
    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 10;
const nota2 = 8;
const nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(`Média ${media}, aluno reprovado!`);
} else if (media >= 5 && media <= 7) {
    console.log(`Média ${media}, aluno em recuperação!`);
} else {
    console.log(`Média ${media}, aluno aprovado!`);
}
