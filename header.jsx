import React from "react";

// #----------------------#
import Sexual_img from "./image/sexual.png";
import Date_img from "./image/date.png";
import Phone_img from './image/phone.png';
import Mail_img from "./image/mail.png";
import personal_img from "./image/personal.jpg"




// 
function Header(){
    
    return( <div className="my-self-project">
        <div className='outer_title'>
        <h1>陳冠維</h1>
        <img className="personal_img"src={personal_img}></img>
        <div className="left_title">
           <div className="sexual_section"> <img className="sexual_img"src={Sexual_img}/><p1>:男生</p1></div>
           <div className="age_section">  <img className="date_img"src= {Date_img}/><p1>:2002/09/17</p1></div>
           <div className="phone_section">  <img className="phone_img"src= {Phone_img}/><p1>:0905672246</p1></div>
           <div className="mail_section">  <img className="mail_img"src= {Mail_img}/><p1>:chenkevin123618@gmail.com</p1></div>
            </div>
        

        </div>
        <div className="second_title">
            
            <h2>目前任職於 今網智慧科技股份有限公司 |網路工程師 </h2>
                <div className="second_title_top">
                    <h1 className="h1">簡歷:</h1>
                    <h1 className="h2">技能:</h1>
                     <h1 className="h3">求職動機:</h1>
                    <hr className="hr_1"></hr>
                        <div className="myself">
                            <h2>學歷:東南科技大學<br/><p2>|電子工程系|大學日間就讀中</p2></h2>
                            <br/><p3>在大學二年級中,自己有開始學習程式語言，雖然遇到很多挫折，但還是有學習到有相關於前端的HTML,CSS,JavaScript和React的架構，目前正在學習後端的程式語言。大學期間也有學到相關的電腦硬體組裝架構和電子元件的架構。任職中的工作有學習到有關於機房端，客戶端，以及社區網路的架構。</p3>
                            </div>
                    <hr className="hr_2"></hr>
                    <hr className="hr_3"></hr>
                        <div className="skill_section_1">
                            
                            <p1>網路工程技能:中</p1>
                            <br/><p2>架設網路技能:  乙太網路、光化網路(光纖網路)<br/>網路維修技能: 從內網客戶家的分享器(AP,MESH)到外網<br/>(電信機房)作排查動作</p2>
                            
                    
                        </div>
                        <div className="skill_section_2">
                            
                            <p1>程式技能:低</p1>
                            <br/><p2>前端:HTML,CSS,JavaScript,React<br/>後端:Node.js</p2>
                            
                    
                        </div>
                        <div className="skill_section_3">
                            
                            <p1>外語能力:中</p1>
                            <br/><p2>英讀:中<br/>英聽:中<br/>英說:低</p2>
                            
                    
                        </div>

                        <div className="job_request">
                            <p1 className="p1">希望職稱:內勤相關|程式工程師|網路工程師</p1><br/><br/>
                            <p2 className="p2">想嘗試更多網站架設的工作，目前正在學習後端，資料庫(Mysql)的架設，想更深入的學習業界的方法。
                            我期待能夠在貴公司發揮我的專業技能，並與團隊一起實現[公司目標]。
                            </p2>
                        </div>
                    <hr className="hr_4"></hr>   
                    <hr className="hr_5"></hr>  
                </div>
        </div>
       </div>

    )
}
export default Header;