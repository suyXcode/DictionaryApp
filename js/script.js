async function getDefinition() {
    const word = document.getElementById('wordInput').value;
    const resultDiv = document.getElementById('result');

    if (word === "") {
        resultDiv.innerHTML = "Please enter a word.";
        return;
    }

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/ ${word}`);

    if (!response.ok) {
        resultDiv.innerHTML = "Word not found.";
        return;
    }

    const data = await response.json();
    const definition = data[0].meanings[0].definitions[0].definition;

    resultDiv.innerHTML = `<strong>${word}:</strong> ${definition}`;
}
