// ARRAY DE CONSULTAS Y RESERVAS
const consultas = [];

// OBTENIENDO LOS VALORES DE LOS INPUTS

const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("fullName");
const inputEmail = document.getElementById("email");
const inputNumero = document.getElementById("number");
const inputConsul = document.getElementById("consulta");
const boton = document.getElementById("btn");

// FUNCION SUBMIT

formulario.addEventListener("submit", (event) => {

    // Detengo el evento
    event.preventDefault();

    // Agregar validación si los campos no están completos
        if(inputNombre.value === ""){
            Toastify({
                text: "Debes completar este campo con tu nombre completo",
                style:{background:"black",
                       color: "white"}
            }).showToast();
            return;

        }else if(inputEmail.value === ""){
            Toastify({
                text: "Debes completar este campo con tu email",
                style:{background:"black",
                       color: "white"}
            }).showToast();
            return;

        }else if ((inputNumero.value === "")|| (inputNumero.value >9999999999)){
            Toastify({
                text: "Debes completar este campo con tu numero",
                style:{background:"black",
                       color: "white"}
            }).showToast();
            return;

        }else if(inputConsul.value === ""){
            Toastify({
                text: "Debes completar este campo con tu consulta",
                style:{background:"black",
                       color: "white"}
            }).showToast();
            return;
        }

    
    // Crear objeto
    const consulta = {
        nombre: inputNombre.value,
        email: inputEmail.value,
        numero: inputNumero.value,
        consulta : inputConsul.value
    };

    // Agregar consulta al array
    consultas.push(consulta);

    Swal.fire({
        text: `${inputNombre.value} su consulta ha sido enviada correctamente`,
        timer: 2000
    });

    // EMAIL js
    
        emailjs.send("service_yyqp4gr","template_p6wcxdh",{
        from_name: `${inputNombre.value}--${inputNumero.value}`,
        to_name: "Solano Diseño",
        message: inputConsul.value,
        reply_to: inputEmail.value,
        });
    

        localStorage.setItem("nombre", inputNombre.value );
        localStorage.setItem("email", inputEmail.value );
        localStorage.setItem("telefono", inputNumero.value );
    
    // Limpiar los inputs
    inputNombre.value = "";
    inputEmail.value = "";
    inputNumero.value = "";
    inputConsul.value = "";


    setTimeout(function(){
        window.location.replace('exito.html');
    },3000);
    
});



