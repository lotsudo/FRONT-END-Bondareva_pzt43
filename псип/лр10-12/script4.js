function calcY(x) {

    if (1 - x === 0) {
        alert("Ошибка: деление на ноль!");
        return null;
    }

    let y = (Math.pow(x, 2) - 4 * x + 3) / (1 - x);

    return y;
}