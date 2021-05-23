import React, { useState } from 'react';
// import AdvancedTypescriptEditor from "./components/AdvancedTypescriptEditor";
import SimpleMonacoEditor  from './components/SimpleMonacoEditor';

const App = () => {
    const [lang,setLang] = useState('javascript');
    const [theme,setTheme] = useState('vs-dark');
    return (  
        <div className='App'>
            <div className='ToolBar'>
            <select onChange={(e)=>{setLang(e.target.options[e.target.selectedIndex].text)}} defaultValue='javascript'>
                <option>abap</option> 
                <option>aes</option> 
                <option>apex</option> 
                <option>azcli</option> 
                <option>bat</option> 
                <option>bicep</option> 
                <option>c</option> 
                <option>cameligo</option> 
                <option>clojure</option> 
                <option>coffeescript</option> 
                <option>cpp</option> 
                <option>csharp</option> 
                <option>csp</option> 
                <option>css</option> 
                <option>dart</option> 
                <option>dockerfile</option> 
                <option>ecl</option> 
                <option>elixir</option> 
                <option>fsharp</option> 
                <option>go</option> 
                <option>graphql</option> 
                <option>handlebars</option> 
                <option>hcl</option> 
                <option>html</option> 
                <option>ini</option> 
                <option>java</option> 
                <option value='javascript'>javascript</option> 
                <option>json</option> 
                <option>julia</option> 
                <option>kotlin</option> 
                <option>less</option> 
                <option>lexon</option> 
                <option>liquid</option> 
                <option>lua</option> 
                <option>m3</option> 
                <option>markdown</option> 
                <option>mips</option> 
                <option>msdax</option> 
                <option>mysql</option> 
                <option>objective-c</option> 
                <option>pascal</option> 
                <option>pascaligo</option> 
                <option>perl</option> 
                <option>pgsql</option> 
                <option>php</option> 
                <option>plaintext</option> 
                <option>postiats</option> 
                <option>powerquery</option> 
                <option>powershell</option> 
                <option>pug</option> 
                <option>python</option> 
                <option>r</option> 
                <option>razor</option>
                <option>redis</option> 
                <option>redshift</option> 
                <option>restructuredtext</option> 
                <option>ruby</option> 
                <option>rust</option> 
                <option>sb</option> 
                <option>scala</option> 
                <option>scheme</option> 
                <option>scss</option> 
                <option>shell</option> 
                <option>sol</option> 
                <option>sql</option> 
                <option>st</option> 
                <option>swift</option> 
                <option>systemverilog</option> 
                <option>tcl</option> 
                <option>twig</option> 
                <option>typescript</option> 
                <option>vb</option> 
                <option>verilog</option> 
                <option>xml</option> 
                <option>yaml</option> 
            </select>
            <select defaultValue='vs-dark' onChange={(e)=>{setTheme(e.target.value)}}>
                <option value='vs'>Visual Studio</option>
                <option value='vs-dark'>Visual Studio Dark</option>
                <option value='hc-black'>High Constrast Black</option>
            </select>
            </div>
            <SimpleMonacoEditor language={lang} theme={theme}/>
        </div>
    );
}
 
export default App;

