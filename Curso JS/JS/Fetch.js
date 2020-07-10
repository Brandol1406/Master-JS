'use strict'

var usuarios = [];

fetch('https://reqres.in/api/users?page=2')
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        renderTable();
    });


function renderTable(){
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
    usuarios.forEach(function (user){
        table += `<tr>
            <td>${user.id}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td><img src='${user.avatar}' alt='avatar'/></td>
        </tr>`;
    });
    table += `</tbody></table>`;
    document.write(table);
}    
