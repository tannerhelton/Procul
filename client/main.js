$(document).ready(function () {
    var socket = io();
    $("#addComputer").click(function () {
        if ($('#computerName').val().trim().length > 0) {
            socket.emit('addComputer', $('#computerName').val().trim());
            console.log($('#computerName').val().trim());
        }
    });

    socket.on('otherComputerAdded', function (name) {
        addNewComputer(name, 'Offline', "This computer isn't setup yet.")
    });
});

function addNewComputer(name, status, description) {
    if ($('.col-sm-6').length % 4 != 0) {
        $("#homePageContainerGrid").append('<div class="col-sm-6"> <div class="card" style="width: 20rem;"> <div class="card-body"><h4 class="card-title"> ' + name + ' </h4> <h6 class="card-subtitle mb-2 text-muted" > ' + status + ' </h6> <p class="card-text"> ' + description + ' </p> <a href="#" class="card-link"> Actions </a> <a href="#" class="card-link"> Details </a> </div > </div> </div>');
    }
}
