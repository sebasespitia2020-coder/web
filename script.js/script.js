function normalizarNota(n) {
    if (n >= 1.0 && n <= 5.0) return n;      // válido en decimal
    if (n >= 10 && n <= 50) return n / 10;   // 10–50 → 1.0–5.0
    return null; // inválido
}

function calcular() {
    const valores = [
        parseFloat(document.getElementById("n1").value),
        parseFloat(document.getElementById("n2").value),
        parseFloat(document.getElementById("n3").value),
        parseFloat(document.getElementById("n4").value),
        parseFloat(document.getElementById("n5").value),
        parseFloat(document.getElementById("n6").value),
        parseFloat(document.getElementById("n7").value),
        parseFloat(document.getElementById("n8").value),
    ];

    const notas = [];

    for (let n of valores) {
        if (isNaN(n)) {
            document.getElementById("resultado").innerText =
                "⚠️ Debes llenar todas las notas.";
            return;
        }

        if (n > 50) {
            document.getElementById("resultado").innerText =
                "⚠️ Ninguna nota puede superar 50.";
            return;
        }

        const normalizada = normalizarNota(n);

        if (normalizada === null) {
            document.getElementById("resultado").innerText =
                "⚠️ Las notas deben estar entre 1.0–5.0 o 10–50.";
            return;
        }

        notas.push(normalizada);
    }

    const suma = notas.reduce((a, b) => a + b, 0);
    const promedio = suma / notas.length;

    document.getElementById("resultado").innerText =
        "⭐ Promedio: " + promedio.toFixed(2);
}
