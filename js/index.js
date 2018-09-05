window.onload=function () {
    let con1=document.querySelector(".con1");
    let con2=document.querySelector(".con2");
    let input=document.querySelector(".top input");
    let num1=document.querySelector("#num1");
    let num2=document.querySelector("#num2");
    let arr1,arr2;
    arr1=localStorage.arr1?localStorage.arr1.split(","):[];
    arr2=localStorage.arr2?localStorage.arr2.split(","):[];

    // let dels=document.defaultView.getComputedStyle(".content odiv.box:after");
    // console.log(con1, con2, input,dels);
    // let arr1=["未完成1"];
    // let arr2=["完成1","完成2"];
    update();

    function update(){
        localStorage.arr1=arr1.join(",");
        localStorage.arr2=arr2.join(",");
        con1.innerHTML="";
        con2.innerHTML="";
        num1.innerHTML=arr1.length;
        num2.innerHTML=arr2.length;
        arr1.forEach((item,index)=>{
            let box=document.createElement("div");
            box.className="box";
            let input=document.createElement("input");
            input.setAttribute("type","checkbox");
            input.className="input";
            let p=document.createElement("p");
            p.innerHTML=item;
            p.onclick=function(){
                let input=document.createElement("input");
                // input.value=this.innerText;
                let text=p.innerText;
                p.innerText="";
                input.value=text;
                input.onblur=function(){
                    arr1.splice(index,1,input.value)
                    update();
                };
                p.appendChild(input);
                input.focus();

            }
            // let str=`<input type="checkbox" ><p>${item}</p>`;
            // box.innerHTML=str;
            box.appendChild(input);
            box.appendChild(p);
            con1.appendChild(box);
            input.onclick=function () {
                arr1.splice(index,1);
                arr2.unshift(item);
                update();
            }
        })
        arr2.forEach((item,index)=>{
            let box=document.createElement("div");
            box.className="box";
            let input=document.createElement("input");
            input.className="input";
            input.setAttribute("type","checkbox");
            input.setAttribute("checked","checkbed");
            let p=document.createElement("p");
            p.innerHTML=item;
            // let str=`<input type="checkbox" ><p>${item}</p>`;
            // box.innerHTML=str;
            box.appendChild(input);
            box.appendChild(p);
            con2.appendChild(box);
            input.onclick=function () {
                arr2.splice(index,1);
                arr1.push(item);
                update();
            }

        })
    }
    //    获取input的值
        input.onkeydown=function (e) {
            if (e.keyCode==13&&this.value!=""){
                console.log(this.value);
                arr1.unshift(this.value);
                // console.log(arr1);
                this.value="";
                update();
            }
        }




}