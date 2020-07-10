$(document).ready(function(){
    $("#content1").load("https://reqres.in/");

    $.get("https://reqres.in/api/users", {page: 1}, function(response){
        console.log(response);
        $("#content2").html(renderTable(response.data));
    });

    var user = {
        id: 10000,
        first_name: "Carlos",
        last_name: "Lora",
        email: "brandol1406@hotmail.com",
        avatar: "https://demo-cdn.sirv.com/chair.jpg"
    };

    $.post("https://reqres.in/api/users", user, function(response){
        console.log(response);
        $("#content3").append("<p> User: " + response.first_name + " " + response.last_name + " " + response.email +
        "<img alt='avatar' src='" + response.avatar + "'/>" + "</p> <br/> ");
        $("#content3").append("<p> Created At: " + response.createdAt + "</p> <br/> " + response.id);
    });
});

function renderTable(data){
    let table = `<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>email</th>
            <th>avatar</th>
        </tr>
    </thead>
    <tbody>`;
    data.forEach(function (user){
        table += `<tr>
            <td>${user.id}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td><img src='${user.avatar}' alt='avatar'/></td>
        </tr>`;
    });
    table += `</tbody></table>`;
    return table;
}