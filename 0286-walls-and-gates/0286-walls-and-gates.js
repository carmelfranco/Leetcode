/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    let ROWS=rooms.length, COLS=rooms[0].length;
    let visit = new Set(), q=[];    
    const addRoom=(r,c)=>{ 
        if(r<0 || r==ROWS || c<0 || c==COLS || rooms[r][c]==-1 || visit.has(r+"_"+c)){
            return;
        }
        visit.add(r+"_"+c);
        q.push({"row":r,"col":c});
    }    
    for(let r=0;r<ROWS;r++){
        for(let c=0;c<COLS;c++){
            if(rooms[r][c]==0){
                q.push({"row":r,"col":c});
                visit.add(r+"_"+c);
            }
        }
    }   
    let dist =0;
    while(q.length){ // BFS
        let size=q.length;
        while(size--){
            let obj=q.shift();
            let r=obj.row, c = obj.col;
            rooms[r][c]=dist;
            addRoom(r+1,c);
            addRoom(r-1,c);
            addRoom(r,c+1);
            addRoom(r,c-1);
        }
        dist++;
    }     
};