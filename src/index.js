import App from "./App.js";

export default function index()
{
    return(
        <App name="kevin" age="34" />
    )
}

document.body.innerHTML = index();