function enrollCourse() {
    
    let courses = [
        {
            id: '25455',
            name: 'HTML 5',
            hours: '20 horas',
            price: "$200.000"
        },
        {
            id: '25789',
            name: 'CSS Básico',
            hours: '30 horas',
            price: "$400.000"
        },
        {
            id: '25543',
            name: 'JS Cero a Mid',
            hours: '60 horas',
            price: "$800.000"
        }
    ];

    let id = document.getElementById("id").value;
    let user = document.getElementById("user").value;
    let dni = document.getElementById("dni").value;

    if (id && user && dni) {
        let course = courses.find(element => element.id === id);
        if(course){
            document.getElementById('ans').innerHTML = `<p id="ok"><strong>¡Registrado!</strong><br>Nombre del curso: ${course.name}<br>Código: ${course.id}<br>Duración: ${course.hours}<br>Precio: ${course.price}<br><br>Nombre Interesado: ${user}<br>Cedula: ${dni}</p>`;
        } else {
            alert("Curso no encontrado.");
        }
    } else {
        alert("Rellene todos los campos.");
    }
}

function showCourses(){
    let courses = [
        {
            id: '25455',
            name: 'HTML 5',
            hours: '20 horas',
            price: "$200.000"
        },
        {
            id: '25789',
            name: 'CSS Básico',
            hours: '30 horas',
            price: "$400.000"
        },
        {
            id: '25543',
            name: 'JS Cero a Mid',
            hours: '60 horas',
            price: "$800.000"
        }
    ];
    
    document.getElementById('course1').innerHTML = `<p>Nombre del curso: ${courses[0].name}<br>Código: ${courses[0].id}<br>Duración: ${courses[0].hours}<br>Precio: ${courses[0].price}</p>`
    setTimeout(() => { document.getElementById('course2').innerHTML = `<p>Nombre del curso: ${courses[1].name}<br>Código: ${courses[1].id}<br>Duración: ${courses[1].hours}<br>Precio: ${courses[1].price}</p>` }, 2000);
    setTimeout(() => { document.getElementById('course3').innerHTML = `<p>Nombre del curso: ${courses[2].name}<br>Código: ${courses[2].id}<br>Duración: ${courses[2].hours}<br>Precio: ${courses[2].price}</p>` }, 4000);
    setTimeout(() => { document.getElementById('enroll').innerHTML = '<a href="./enrollment.html">Inscribirse en Curso</a>' }, 4000);

}

