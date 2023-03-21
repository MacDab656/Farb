// Funkcja do tworzenia nowych receptur
function addRecipe() {
  const recipeName = document.getElementById("addRecipeName").value;
  const recipeIngredients = {};
  const ingredientList = document.getElementById("addRecipeIngredientList");
  const rows = ingredientList.querySelectorAll("tr");
  for (let i = 1; i < rows.length - 1; i++) {
    const cells = rows[i].querySelectorAll("td");
    const ingredientName = cells[0].querySelector("input").value;
    const ingredientAmount = parseFloat(cells[1].querySelector("input").value);
    recipeIngredients[ingredientName] = ingredientAmount;
  }
  recipes[recipeName] = recipeIngredients;
  document.getElementById("addRecipeForm").reset();
  document.getElementById("formContainer").innerHTML = "";
  showMenu();
  alert("Receptura została dodana.");
}

// Funkcja do odtwarzania receptury i wyliczania ilości składników na podstawie docelowej wagi
function playbackRecipe() {
  const recipeName = document.getElementById("playbackRecipeName").value;
  if (!recipes.hasOwnProperty(recipeName)) {
    alert("Nie ma takiej receptury.");
    return;
  }
  const targetWeight = parseFloat(document.getElementById("playbackRecipeWeight").value);
  const