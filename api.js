async function classifyWaste() {
  const fileInput = document.getElementById('wasteImage').files[0];
  const formData = new FormData();
  formData.append("file", fileInput);

  // Example Hugging Face API call
  const response = await fetch("https://api-inference.huggingface.co/models/your-model", {
    method: "POST",
    headers: { "Authorization": "Bearer YOUR_API_KEY" },
    body: formData
  });

  const result = await response.json();
  document.getElementById("result").innerHTML = 
    `<h3>Prediction: ${result[0].label}</h3>
     <p>Confidence: ${(result[0].score*100).toFixed(2)}%</p>`;
}