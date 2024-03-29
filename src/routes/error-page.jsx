import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{backgroundColor:'#151F2B',height:'100vh'}}>
        <div id="error-page" style={{color:'white',textAlign:'center',paddingTop:'10em'}}>
            <h1>Oops!</h1>
            <p>Ci scusiamo, errore.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    </div>
  );
}