
function count(){
    var start = window.document.getElementById('txts')
    var finish = window.document.getElementById('txtf')
    var pace = window.document.getElementById('txtp')
    var res = document.getElementById('divRes')

    if(start.value == null || finish.value == null || pace.value == null) {
        window.alert(`Insert missing values`)
    } else{
        res.innerHTML = "Counting now: <br>" 
        var s = Number(start.value)
        var f = Number(finish.value)
        var p = Number(pace.value)
        
        if (f==s){
            window.alert('Start equals finish!')
            s = Number(window.prompt ('Set a new start:'))
            f = Number(window.prompt ('Set a new end:'))
        }
        if (p==0){
            window.alert('IMPOSSIBLE constant 0! Constant equals 1 will de adopted')
            p=1
        }else if (p<0){
            p = Math.abs(p)
        }
        
        if(f > s){        
            for (let c = s; c <= f; c += p){
                    divRes.innerHTML += ` ${c} \u{27A1}  `
                }
                    divRes.innerHTML += `  \u{1F3C1}`
        }else {
            for(let c = s;c >= f; c -= p){
                divRes.innerHTML += ` ${c} \u{27A1}  `
            }
            divRes.innerHTML += `  \u{1F3C1}`
        }   
    }
}
