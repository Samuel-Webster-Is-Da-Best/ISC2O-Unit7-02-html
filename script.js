document.getElementById('button').addEventListener('click', posneg)

function posneg () {
  const inpt = document.getElementById('box').value
  const value = parseInt(inpt)
  if (value < 0) {
    alert('your number is negative')
    document.getElementById('box').value = ''
  } else {
    alert('your number is positive')
    document.getElementById('box').value = ''
  }
}
