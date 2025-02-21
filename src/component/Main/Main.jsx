
import React, { useState } from "react";
import Styles from "./Main.module.css";
import bibles from "../../data/Matthew.json"

export const Main = ()=> {

  const [bible,setItems] = useState([
     {id: 1,book: "Matthew",chapters:[{verse:"1"}]},
     {id: 1,book: "Mark",chapters:[{verse:"1"}]},
     {id: 1,book: "Luke",chapters:[{verse:"1"}]},
     {id: 1,book: "Jhon",chapters:[{verse:"1"}]}
  ])

// console.log(extractedData);

  return(
     <>
        <main className={Styles.main}>
         <div className={Styles.filterBook}>
             <div className={Styles.searchContainer}>
               <input type="text"placeholder="Search verse" className={Styles.searchInput} />
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
         </div>
          <div className={Styles.book}>
       
             <div className={Styles.mainBook}>
                  {bible.map((book,index)=>(
                  <div key={book.id} id={book.book}>
                      <h4 className={Styles.bookNameTitle}>{book.book}</h4>
                      <p className={Styles.verseText}> <sup className={Styles.verseNumber}>1</sup>The book of the generation of Jesus Christ, the son of David, the son of Abraham.Abraham begat Isaac; and Isaac begat Jacob; and Jacob begat Judas and his brethrenThe book of the generation of Jesus Christ, the son of David, the son of Abraham.Abraham begat Isaac; and Isaac begat Jacob; and Jacob begat Judas and his brethrenThe book of the generation of Jesus Christ, the son of <sup className={Styles.verseNumber}>2</sup>David, the son of Abraham.Abraham begat Isaac; and Isaac begat Jacob; and Jacob begat Judas and his brethrenThe book of the generation of Jesus Christ, the son of David, the son of Abraham.Abraham begat Isaac; and Isaac begat Jacob; and Jacob begat Judas and his brethrenThe book of the generation of Jesus Christ, the son of David, the son of Abraham.Abraham begat Isaac; and Isaac begat Jacob; and Jacob begat Judas and his brethrenThe book of the generation of Jesus Christ, the son of David, the son of Abraham.Abraham begat Isaac; and Isaac begat Jacob; and Jacob begat Judas and his brethrenThe book of the generation of Jesus Christ, the son of David, the son of Abraham.Abraham begat Isaac; and Isaac begat Jacob; and Jacob begat Judas and his brethren</p>
                  </div>
                  ))}
             </div>
    
          </div>
        </main>
     </>
  )
  }