function getFirstSelector(selector) {
return  document.querySelector(selector)

}

function nestedTarget() {
return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
const lis =
document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString()
    return String()
  }
}

function deepestChild() {
  const deepestChild = document.querySelector('div.grand-node div)
}