// Datos de rendimiento académico
const datosRendimiento = {
    labels: ['Matemáticas', 'Historia', 'Ciencias', 'Literatura', 'Inglés'],
    datasets: [{
        label: 'Calificaciones del Estudiante',
        data: [85, 78, 92, 88, 95], // Calificaciones (ej. sobre 100)
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Opciones del gráfico
const opciones = {
    scales: {
        y: {
            beginAtZero: true, // Asegura que el eje Y comience en 0
            max: 100, // Define la calificación máxima
            title: {
                display: true,
                text: 'Puntuación'
            }
        },
        x: {
            title: {
                display: true,
                text: 'Materias'
            }
        }
    },
    responsive: true, // Hace el gráfico responsive
    maintainAspectRatio: false
};

// Inicializar el gráfico
const ctx = document.getElementById('graficoRendimiento').getContext('2d');
const miGrafico = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico: 'bar' (barras), 'line' (líneas), 'radar', etc.
    data: datosRendimiento,
    options: opciones
});