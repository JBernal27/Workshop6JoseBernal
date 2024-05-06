//Funciones de proposito general

const textInput = (input) => {
  const userInput = prompt(input).trim()
  return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase()
}

const numberInput = (msj, num = 0) => {
  while(true){
      num = Number(prompt(msj))
      if(typeof num === "number" && !Number.isNaN(num)){
          return num
      }else{
          impErr("Por favor ingrese un valor numerico")
      }
  }
}

const impErr = (input) => alert(`Error!\n${input}`)

const impInf = (input) => alert(input)

//Funciones de proposito general

const url = "data.json"
let roomsList  
let roomTypesList
let reservedRooms = []  

const createReservation = (room, numberGuest) => {
  function generateGeneratorId() {
    let id = 1; 
    return () =>  {
      return id++;
    };
  }

  const generateId = generateGeneratorId()

  let guestName = (textInput("Ingrese el nombre del titular de la reserva")).toLowerCase()
  let startDate = textInput("Ingrese la fecha de inicio (Dia/Mes)")
  let endDate = textInput("Ingrese la fecha de finalizacion (Dia/Mes)")
  
  const reservationInfo = {
    id : generateId(),
    guestName,
    startDate,
    endDate,
    roomNumber : room.number,
    numberGuest,
    roomType : room.roomTypeId
  }
  reservedRooms.push(reservationInfo)
  room.availability = false
  impInf("Reserva realizada con exito")
}

/* const reservation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let capacitySolicited = numberInput("Ingrese el numero de personas para la habitacion");
      if (capacitySolicited >= 1 && capacitySolicited <= 6) {
        let avaliableRooms = [];
        let avaliableRoomTypes = [];
        roomTypesList.forEach(roomType => roomType.capacity >= capacitySolicited ? avaliableRoomTypes.push(roomType.id) : null);
        roomsList.forEach(room => room.availability && avaliableRoomTypes.includes(room.roomTypeId) ? avaliableRooms.push(room) : null);
        let avaliableRoomsText = avaliableRooms.map(room => "Numero: " + room.number + "\nPrecio: " + room.priceNight + "\n---------//---------\n");
        let roomToReserve = numberInput("Habitaciones Disponibles\n\n" + (avaliableRooms.length > 0 ? avaliableRoomsText.toString : "No hay habitaciones disponibles") + "\n Seleccione la habiacion a reservar");
        createReservation(avaliableRooms.forEach(room => {
          if (room.number == roomToReserve) {
            resolve(room);
          }
        }));
      } else {
        reject("No tenemos habitaciones que cumplan con esa capacidad, puede reservar varias repartiendo el número de personas");
      }
    }, 2000);
  });
}; */

const reservation = () => {
  let capacitySolicited = numberInput("Ingrese el numero de personas para la habitacion")
  if(capacitySolicited >= 1 && capacitySolicited <= 6){
    let avaliableRooms = []
    let avaliableRoomTypes = []
    roomTypesList.forEach(roomType => roomType.capacity >= capacitySolicited ? avaliableRoomTypes.push(roomType.id) : null)
    roomsList.forEach(room => room.availability && avaliableRoomTypes.includes(room.roomTypeId) ? avaliableRooms.push(room) : null)
    let avaliableRoomsText = avaliableRooms.map(room => "Numero: " + room.number + "\nPrecio: " + room.priceNight + "\n---------//---------\n")  
    let roomToReserve = numberInput("Habitaciones Disponibles\n\n" + (avaliableRooms.length > 0 ? avaliableRoomsText.toString() : "No hay habitaciones disponibles") + "\n Seleccione la habiacion a reservar")
    let selectedRoom = avaliableRooms.find(room => room.number === roomToReserve)
    avaliableRooms.length >  0 ? (selectedRoom ? createReservation(selectedRoom,capacitySolicited) : impErr("Ingrese una de las habitaciones validas")) : null
  }else{
    impErr("No tienemos habitaciones que cumplan con esa capacidad, puede reservar varias repartiendo el numero de personas")
  }  
}

