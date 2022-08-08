// Hent elementet med id'en "inputfile" (knappen) og indsæt en EventListener som holder øje med, om der sker noget ("change" betyder at den skifter tilstand fra fx ikke at indeholde en valgt fil til at indeholde en valgt fil). Når der sker en ændring, skal den efterfølgende funktion køres
document.getElementById('inputfile').addEventListener('change', function() {
              
  // Opret en ny variabel af klassen/objektet FileReader, som er en indbygget JavaScript klasse til at håndtere/læse uploadede filer
  var fr=new FileReader();
  // Når FileReader objektet er oprettet, skal den efterfølgende funktion køres
  fr.onload=function(){
      // Hent elementet med id'en "output" og sæt dens HTML-indhold til at være lig med det, der er blevet læst fra filen. Når readAsText funktionen er blevet kørt (linje 16), så indlæses indholdet af den valgte fil i fr.result
      document.getElementById('output').textContent=fr.result;

      // Det betyder, at du også kan tage indholdet af den valgte fil (som nu ligger i fr.result) og lægge det over i sin egen variabel, som du kan udskrive.
      let filecontent = fr.result;
      console.log(filecontent);
  }
  // Læs indholdet fra den første uploadede fil som tekst. Når dette er gjort lægges det, som der er blevet læst fra filen ind i propertyen "result", som blev brugt på linje 9 til at lægge ind i pre-tagget. JavaScripten er ligeglad med rækkefølgen, for pre-tagget er lig med result-propertien både når den er tom, og når der bliver lagt noget ind i den senere.
  fr.readAsText(this.files[0]);

})