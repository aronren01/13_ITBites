import './App.css';
import { GoogleLogin } from '@react-oauth/google';
function App() {
    return (
        <div className="App">
            <header className ="App-header">
                <span>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                    ;
                </span>
            </header>
        </div>
    );
}
export default App;