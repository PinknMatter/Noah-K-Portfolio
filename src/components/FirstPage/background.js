import "./../../Styles/FirstPage/Background.css";
import React from "react";
import { useEffect } from "react";


function Background() {

    useEffect(() => {

        let boxes = [];
        let direction  = "";
        let prevScrollTop =0;
        document.addEventListener('scroll', fillBoxes);
        window.addEventListener('resize', recreateonResize)

        createLinesUsingJS();
      
      
          /************************************************
          **** FUNCTION  -> REDRAW LINES WHEN RESIZE ****
        *************************************************/
        function recreateonResize(){
          console.log("resize");
          createLinesUsingJS();
      
        }
      
        /************************************************
        **** FUNCTION  -> ALGORITHM FOR DRAWING LINES ****
        *************************************************/
    
        function createLinesUsingJS(){

          document.getElementById("parent").innerHTML = "";

        //resset
         boxes =[];
          direction  = "";
          prevScrollTop =0;
          let parentContainer = document.getElementById("parent");
          let parentBounds = parentContainer.getBoundingClientRect();
          let currentY = 0;
          let currentX = parentBounds.width/2 -80;
          let offset = (parentBounds.height/100)/2;
          //console.log(offset)

          // BUILD AN ARRAY OF BOXES.... based on width and height...
          // may need to detect a resize and then redraw ... 

          for(let i = 0 ; i< 10; i++){
           
            createBox(currentX,currentY,offset);
            currentY+=offset;
          } // down 
           
          for(let i = currentX; i< parentBounds.width-160; i+=offset){
            currentX=i;
            createBox(currentX,currentY,offset);
          } //across -> right

          for(let i = 0 ; i< 25; i++){
           
            createBox(currentX,currentY,offset);
            currentY+=offset;
          } // down 

          for(let i = parentBounds.width-180; i> offset; i-=offset){
            currentX=i;
            createBox(currentX,currentY,offset);
          } //across -> left



          for(let i = 0 ; i< 22; i++){
           
            createBox(currentX,currentY,offset);
            currentY+=offset;
          } // down 


          for(let i = currentX; i< parentBounds.width-160; i+=offset){
            currentX=i;
            createBox(currentX,currentY,offset);
          } //across -> right



          for(let i = 0 ; i< 23; i++){
           
            createBox(currentX,currentY,offset);
            currentY+=offset;
          } // down 

          for(let i = parentBounds.width-180; i> parentBounds.width/2 -60; i-=offset){
            currentX=i;
            createBox(currentX,currentY,offset);
          } //across -> left


          for(let i = 0 ; i< 5; i++){
           
            createBox(currentX,currentY,offset);
            currentY+=offset;
          } // down 


        }
        /** END FUNC **/

    /************************************************
    **** FUNCTION  -> TO CREATE DYNAMICALLY A SINGLE BOX  ****
   *************************************************/
          
        function createBox(currentX,currentY,offset){
            let d = document.createElement("div");
            d.classList.add("box");
            d.style.width =  `${offset/4}px`
            d.style.height = `${offset/4}px`
            d.style.left = `${currentX}px`;
            d.style.top = `${currentY}px`;
            d.style.backgroundColor = "purple"
            document.getElementById("parent").append(d);
            
            boxes.push(d);
          }

          //END FUNC to create

        /************************************************
        **** FUNCTION  -> CALLBACK ON SCROLL   - REVEAL ANIMATION  ****
        *************************************************/
       function fillBoxes(){

          let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
       
          let t = boxes.length/100; //.85 boxes drawn for every perecent
          console.log("ola:: " +t*scrollPercentage*100);

         // what direction is the scroll going in ? AND
         // set the direction var 

           if(document.documentElement.scrollTop< prevScrollTop){
            direction = "up"

           }
           else{
            direction ="down";
           }
          // console.log(document.documentElement.scrollTop);
           console.log( direction);
           prevScrollTop = document.documentElement.scrollTop;
         
        //going down
        if(direction ==="down"){
          let i=0;
          while(i<(t*scrollPercentage*100) && i< boxes.length){
           
            boxes[i].style.backgroundColor = "orange";
            i++;
         }

      

        }

        // UNFILL boxes in array until scroll percentage
        //direction is up...
        else {
          let j = boxes.length;
          while(j>(t*scrollPercentage*100) && j>0){
              j--;
              boxes[j].style.backgroundColor = "purple";
           }
          
        
        }
    }
    //END FUNC

       
    }, [])


    return (
              <div className = "wrapper" id = "parent"> 
          </div>





    );
}

export default Background;