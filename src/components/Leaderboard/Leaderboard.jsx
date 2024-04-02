import React, { useEffect } from "react";
import "./Leaderboard.scss";
import soldier from "../../assets/soldier.png";

export default function Leaderboard({ powName, firstLeader, firstPoints , secondLeader, secondPoints, thirdLeader, thirdPoints, playerLeaderFourth, playerFourthPoints, playerLeaderFifth, playerFithPoints}) {

    
    const x_pos = 368;
    const y_pos = 120;
    

    const leaderboardSection = (
        <section id="Leaderboard">
            <div className="container">
                <div className="row" id="pow">
                    <div className="col">
                        <svg width="368" height="299" viewBox="0 0 368 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="179" width="368" height="120" rx="30" fill="#151F2B"/>
                        <path d="M39 225V211H51V213H53V219H51V221H43V225H39ZM43 219H49V213H43V219ZM57 225V223H61V213H59V211H65V223H69V225H57ZM73 225V223H71V221H73V219H81V217H73V215H83V217H85V225H73ZM75 223H81V221H75V223ZM89 227V225H97V223H89V221H87V215H91V221H97V215H101V225H99V227H89ZM105 225V223H103V217H105V215H115V217H117V221H107V223H115V225H105ZM107 219H113V217H107V219ZM125 217H127V219H125V225H121V215H125V217ZM133 215V217H127V215H133ZM153 225V223H151V217H153V215H163V217H165V223H163V225H153ZM155 223H161V217H155V223ZM173 225V217H169V215H173V213H175V211H181V213H177V215H181V217H177V225H173ZM205 225V217H201V215H205V211H209V215H213V217H209V225H205ZM215 225V211H219V215H227V217H229V225H225V217H219V225H215ZM233 225V223H231V217H233V215H243V217H245V221H235V223H243V225H233ZM235 219H241V217H235V219ZM267 223H269V225H265V223H263V215H267V223ZM271 215V223H269V215H271ZM277 215V223H275V225H271V223H273V215H277ZM281 225V223H279V217H281V215H291V217H293V221H283V223H291V225H281ZM283 219H289V217H283V219ZM297 225V223H295V217H297V215H307V217H309V221H299V223H307V225H297ZM299 219H305V217H299V219ZM311 225V211H315V219H319V217H321V215H325V217H323V219H321V221H323V223H325V225H321V223H319V221H315V225H311Z" fill="#FEFDE8"/>
                        <text x="50%" y="88%" className="powName" dominantBaseline="middle" textAnchor="middle">{powName}</text>    
                        <rect id ="pole" x="171" width="23" height="179" fill="#151F2B"/> 
                    </svg>


                    </div>
                </div>
                <div className="row">
                    <div id ="soldier"className="col-8">
                        <img  style={{marginTop:"6vh"}} src={soldier} />
                    </div>
                    <div className="col-4" id="leaderboard">
                        <svg width="450" height="406" viewBox="0 0 450 406" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect id="lead_rect" width="450" height="297" rx="55" fill="#151F2B"/>
                        <path d="M100 63V42H106V60H118V63H100ZM124 63V60H121V51H124V48H139V51H142V57H127V60H139V63H124ZM127 54H136V51H127V54ZM148 63V60H145V57H148V54H160V51H148V48H163V51H166V63H148ZM151 60H160V57H151V60ZM172 63V60H169V51H172V48H184V42H190V63H172ZM175 60H184V51H175V60ZM196 63V60H193V51H196V48H211V51H214V57H199V60H211V63H196ZM199 54H208V51H199V54ZM226 51H229V54H226V63H220V48H226V51ZM238 48V51H229V48H238ZM244 63V60H241V42H247V48H259V51H262V60H259V63H244ZM247 60H256V51H247V60ZM268 63V60H265V51H268V48H283V51H286V60H283V63H268ZM271 60H280V51H271V60ZM292 63V60H289V57H292V54H304V51H292V48H307V51H310V63H292ZM295 60H304V57H295V60ZM322 51H325V54H322V63H316V48H322V51ZM334 48V51H325V48H334ZM340 63V60H337V51H340V48H352V42H358V63H340ZM343 60H352V51H343V60Z" fill="#FEFDE8"/>
                        <text x="50%" y="26%" className="firstLeader" dominantBaseline="middle" textAnchor="middle">1.{firstLeader}.......{firstPoints}</text>    
                        <text x="50%" y="34%" className="secondLeader" dominantBaseline="middle" textAnchor="middle">2.{secondLeader}.......{secondPoints}</text>    
                        <text x="50%" y="42%" className="thirdLeader" dominantBaseline="middle" textAnchor="middle">3.{thirdLeader}.......{thirdPoints}</text>    
                        <text x="50%" y="50%" className="playerLeader" dominantBaseline="middle" textAnchor="middle">4.{playerLeaderFourth}.......{playerFourthPoints}</text>    
                        <text x="50%" y="58%" className="playerLeader" dominantBaseline="middle" textAnchor="middle">5.{playerLeaderFifth}.......{playerFithPoints}</text>    
                        <rect id="lead_pole" x="213" y="297" width="38" height="92" fill="#151F2B"/>
                        <rect id="lead_base" x="150" y="372" width="165" height="34" rx="17" fill="#151F2B"/>
                        </svg>

                    </div>
                    
                </div>
            </div>
        </section>
    );

    return leaderboardSection;
}