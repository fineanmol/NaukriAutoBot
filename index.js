const axios = require("axios");

async function makeRequestToBot() {
  let data = await axios
    .post("http://152.67.1.129:8080/launch", {
      email: "agarwal.anmol2004@gmail.com",
      password: "Anmol@123",
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return `No Update on ${new Date().toUTCString()}`;
    });

  const readme = `\
    ⏰ ${data}
  `;
  console.log(readme);
}

//makeRequestToBot();
