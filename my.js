function testGS(){

    const url = "https://script.google.com/macros/s/AKfycbwnbItOpDQnA5zR7BhDpYTRnDMryCvrMRnXlYcU3Xan74jJJdmq0aDJs5rs1KwFe8Sx6w/exec";


    fetch(url)
        .then(d => d.json())
        .then(d => {
            // document.getElementById("app").textContent = d[0].status;
            document.getElementById("app").textContent = d[0].status;
        });

}

document.getElementById("btn").addEventListener("click", testGS);