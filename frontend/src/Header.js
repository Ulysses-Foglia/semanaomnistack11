import React from 'react'; 

//poderia chamar Header(children), porém, deu erro
export default function Header(props){
    return  (
        <header>
            {/* <h1>{props.title}</h1> */}
            <h1>{props.children}</h1>
        </header>
    );
}