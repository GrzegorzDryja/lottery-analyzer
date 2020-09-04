export default class InputRow {

  constructor(){
    const hostElement = document.getElementById("host")! as HTMLDivElement;
    const headerText = "Wybierz liczby:";

    const a = document.createElement("div");
          a.className = "row";

    const b = document.createElement("div");
          b.className = "header";
          b.innerHTML = headerText;
        
    a.appendChild(b);      
  
    for(let i=1; i<81; i++){
      const c = document.createElement("div");
            c.className = "square"; 
      a.appendChild(c);
    }
      
    hostElement.insertAdjacentElement("beforeend", a)
  }
}
