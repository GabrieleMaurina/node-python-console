const readline = require('readline').createInterface(process.stdin, process.stdout)
const proc = require('child_process').spawn('python', ['process.py'], ['pipe', 'pipe','pipe'])

proc.stdout.on('data', (data) => {
  process.stdout.write(data.toString())
})

proc.stderr.on('data', (data) => {
  process.stdout.write(data.toString())
})

proc.on('exit', () => {
  process.exit()
})

readline.on('line', (data) => {
  proc.stdin.write(data + '\n')
})
