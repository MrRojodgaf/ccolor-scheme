const seed = document.getElementById('seed-color')
const selectEl = document.getElementById('select')
const colorSchemes = document.getElementById('color-schemes')
document.addEventListener('click', function(e){
    const cleanHex = seed.value.slice(1)
    let colorRender = ""
    let colorValue = ""
        fetch(`https://www.thecolorapi.com/scheme?hex=${cleanHex}&mode=${selectEl.value}`)
        .then(res => res.json())
        .then(data => {
            for(let color of data.colors){
                colorValue = color.hex.value
                if (e.target.id == 'button') {
                    colorRender += `<div class="color-container">
                                        <div id="color-div" class="color-div" data-hex="${colorValue}" 
                                        style="background-color: ${colorValue}">
                                        </div>
                                        <p>${colorValue}</p>
                                    </div>
                                    `
                   colorSchemes.innerHTML = colorRender
               }
            
            }
             if (e.target.dataset.hex){
                   alert(e.target.dataset.hex)
               }
        })
})

    