const showAndSearchInReservations = () => {
  let msg = reservedRooms.map(room => "ID reserva: " + room.id + "\nNumero: " + room.roomNumber + "\nTitular: " + room.guestName + "\n---------//---------\n")
  let guestIdToSearch = numberInput("Habitaciones Reservadas\n\n" +  msg + "\n Seleccione la reservacion a modificar")
  return reservedRooms.find(reservation => reservation.id === guestIdToSearch)
}

const showReservations = () => {
  let guestNameToSearch = (textInput("Ingrese el nombre del huesped a buscar")).toLowerCase()
  let roomToShow = reservedRooms.find(reservation => reservation.guestName === guestNameToSearch)
    if(roomToShow){
      impInf(`ID reserva: ${roomToShow.id}\nNombre Titular: ${roomToShow.guestName}\nFecha de inicio: ${roomToShow.startDate}\nFecha de fin: ${roomToShow.endDate}\nNúmero de habitación: ${roomToShow.roomNumber}\nNúmero de huespedes: ${roomToShow.numberGuest}\nTipo de habitación: ${roomToShow.roomType}`)
    }else{
      impErr("No hay habitaciones que concidan con este nombre")
    }
}

const deleteReservation = () => {
    let roomToDelete = showAndSearchInReservations()
    if(roomToDelete){
      if(confirm("Esta seguro que desea eliminar la reserva")){
        roomsList.forEach(room => room.number == roomToDelete.roomNumber ? room.availability = true : null)
        reservedRooms = reservedRooms.filter(reservation => reservation != roomToDelete)
        impInf("Reserva eliminada con exito")
      }else{
        impInf("La reserva NO ha sido eliminada")
      }
    }else{
      impErr("No hay habitaciones con este ID")
    }
}

const editReservation = () => {
  roomToEdit = showAndSearchInReservations()
  if(roomToEdit){
    let op
    do{
      op = numberInput(`Menu de Edicion\n\n 1. Editar Fecha de Inicio\n 2. Editar Fecha de Finalizacion\n 0. Salir`)
      switch(op){
        case 1:
          roomToEdit.startDate = textInput("Ingrese la fecha de inicio (Dia/Mes)")
        break;
        case 2:
          roomToEdit.endDate = textInput("Ingrese la fecha de finalizacion (Dia/Mes)")
        break;
        case 0:
          impInf("Se Guardaron los datos correctamente")
        break;
        default:
          impErr("Ingrese un valor valido para el menu")
        break;
      }
    }while(op!=0)
  }else{
    impErr("No hay reservaciones con este ID")
  }
}

const menu = () => {
    let op = 1
    while( op != 0){
      op = numberInput(" 1. Reservar \n 2. Revisar Reservas\n 3. Cancelar Reserva\n 4. Editar Reserva\n 0. Salir")

      switch(op){
        case 1:
          reservation()
           /*  .then(reservation => {
              console.log("Reservación creada:", reservation);
            })
            .catch(error => {
              console.error("Error al crear la reservación:", error);
            }); */
          break;
        case 2:
          showReservations()
          break;
        case 3:
          deleteReservation()
          break;
        case 4:
          editReservation()
          break;
        case 0:
          impInf("Cerrando el sistema")
          break;
        default:
          impErr("Por favor ingrese un valor valido")
          break;
      }
      
    }
}

const loadData = () => {
  return promise = new Promise((resolve,reject) => {
      setTimeout( () =>{
          fetch(url)
              .then(Response => {
                  if (!Response.ok) {
                      reject("Error al cargar los datos")
                  }
                  impInf("Datos cargados correctamente")
                  return Response.json()
              })
              .then(data => resolve(data))
              .catch(message => impErr(message))
      },2000)
  })
}

loadData()
.then(({ rooms, roomTypes }) => {
  roomsList = rooms
  roomTypesList = roomTypes
  menu()
})
.catch(menssage => impErr(menssage))