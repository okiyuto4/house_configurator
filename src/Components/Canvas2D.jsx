import React, { useRef, useEffect } from 'react'

const Canvas2D = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx, img) => {
    // ctx.fillStyle = '#000000'
    // ctx.beginPath()
    // ctx.moveTo(50, 100);
    // ctx.lineTo(100, 100);
    // ctx.lineTo(100, 50);
    // ctx.closePath();
    // ctx.clip();
    // ctx.drawImage(img, 0, 0, 50, 50)



    ctx.save();
    ctx.beginPath();
    ctx.moveTo(100, 100); // Starting point
    ctx.lineTo(400, 100); // Line to the right
    ctx.lineTo(250, 400); // Line to the bottom center
    ctx.closePath(); // Close the path

    ctx.clip(); // Clip to the defined path
    const pattern = ctx.createPattern(img, 'repeat'); // 'repeat', 'repeat-x', 'repeat-y', or 'no-repeat'
    ctx.fillStyle = pattern; // Set the fill style to the pattern
    ctx.fill(); // Fill the shape
    // Draw the image
    // ctx.drawImage(img, 10, 100, 300, 300); 
    ctx.restore();

    
    // Fill the path with the pattern
    
    // 
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    const image = new Image(1800, 1200);
    const image2 = new Image(40, 40);
    
    image.src =
      "/Images/back.jfif";
    image2.src =
      "/Images/1.png";
    image.width = 1800

    
    
    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      setTimeout(() => {
        console.log(canvas.width, canvas.height, image.width, image.height);
    }, 0);

        draw(context, image2)
    };
    
    //Our draw come here
    
  }, [])
  
  return <canvas ref={canvasRef} {...props} width={1800} height={1200} className="canvas2d"/>
}

export default Canvas2D