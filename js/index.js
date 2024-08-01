fetch("https://api.escuelajs.co/api/v1/users")
    .then(response => response.json())
    .then(data => {
       let tabla = "<tr><th>N</th><th>Name</th><th>Email</th><th>Pasword</th><th>Avatar</th></tr>"

       for( let usuario of data ){
        tabla += `<tr><td>${usuario.id}</td>
                       <td>${usuario.name}</td>
                        <td>${usuario.email}</td>
                         <td>${usuario.password}</td>
                          <td>${usuario.avatar}</td>
                       </tr>` 
       }
       document.getElementById("user").innerHTML = tabla
    })