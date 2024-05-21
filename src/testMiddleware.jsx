

 function testMiddleware({dispath,getState}) {
  return (next)=>{
    return (action)=>{
        console.log(getState())
        console.log(action)
        next(action)
        console.log(getState())
        console.log('----------------')
    }
  }
}
export default testMiddleware;