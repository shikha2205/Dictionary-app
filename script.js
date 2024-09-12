const form=document.querySelector('form');
const resultDiv=document.querySelector('.result');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    getWordInfo(form.elements[0].value);

});
const getWordInfo=async (word)=>{
    const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data=await response.json();
    let definitions=data[0].meanings[0].definitions[0];
    //alert("Word:" +word);
    resultDiv.innerHTML=`
    <h2><strong>Word:</strong>${data[0].word}</h2>
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p><strong>Meaning:</strong>${definitions.definition===undefined?"not found":
    definitions.definition}</p>
    <p><strong>Example:</strong>${definitions.example===undefined?"not found":
    definitions.example}</p>
    `;
    console.log(data);
}