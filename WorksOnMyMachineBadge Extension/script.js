safari.self.addEventListener("message", handleMessage);

function handleMessage(event) {
    if(event.name !== "toggle") return;
    let id = 'womm-badge'

    var div = document.getElementById(id)

    if (div) {
      document.body.removeChild(div)
    } else {
      div = document.createElement('div')
      div.id = id

      document.body.appendChild(div)
    }
}
