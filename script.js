//1. Пустой массив с генерацией случайных оценок

const grades = [];

for (let i = 0; i < 12; i++) {
    const randomGrade = Math.floor(Math.random() * 100) + 1;
    grades.push(randomGrade);
}

console.log(grades);

//2. Рассчет среднего балла студентов

const gradesSum = grades.reduce(function (total, grade) {
    return total + grade;
});

const averageGrade = Math.round(gradesSum / grades.length);

console.log(averageGrade);

//3. Максимальный балл

const maxGrade = Math.max(...grades);
console.log(maxGrade);


//4. Минимальный балл

const minGrade = Math.min(...grades);
console.log(minGrade);

//5. Положительная оценка

const positiveGrade = grades.filter(grade => grade >= 60);
const remainingGrades = positiveGrade.length;

console.log(remainingGrades);

//6. Отрицательная оценка

const negativeGrade = grades.filter(grade => grade < 60);
const remainingGrades2 = negativeGrade.length;

console.log(remainingGrades2);

//7. Преобразование оценок в буквенные значения

const gradesToLetters = grades.map(grade => {
    if (grade >= 80 && grade <= 100) {
        return 'A';
    } else if (grade >= 60 && grade <= 79) {
        return 'B';
    } else if (grade >= 40 && grade <= 59) {
        return 'C';
    } else if (grade >= 20 && grade <= 39) {
        return 'D';
    } else { return 'E' }
})

console.log(gradesToLetters);

//Вывод массива на экран
//Сначала объядиняю все массивы в один, чтобы вывести все значения массивов. 

const totalArray = grades.concat(averageGrade, maxGrade, minGrade, remainingGrades, remainingGrades2, gradesToLetters.join());


//Тут функция для вывода значений на экран 

const arrayContainer = document.createElement('ul');

totalArray.forEach(arr => {
    const listItem = document.createElement('li');
    listItem.textContent = `${arr}`;
    document.getElementById('grades-list').append(listItem);
});