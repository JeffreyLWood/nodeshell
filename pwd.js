function func1(){
  process.stdout.write("Directory: " + process.cwd())
}

function func2(){
  process.stdout.write("   hello")
}

module.exports = {
  func1,
  func2
}
