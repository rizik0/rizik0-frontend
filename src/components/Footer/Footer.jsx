import "./Footer.scss";
import React from 'react';

export default function Footer(){
    return (
        <section id="Footer">
            <footer className="footer text-center text-white">
                <div className="text-center p-3">
                    <em> <a> Created by CPF   &ensp; </a> </em>
                    <a>  | &ensp;</a>
                    <a className="text-white" href="https://github.com/rizik0">     GitHub </a>
                </div>
            </footer>
        </section>
    );
}
