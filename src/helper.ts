
export function getRandom (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getRandomCenter (min: number, max: number): number {
    //return Math.floor(Math.random() * (max - min + 1)) + min;
    const iterations = 3;
    let sum = 0;

    for (let i = 0; i < iterations; i++) {
        sum += Math.random();
    }

    // Получаем среднее от 0 до 1
    const normalRandom = sum / iterations;

    // Масштабируем под нужный диапазон
    return Math.floor(normalRandom * (max - min + 1)) + min;
}