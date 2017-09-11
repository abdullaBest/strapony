"use strict"

let $ = {

}

class strapony {
    constructor(){
        this.el    = null;
        this._call = null;
        this._list = null;
    }
    set(id,a){
        if (this._list===null){
            this._list = new Map();
        }
        let b = this._list.get(id);
        if (b===undefined){
            b = a._call(null);
            this._list.set(id,b);
            this.el.appendChild(b);
        }else{
            a._call(b);
        }
    }
    del(id){
        if (this._list!==null){
            let b = this._list.get(id);
            if (b!==undefined){
                b.parentNode.removeChild(b);
                this._list.delete(id);
            }
        }
    }
    func(name,query,event){
        let l = this.el.querySelectorAll(query);
        for (let i=0;i<l.length;i++){
            let a = l[i];   
            a.dataset[name] = i;
            a[event] = this[name];
        }
    }
}

(function(){
    const splitter = '.';
    const c1 = '\\u0060';
    const c2 = '\\u0027';
    let l = document.querySelectorAll('*[id]');
    for (let i=0;i<l.length;i++){
        let el = l[i]; 
        let s = el.id.split(splitter);
        if (s.length!==0){
            let a = $;
            for (let i=0;i<s.length;i++){
                let name = s[i];
                let b = a[name];
                if (b===undefined){
                    b = new strapony();
                    a[name] = b;
                }
                a = b;
            }
            a.el = el;
            if (s[0]==='TPL'){ 
                el.parentNode.removeChild(el);
                el.removeAttribute('id');
                let s = el.innerHTML;
                s = s.replace(/`/g,c1);
                s = s.replace(/'/g,c2);
                a._call = new Function('d','if(d===null){ d = this.el.cloneNode(false); } d.innerHTML=`' + s + '`; return d;');
            }
        }
    }
})()
