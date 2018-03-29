var args = Array.from(process.argv).slice(2)
args = args.length > 0 ? args : ['process.py']

const readline = require('readline').createInterface(process.stdin, process.stdout)
const proc = require('child_process').spawn('python', args, ['pipe', 'pipe','pipe'])

proc.stdout.on('data', (data) => {
	process.stdout.write(data.toString())
})

proc.stderr.on('data', (data) => {
	process.stdout.write(data.toString())
})

proc.on('exit', () => {
	process.exit()
})

proc.on('error', (err) => {
	console.log(err)
	process.exit()
})

readline.on('line', (data) => {
	proc.stdin.write(data + '\n')
})
