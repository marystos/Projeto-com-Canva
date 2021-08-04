
const canvas = document.querySelector("canvas")
//tamanho do canvas
canvas.width = window.innerWidth
canvas.height = window.innerHeight

//contexto 2d
const context = canvas.getContext("2d")

//style da linha
context.strokeStyle = "#ff4141"
context.lineWidth = 10
context.lineCap = "round"

//shouldPaint = deve pintar? (estou mostrando para o programa quando ele deve e quando não deve pintar)
let shouldPaint = false

document.addEventListener("mousedown", function(event){
	shouldPaint = true
	context.moveTo(event.pageX, event.pageY)
	context.beginPath()
})

document.addEventListener("mouseup", function(event){
	shouldPaint = false
})

document.addEventListener("mousemove", function(event) {
	if (shouldPaint) {
	context.lineTo(event.pageX, event.pageY)
	context.stroke()
	}
})


//trocar de cor ao clicar
document.querySelectorAll("nav a").forEach(link => {
	link.addEventListener("click", function(event) { 
		context.strokeStyle = this.style.backgroundColor
	})
})










//adiciona imagem
var img = new Image();
img.src = 'image.jpeg'
ctx.drawImage(img, 0, 0)