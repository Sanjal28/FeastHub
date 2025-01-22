// import useGitHubApi from "../../utils/useGitHubApi";

const Contact=()=>{
  // const coninfo=useGitHubApi();//custom hook for fetching information
  return(
    <div>
      <h1 className="text-bold text-2xl text-center">CONTACT </h1>
      <form>
        <input type="text" placeholder="Enter your name" className="border border-black m-2 p-2"/>
        <input type="text" placeholder="Enter your message" className="border border-black m-2 p-2"/>
        <button className="border border-black m-2 p-2 rounded-lg bg-gray-200">Submit</button>
      </form>
      {/* <h2>Name: {coninfo.name}</h2>
      <h2>URL: {coninfo.organizations_url}</h2> */}
    </div>
  )
}
//the below code is to understand return in useEffect-
// -in comparision with componentwillunmount
// const Contact = () => {
//   useEffect(()=>{
//     const timer=setInterval(()=>{
//       console.log("hi from contact")
//     },1000)
//     return ()=>{
//       console.log("bye")
//       clearInterval(timer)
//     }
//   },[])
//   return (
//     <div>
//       <h1>Conatct Info</h1>
//     </div>
//   );
// };
export default Contact;
