var flipAndInvertImage = function(image) {
    let r = image.map((item,index) => {
        return item.reverse().map((item,index) => {
            if(item === 0){
               return  item = 1 ;
            }else{
               return  item = 0;
            }
        });     
    });
    return r;
};