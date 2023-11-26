export default defineEventHandler((event) => {
    console.log('New request: ' + getRequestURL(event))
  })

function defineEventHandler(arg0: (event: any) => void) {
    throw new Error("Function not implemented.")
}

function getRequestURL(event: any) {
    throw new Error("Function not implemented.")
}
  