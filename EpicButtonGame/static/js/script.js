var socket = io();
socket.on("count",function(data){
    $(".topMessage").text(data.msg);
});

$("#button").click(function(){
    socket.emit("button_push");
    socket.on("updated_count",function(data){
        $(".topMessage").text(data.msg)
    });
});

$("#reset").click(function(){
    socket.emit("reset");
    socket.on("reset_count",function(data){
        $(".topMessage").text(data.msg)
    });
});
