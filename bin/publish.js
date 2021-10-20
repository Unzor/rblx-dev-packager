#! /usr/bin/env node
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

// Read image from disk as a Buffer
const image = await fs.readFileSync(process.argv[2]);

// Create a form and append image with additional fields
const form = new FormData();
form.append('fileUploaded', image, process.argv[2]);

// Send form data with axios
const response = axios.post(`https://rblx-dev-packager.herokuapp.com/api/add?name=${process.argv[3]}`, form, {
  headers: {
    ...form.getHeaders()
  },
}).then((response) => {
 console.log(response.data);
})
.catch((error) => {
throw error;
})
})()
