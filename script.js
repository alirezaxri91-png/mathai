function send() {
  let question = document.getElementById("input").value.toLowerCase()

  let result = ""

  if (question.includes("معادله درجه دو")) {
    result = `# حل معادله درجه دو
a = 1
b = -3
c = 2

delta = b**2 - 4*a*c
x1 = (-b + delta**0.5) / (2*a)
x2 = (-b - delta**0.5) / (2*a)

print(x1, x2)`
  } else {
    result = "# هنوز این سوال پشتیبانی نمیشه"
  }

  document.getElementById("output").innerText = result
}
