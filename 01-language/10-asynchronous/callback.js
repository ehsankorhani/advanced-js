
const greeting = (name, done, fail) => {
  if (!name || !name.length > 0)
    return fail('name not specified')

  console.log(`Hi ${name}`)

  done()
}

const done = () => {
  console.log(`task completed.`)
}

const fail = (error) => {
  console.log(`task failed: ${error}.`)
}

greeting('Alfie', done, fail)