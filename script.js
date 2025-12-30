function send() {
  let question = document.getElementById("input").value

  let result =
`# کد پایتون تولید شده
# سوال
# ${question}

import math

print("در حال حل مسئله ریاضی")`

  document.getElementById("output").innerText = result
}
