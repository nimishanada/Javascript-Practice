//  find the area of a triangle

function areaOfTriangle(side1,side2,side3){
    const s = (side1 + side2 + side3) / 2;
    
    
    const areaValue = Math.sqrt(
      s * (s - side1) * (s - side2) * (s - side3)
    );
    return areaValue;
    }
    
    console.log(areaOfTriangle(3,4,5));  // 6