function register(e) {
  e.preventDefault();

  if (!document.querySelector("#name")?.value || !document.querySelector("#freightRate")) {
    alert('Preencha os campos!');
    return;
  }

  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    alert('Não autenticado');
    return;
  }
  
  fetch("http://localhost:8080/restaurantes", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(createRestaurant())
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      window.location.href = "/restaurants.html"
    });
}

function createRestaurant() {
  return {
    nome: document.querySelector("#name").value,
    taxaFrete: document.querySelector("#freightRate").value
  }
}