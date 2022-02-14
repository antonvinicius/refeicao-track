(() => {
  const { amountSeg, amountTer, amountQua, amountQui, amountSex } = updateValues()

  if (amountSeg) document.getElementById('amountSeg').value = amountSeg
  if (amountTer) document.getElementById('amountTer').value = amountTer
  if (amountQua) document.getElementById('amountQua').value = amountQua
  if (amountQui) document.getElementById('amountQui').value = amountQui
  if (amountSex) document.getElementById('amountSex').value = amountSeg
})()

function updateValues() {
  const amountSeg = localStorage.getItem('amountSeg')
  const amountTer = localStorage.getItem('amountTer')
  const amountQua = localStorage.getItem('amountQua')
  const amountQui = localStorage.getItem('amountQui')
  const amountSex = localStorage.getItem('amountSex')

  document.getElementById('amount').innerHTML = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(((40 * 5) - (+amountSeg) - (+amountTer) - (+amountQua) - (+amountQui) - (+amountSex)))

  return {
    amountSeg,
    amountTer,
    amountQua,
    amountQui,
    amountSex
  }
}

function resetFields() {
  localStorage.setItem('amountSeg', '')
  localStorage.setItem('amountTer', '')
  localStorage.setItem('amountQua', '')
  localStorage.setItem('amountQui', '')
  localStorage.setItem('amountSex', '')

  document.getElementById('amountSeg').value = ''
  document.getElementById('amountTer').value = ''
  document.getElementById('amountQua').value = ''
  document.getElementById('amountQui').value = ''
  document.getElementById('amountSex').value = ''
}

function handleReset() {
  if (confirm("Tem certeza que deseja resetar os valores?")) {
    resetFields()
    updateValues()
  }
}

function saveAmountSeg(amountSeg) {
  if (amountSeg) {
    localStorage.setItem('amountSeg', amountSeg)
    updateValues()
  }
}

function saveAmountTer(amountTer) {
  if (amountTer) {
    localStorage.setItem('amountTer', amountTer)
    updateValues()
  }
}

function saveAmountQua(amountQua) {
  if (amountQua) {
    localStorage.setItem('amountQua', amountQua)
    updateValues()
  }
}

function saveAmountQui(amountQui) {
  if (amountQui) {
    localStorage.setItem('amountQui', amountQui)
    updateValues()
  }
}

function saveAmountSex(amountSex) {
  if (amountSex) {
    localStorage.setItem('amountSex', amountSex)
    updateValues()
  }
}