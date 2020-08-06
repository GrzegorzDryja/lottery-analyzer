/// <reference lib="dom" />

class LastDraws {
  constructor(){
    this.loadDraws();
  }

  private loadDraws() {
    return fetch("/draws")
    .then((drawsResponse) => drawsResponse.json())
    .then((draws) => {
      const hostElement = document.getElementById("host")!;
      draws.forEach((draw: {}) => {
        const li = document.createElement("li");
        li.innerHTML = JSON.stringify(draw);
        hostElement.appendChild(li);
      });

    });
  }
}


new LastDraws;