
import React, { useState } from "react";
import Styles from "./Main.module.css";
import matthew from "../../data/Matthew.json"

export const Main = ()=> {

  const [bible,setItems] = useState([
     {id: 1,book: "Matthew",chapters:[{verse:"1"}]},
     {id: 2,book: "Mark",chapters:[{verse:"1"}]},
     {id: 3,book: "Luke",chapters:[{verse:"1"}]},
     {id: 4,book: "Jhon",chapters:[{verse:"1"}]}
  ])

// console.log(bibles);

// matthew.map((book) => {
//     // console.log(`Chapter ${book.chapters}:`);
//     book.chapters.map((verse) => {
//       console.log(`Chapter ${verse.chapter}:`);
//       verse.verses.map((ver) => {

//         console.log(`${ver.verse}: ${ver.text}`);
//     })
      
//     })
// })


  return(
     <>
        <main className={Styles.main}>
         <div className={Styles.filterBook}>
             <div className={Styles.searchContainer}>
               <input type="text"placeholder="Search verse" className={Styles.searchInput} disabled />
               <button className={Styles.searchBtn}>search</button>
             </div>
           
             <div className={Styles.filterBookName}>
               <p className={Styles.textCenter}> Version</p>

               <ul>
                <li>American version</li>
                <li>King James version</li>
                <li>New Living Translation</li>
                <li>NIV</li>
                
         
               </ul>
             </div>
         </div>
          <div className={Styles.book} id="back-to-top">
             
               <div className={Styles.booknav}>
                    <div className={Styles.filterBookNameNav}>
                   
                    <ul className={Styles.navItem}>

                      <li className={Styles.navList}>Matthew</li>
                      <li className={Styles.navList}>Mark</li>
                      <li className={Styles.navList}>Luke</li>
                      <li className={Styles.navList}>John</li>
                      
                      <li className={Styles.navList}>Matthew</li>
                      <li className={Styles.navList}>Mark</li>
                      <li className={Styles.navList}>Luke</li>
                      <li className={Styles.navList}>John</li>
                      
                      <li className={Styles.navList}>Matthew</li>
                      <li className={Styles.navList}>Mark</li>
                      <li className={Styles.navList}>Luke</li>
                      <li className={Styles.navList}>John</li>
                      
                      <li className={Styles.navList}>Matthew</li>
                      <li className={Styles.navList}>Mark</li>
                      <li className={Styles.navList}>Luke</li>
                      <li className={Styles.navList}>John</li>
                                   
                    </ul>
                  </div>
               </div>
       
             <div className={Styles.mainBook}>

               {
               
                      matthew.map((book) => (
                        <div>
                                <h1>{book.book}</h1>

                                 {book.chapters.map((verse) => (
                                  
                                     <div>
                                       <h4 className={Styles.bookNameTitle}>Chapter : {verse.chapter} </h4>
                                          {
                                            verse.verses.map((ver) => (
                                                  <div>
                                                    
                                                     <p className={Styles.verseText}> <sup className={Styles.verseNumber}>{ver.verse}</sup>{ver.text}</p>
                                                  </div>

                                              
                                            ))
                                          }
                                     </div>
                            
                                  ))}
                       
                        </div>
                      

                            
                      ))
               }    
              
               
             </div>
    
          </div>
        </main>


        <button class="btn btn-danger OpenOfcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  Button
                </button>
                <a href="#back-to-top" class="btn btn-danger backToTop" >
                  Back
                </a>

      <div class="offcanvas offcanvas-start bg-light" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">REDLETTER</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        <div className={Styles.filterBook}>
             <div className={Styles.searchContainer}>
               <input type="text"placeholder="Search verse" className={Styles.searchInput} disabled />
               <button className={Styles.searchBtn}>search</button>
             </div>
             <div className={Styles.filterBookName}>
               <p className={Styles.textCenter}> Book</p>

               <ul>
              
                <li>Matthew</li>
                <li>Mark</li>
                <li>Luke</li>
                <li>John</li>
         
               </ul>
             </div>
             <div className={Styles.filterBookName}>
               <p className={Styles.textCenter}> Version</p>

               <ul>
                <li>American version</li>
                <li>King James version</li>
                <li>New Living Translation</li>
                <li>NIV</li>
                
         
               </ul>
             </div>
         </div>
        </div>
      </div>
     </>
  )
  }