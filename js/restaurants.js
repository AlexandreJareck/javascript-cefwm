window.onload = function () {

  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    alert('Não autorizado')
    return;
  }

  var data = [];
  debugger;
  fetch("http://localhost:8080/restaurantes", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  })
    .then(res => res.json())
    .then(res => {

      if (res)
        data = res;

      var root = document.getElementById('root');
      data.forEach(element => root.insertAdjacentHTML('beforebegin',
        `<tr><td>${element?.nome}</td><td>${element?.taxaFrete}</td></tr>`));

    });
}