const recyclingTips = {
  plastic: "Rinse and drop at a plastic recycling bin.",
  paper: "Keep dry, bundle, and send to paper recycling.",
  organic: "Compost at home or use a community compost pit.",
  "e-waste": "Drop at authorized e-waste collection center.",
  metal: "Collect and sell to scrap dealers or recycling units.",
  glass: "Wrap safely and send to glass recycling."
};

function classifyWaste() {
  const fileInput = document.getElementById("wasteImage").files[0];
  const resultBox = document.getElementById("result");
  const tipBox = document.getElementById("tip");

  if (!fileInput) {
    resultBox.innerHTML = "Please upload an image first.";
    tipBox.innerHTML = "";
    return;
  }

  resultBox.innerHTML = "Classifying... 🔍";
  tipBox.innerHTML = "";

  // Simulate AI classification (replace with real API call)
  setTimeout(() => {
    const categories = Object.keys(recyclingTips);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    resultBox.innerHTML = `🧠 Predicted Category: <strong>${randomCategory.toUpperCase()}</strong>`;
    tipBox.innerHTML = `♻️ Tip: ${recyclingTips[randomCategory]}`;
  }, 1500);
}
